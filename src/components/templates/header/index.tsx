import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./header.scss";

export default function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="header-content flex justify-start items-center gap-6">
					<div className="header-logo relative aspect-headerLogo min-w-[183px]">
						<Link href="#">
							<Image
								src="/logo.svg"
								alt=""
								layout="fill"
								objectFit="contain"
								priority
							/>
						</Link>
					</div>

					<div className="header-menu-wrapper w-full">
						<div className="secondary-menu flex justify-between items-center py-2 border-b-[1px] border-solid border-gray-200">
							<p>
								Call us 24/7:{" "}
								<Link
									href={"tel:9819947321"}
									className="font-[700] underline text-secondary">
									9819947321
								</Link>
							</p>
							<div className="auth-options">
								<Link href={"/"} className="btn-outlined mr-8">
									Signup
								</Link>
								<Link href={"/"} className="btn-secondary">
									Login
								</Link>
							</div>
						</div>
						<div className="primary-menu">
							<ul className="flex justify-between items-center">
								<li className="active">
									<Link href={"#"}>Home</Link>
								</li>
								<li>
									<Link href={"#"}>Live Class</Link>
								</li>
								<li>
									<Link href={"#"}>Recorded Class</Link>
								</li>
								<li>
									<Link href={"#"}>Online exam</Link>
								</li>
								<li>
									<Link href={"#"}>PDF & Ebooks</Link>
								</li>
								<li>
									<Link href={"#"}>Teacher’s Packages</Link>
								</li>
								<li className="highlighted">
									<Link href={"#"}>Free Study Materials</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
