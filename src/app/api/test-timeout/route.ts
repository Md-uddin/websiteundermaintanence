import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(
				NextResponse.json({
					success: true,
					message: "Hi buddy",
				})
			);
		}, 65000);
	});
}
