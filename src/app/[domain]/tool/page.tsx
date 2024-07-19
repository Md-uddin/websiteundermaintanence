"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useEffect, useState } from "react";

const Page = () => {
	const [user, setuser] = useState<any>(null);
	const supabase = createClient();
	const getUser = async () => {
		const user = await supabase.auth.getUser();
		setuser(user);
	};
	useEffect(() => {
		getUser();
	}, []);
	return (
		<div>
			you are at tools page inside a subdomain & your email{" "}
			{user?.data?.user?.email || "not found"}
		</div>
	);
};

export default Page;
