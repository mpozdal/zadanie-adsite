import logo from '../assets/logo.svg';
import { btnText, navItems, scrollInto } from '../constants';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
const Navbar = () => {
	const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	function handleScroll() {
		if (window.scrollY > 20) setScrolling(true);
		else setScrolling(false);
	}

	const toggleNavbar = () => {
		setMobileDrawerOpen(!mobileDrawerOpen);
	};
	return (
		<nav
			className={
				scrolling
					? 'shadow-md bg-primary sticky top-0 z-50  h-20 flex items-center'
					: ' sticky top-0 z-50  h-20 flex items-center'
			}
		>
			<div className="container m-auto w-full px-4  lg:max-w-[1440px]">
				<div className="flex justify-between items-center">
					<div className="flex items-center flex-shrink-0">
						<img className="h-10 w-10 mr-2" src={logo} alt="logo" />
						<span className="text-xl tracking-tight">
							<span className="text-button">Cars</span>
							Spot
						</span>
					</div>
					<ul className="hidden lg:flex ml-14 space-x-12 font-roboto-flex">
						{navItems.map((item, index) => (
							<li key={index}>
								<button onClick={() => scrollInto(item.id)}>
									{item.label}
								</button>
							</li>
						))}
					</ul>
					<div className="hidden lg:flex justify-center space-x-12 items-center">
						<Button text="Zadzwon do nas" primary phone />
					</div>
					<div className="lg:hidden md:flex flex-col justify-end">
						<button onClick={toggleNavbar}>
							{mobileDrawerOpen ? <X /> : <Menu />}
						</button>
					</div>
				</div>
				{mobileDrawerOpen && (
					<div className="fixed  z-40 right-0  text-black bg-primary w-full p-12 flex flex-col justify-center items-center lg:hidden">
						<ul className="text-center">
							{navItems.map((item, index) => (
								<li key={index} className="py-4">
									<button
										onClick={() => {
											scrollInto(item.id);
											setMobileDrawerOpen(false);
										}}
									>
										{item.label}
									</button>
								</li>
							))}
						</ul>
						<div className="flex space-x-6">
							<Button text={btnText.phone} primary />
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
