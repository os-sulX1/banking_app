import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const loggedIn = { firstname: "Sultan", lastName: "Saleh" };
	return (
		<main className="flex h-screen w-full font-inter">
			<Sidebar user={loggedIn} />
			<div className="flex size-full flex-col">
				<div className="root-layout">
					<Image
						src={"/icons/logo.svg"}
						alt="Menu icons"
						width={30}
						height={30}
					/>
					<div className="">
						<MobileNavbar user={loggedIn} />
					</div>
				</div>
				{children}
			</div>
		</main>
	);
}
