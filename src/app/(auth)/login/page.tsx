// Enforcing client-side rendering only in this component
"use client";
import Image from "next/image";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function Login() {
	const supabase = createClient();
	const [error, setError] = useState<string | null>(null);
	console.log(location.origin);
	// Handler for the google-sign-in process
	const handleGoogleSignIn = async () => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				queryParams: {
					access_type: "offline",
					prompt: "select_account",
				},
				redirectTo: `${location.origin}/auth/callback`,
			},
		});

		if (error) {
			console.error("Error authenticating with Supabase:", error);
			setError(error.message);
		} else setError(null);
	};
	console.log(location.origin);

	return (
		<div className="w-full h-full min-h-screen bg-gray-100">
			<div className="w-full min-h-screen flex justify-between">
				<div className=" m-auto flex justify-center items-center flex-col">
					<div className="text-center mb-8 flex flex-col items-center ">
						LOgo
						<h1 className="text-xl font-semibold mt-4">Welcome Back!</h1>
						<p className="text-gray-600 mt-2 text-sm">
							Get started quickly by signing in with Google
						</p>
					</div>

					<button
						onClick={handleGoogleSignIn}
						className="w-max max-w-[255px] cursor-pointer flex text-base mr-2 text-gray-600 rounded-x rounded-full border-2 border-gray-200 justify-center items-center shadow-md px-6 py-2 bg-white font-bold hover:border-gray-400  transition-all duration-800">
						{/* <Image
							src={google}
							alt="Google Icon"
							style={{ width: 25, height: "auto" }}
							className="mr-2"
						/> */}
						Continue with Google
					</button>

					{error && (
						<p className="text-red-500 max-w-[255px] text-sm mt-2">
							<span className="font-medium mr-1">Error:</span>
							{error}
						</p>
					)}

					<footer className="absolute bottom-4 text-center text-gray-500 text-sm">
						<p>
							<a href="/privacy-policy" className="hover:underline">
								Privacy Policy
							</a>{" "}
							|{" "}
							<a href="/terms-of-service" className="hover:underline">
								Terms of Service
							</a>{" "}
							|{" "}
							<a href="/contact" className="hover:underline">
								Contact
							</a>
						</p>
					</footer>
				</div>
				<div className="w-1/2 hidden lg:block h-full relative min-h-screen">
					<Image
						src="/login/bg.jpg"
						alt="Login Background"
						layout="fill"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
}
