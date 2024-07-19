import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
	// Create a supabase client on the browser with project's credentials
	return createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookieOptions: {
				domain: "." + "crea8iveclick.com",
				maxAge: 100000000,
				path: "/",
				sameSite: "lax",
				secure: process.env.NEXT_PUBLIC_AUTH_DOMAIN?.startsWith("https://"),
			},
		}
	);
}
