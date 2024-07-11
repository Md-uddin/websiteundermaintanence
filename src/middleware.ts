import { NextRequest, NextResponse } from "next/server";

export const config = {
	matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};

export default async function middleware(req: NextRequest) {
	const url = req.nextUrl;

	// Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
	let hostname = req.headers
		.get("host")!
		.replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

	// Special case for Vercel preview deployment URLs
	if (
		hostname.includes("---") &&
		hostname.endsWith(`.${process.env.NEXT_PUBLIC_VERCEL_DEPLOYMENT_SUFFIX}`)
	) {
		hostname = `${hostname.split("---")[0]}.${
			process.env.NEXT_PUBLIC_ROOT_DOMAIN
		}`;
	}

	const searchParams = req.nextUrl.searchParams.toString();
	// Get the pathname of the request (e.g. /, /about, /blog/first-post)
	const path = `${url.pathname}${
		searchParams.length > 0 ? `?${searchParams}` : ""
	}`;
	console.log(path);

	// Check if the path includes "/api/"
	const isApiRoute = path.includes("/api/");

	console.log({ isApiRoute }, "-------------------");

	if (isApiRoute) {
		// If it's an API route, just continue without rewriting
		return NextResponse.next();
	}

	// Check if the hostname includes a subdomain
	const isSubdomain = hostname !== process.env.NEXT_PUBLIC_ROOT_DOMAIN;

	if (isSubdomain) {
		// Rewrite to /[domain]/[slug] dynamic route
		return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
	} else {
		// Handle root domain requests differently
		// You can rewrite to a specific page or just let it pass through without rewriting
		return NextResponse.next();
	}
}
