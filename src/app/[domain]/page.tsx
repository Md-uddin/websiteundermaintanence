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
export default function DomainPage({ params }: { params: { domain: string } }) {
	console.log({ params });
	const decodedDomain = decodeURIComponent(params?.domain);
	return <div>You are at domain:{decodedDomain} </div>;
}
