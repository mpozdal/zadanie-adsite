import logo from '../assets/logo.svg';
import { navItems } from '../constants';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
const Navbar = () => {
	const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

	const toggleNavbar = () => {
		setMobileDrawerOpen(!mobileDrawerOpen);
	};
	return (
		<nav className="sticky top-0 z-50 py-3 bg-primary">
			<div className="container px-4 mx-auto relative text-sm ">
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
								<a href={item.href}>{item.label}</a>
							</li>
						))}
					</ul>
					<div className="hidden lg:flex justify-center space-x-12 items-center">
						<Button text="Zadzwon do nas" primary />
					</div>
					<div className="lg:hidden md:flex flex-col justify-end">
						<button onClick={toggleNavbar}>
							{mobileDrawerOpen ? <X /> : <Menu />}
						</button>
					</div>
				</div>
				{mobileDrawerOpen && (
					<div className="fixed right-0 z-20 text-black bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
						<ul className="text-center">
							{navItems.map((item, index) => (
								<li key={index} className="py-4">
									<a href={item.href}>{item.label}</a>
								</li>
							))}
						</ul>
						<div className="flex space-x-6">
							<Button text="Zadzwon do nas" primary />
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
