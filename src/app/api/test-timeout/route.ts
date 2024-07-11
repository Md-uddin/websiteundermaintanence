import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
	return new Promise((resolve) => {
		setTimeout(() => {
			const response = NextResponse.json({
				success: true,
				message: "Hi buddy",
			});

			// Set Cache-Control header to no-store to avoid static generation
			response.headers.set("Cache-Control", "no-store");

			resolve(response);
		}, 65000); // Original delay
	});
}
