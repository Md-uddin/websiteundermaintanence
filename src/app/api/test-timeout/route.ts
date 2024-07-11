import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, res: NextResponse) {
	return new Promise((resolve) => {
		setTimeout(() => {
			return resolve(
				NextResponse.json({
					success: true,
					message: "Hi buddy",
				})
			);
		}, 65000);
	});
}
