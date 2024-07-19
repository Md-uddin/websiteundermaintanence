import { createClient } from "@/utils/supabase/server";
import React from "react";

export async function generateStaticParams() {
	const allSites = [
		{ subdomain: "dev", customDomain: "dev.crea8iveclick.com" },
	];

	const allPaths = allSites
		.flatMap(({ subdomain, customDomain }) => [
			subdomain && {
				domain: `${subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`,
			},
			customDomain && {
				domain: customDomain,
			},
		])
		.filter(Boolean);

	return allPaths;
}
export default async function DomainPage({
	params,
}: {
	params: { domain: string };
}) {
	const decodedDomain = decodeURIComponent(params?.domain);
	const supabase = createClient();

	const user = (await supabase.auth.getUser()?.then((res) => res))?.data?.user;

	return (
		<div>
			You are at domain:{decodedDomain} & {user?.email || "no user found"}{" "}
		</div>
	);
}
