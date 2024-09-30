import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./footer.scss";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-banner relative pt-[48px] pb-[52px] ">
				<div className="footer-banner-bg absolute inset-0 z-[-1] bg-primary">
					<Image
						src={"/placeholder-01.png"}
						alt=""
						objectFit="cover"
						layout="fill"
					/>
				</div>
				<div className="container">
					<div className="fb-title text-white lg:flex justify-between items-center  ">
						<div className="title max-w-[604px] mb-8 md:mb-0">
							<h2 className="mb-2">हाम्रो एप डाउनलोड गर्नुहोस </h2>
							<p>
								अनलाइन परिछया | आफुले तयारी गर्न खोजेको समूह छनोट गर्नुहोस
								अनलाइन परिछया | आफुले तयारी गर्न खोजेको समूह छनोट गर्नुहोस
								अनलाइन परिछया | आफुले तयारी गर्न खोजेको समूह छनोट गर्नुहोस
							</p>
						</div>
						<div className="title-btn-group flex lg:justify-end gap-[12px] ">
							<Link href={"#"}>App Store</Link>
							<Link href={"#"}>Google Play</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-content section-padding-y">
				<div className="container">
					<div className="footer-links md:grid grid-cols-2 lg:grid-cols-12">
						<div className="col-span-1 lg:col-span-2">
							<div className="footer-link-single">
								<h3 className="mb-4 text-secondary">Quick Links</h3>
								<ul>
									<li>
										<Link href={"#"}>Home</Link>
									</li>
									<li>
										<Link href={"#"}>Live Classes</Link>
									</li>
									<li>
										<Link href={"#"}>Recorded Classes</Link>
									</li>
									<li>
										<Link href={"#"}>Free Materials</Link>
									</li>
									<li>
										<Link href={"#"}>PDFs & Ebooks</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-span-1 lg:col-span-4">
							<div className="footer-link-single">
								<h3 className="mb-4 text-secondary">Live Classes</h3>
								<ul>
									<li>
										<Link href={"#"}>
											शिक्षक सेवा आयोग | नायव सुब्बा - प्रथम पत्र (GK & IQ)
										</Link>
									</li>
									<li>
										<Link href={"#"}>नायव सुब्बा - प्रथम पत्र (GK & IQ)</Link>
									</li>
									<li>
										<Link href={"#"}>
											शिक्षक सेवा आयोग | नायव सुब्बा (GK & IQ)
										</Link>
									</li>
									<li>
										<Link href={"#"}>
											नायव सुब्बा | शिक्षक सेवा आयोग - प्रथम पत्र (GK & IQ)
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-span-1 lg:col-span-2">
							<div className="footer-link-single">
								<h3 className="mb-4 text-secondary">Company</h3>
								<ul>
									<li>
										<Link href={"#"}>About</Link>
									</li>
									<li>
										<Link href={"#"}>Contact</Link>
									</li>
									<li>
										<Link href={"#"}>FAQs</Link>
									</li>
									<li>
										<Link href={"#"}>Privacy Policy</Link>
									</li>
									<li>
										<Link href={"#"}>Terms & Conditions</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-span-1 lg:col-span-4">
							<div className="footer-link-single">
								<h3 className="mb-4 text-secondary">Quick Contacts</h3>
								<ul>
									<li>Thimi, Madyepur Thimi-4, Bhaktapur</li>
									<li>
										<Link href={"#"}>9866961571, 9819947321</Link>
									</li>
									<li>
										<Link href={"#"}>info@hamroloksewa.com</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
