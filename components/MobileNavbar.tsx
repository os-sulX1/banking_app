"use client";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar = ({ user }: MobileNavProps) => {
	const pathName = usePathname();
	return (
		<section className="w-full m-w-[264px]">
			<Sheet>
				<SheetTrigger>
					<Image
						src={"/icons/hamburger.svg"}
						alt=" hamburger Icon"
						width={30}
						height={30}
						className="cursor-pointer"
					/>
				</SheetTrigger>
				<SheetContent side="left" className="border-none bg-white ">
					<Link
						href={"/"}
						className="flex  cursor-pointer items-center gap-1 px-6"
					>
						<Image
							src={"icons/logo.svg"}
							alt={"Horizon logo"}
							width={34}
							height={34}
						/>{" "}
						<h1 className="text-26 font-ibm-plex-serif font-bold">Horizon</h1>
					</Link>
					<div className="mobilenav-sheet">
						<SheetClose asChild>
							<nav className="flex h-full flex-col gap-6 pt-16 text-white">
								{sidebarLinks.map((item) => {
									const isActive =
										pathName === item.route ||
										pathName.startsWith(`${item.route}/`);
									return (
										<SheetClose asChild key={item.label}>
											<Link
												href={item.route}
												key={item.label}
												className={cn("mobile-sheet_close w-full", {
													"bg-bank-gradient": isActive,
												})}
											>
												
													<Image
														src={item.imgURL}
														alt={item.label}
														width={20}
                            height={20}
														className={cn({
															"brightness-[3] invert-0": isActive,
														})}
													/>
												{" "}
												<p
													className={cn('text-16 pl-6 font-semibold text-black-2',{
                            'text-white': isActive
                          })}
												>
													{" "}
													{item.label}
												</p>
											</Link>
										</SheetClose>
									);
								})}

                user 
							</nav>
						</SheetClose>
            Footer
					</div>
				</SheetContent>
			</Sheet>
		</section>
	);
};

export default MobileNavbar;
