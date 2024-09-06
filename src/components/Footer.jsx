import React from 'react';

const Footer = () => {
	return (
		<div className="w-full bg-secondary border-t-2">
			<div className="container flex flex-row py-10 px-4 lg:flex-row  justify-between items-center m-auto  text-white text-sm lg:max-w-[1440px]">
				<span>Cars Spot</span>
				<button className="underline">Polityka prywatnosci</button>
			</div>
		</div>
	);
};

export default Footer;
