"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
type AuthFormProps = {
	type: string;
};

import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import type { z } from "zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { getLoggedInUser, signIn, signUp } from "@/lib/actions/user.actions";

const AuthForm = ({ type }: AuthFormProps) => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const formSchema = authFormSchema(type);
	const router = useRouter();
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		alert("Form is submitting");
		console.log("Form values:", data);
		setIsLoading(true);
		try {
			//sign up with appwriter & create plaid

			if (type === "sign-up") {
				const newUser = await signUp(data);
				setUser(newUser);
			}
			if (type === "sign-in") {
				const response = await signIn({
					email: data.email,
					password: data.password,
				});
				if (response) router.push("/");
			}
		} catch (error) {
			console.log(`we have enzounter an error ${error}`);
		} finally {
			setIsLoading(false);
		}

		// Simulate a delay to show the loading state
		setTimeout(() => {
			console.log(data);
		}, 1000);
	};
	return (
		<section className="auth-form">
			<header className="flex flex-col gap-5 md:gap-8">
				<Link href={"/"} className="flex  cursor-pointer items-center gap-1 ">
					<Image
						src={"icons/logo.svg"}
						alt={"Horizon logo"}
						width={34}
						height={34}
					/>{" "}
					<h1 className="text-26 font-ibm-plex-serif font-bold">Horizon</h1>
				</Link>
				<div className="flex flex-col gap-1 md:gap-3">
					<h1 className="text-24 lg:text-36 font-semibold text-gray-900">
						{user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
						<p className="text-16 font-normal text-gray-900">
							{user
								? "Link your Account to get started"
								: "Please enter your address"}
						</p>
					</h1>
				</div>
			</header>
			{user ? (
				<div className="flex flex-col gap-4">{/**Plaid LinkACCOUNT */}</div>
			) : (
				<>
					{" "}
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
							{type === "sign-up" && (
								<>
									<div className="flex gap-4">
										<CustomInput
											control={form.control}
											placeholder="Enter your first name"
											label="First Name"
											name="firstName"
										/>
										<CustomInput
											control={form.control}
											placeholder="Enter your last name"
											label="Last Name"
											name="lastName"
										/>
									</div>
									<CustomInput
										control={form.control}
										placeholder="Enter your specific address "
										label="Address"
										name="address1"
									/>
									<CustomInput
										control={form.control}
										placeholder="Enter your city "
										label="City"
										name="city"
									/>
									<div className="flex gap-4">
										<CustomInput
											control={form.control}
											label="State"
											placeholder="Example::NY"
											name="state"
										/>
										<CustomInput
											control={form.control}
											label="Postal code"
											placeholder="Example: 11101"
											name="postalCode"
										/>
									</div>
									<div className="flex gap-4">
										<CustomInput
											control={form.control}
											label="Date of Birth"
											placeholder="Example:YYYY-MM-DD"
											name="dateOfBirth"
										/>
										<CustomInput
											control={form.control}
											label="SSN"
											placeholder="Example:1234"
											name="ssn"
										/>
									</div>
								</>
							)}
							{/**fIRST INPUT */}
							<CustomInput
								control={form.control}
								label="Email"
								placeholder="Enter your email"
								name="email"
							/>
							{/**SECONDE INPUT */}

							<CustomInput
								control={form.control}
								label="Password"
								placeholder="Enter your password"
								name="password"
							/>
							<div className="flex flex-col gap-4">
								<Button type="submit" className="form-btn" disabled={isLoading}>
									{isLoading ? (
										<>
											<Loader2 className="animate-spin" size={20} />
											&nbsp; Loading...
										</>
									) : type === "sign-in" ? (
										"Sign In"
									) : (
										"Sign Up"
									)}
								</Button>
							</div>
						</form>
					</Form>
					<footer className="flex justify-center gap-1">
						<p className="text-14 font-normal text-gray-600">
							{type === "sign-in"
								? "don't have an account"
								: "Already have an account"}
						</p>
						<Link
							className="form-link"
							href={type === "sign-in" ? "/sign-up" : "/sign-in"}
						>
							{type === "sign-in" ? "Sign in" : "Sign up"}
						</Link>
					</footer>
				</>
			)}
		</section>
	);
};

export default AuthForm;
