import React from 'react';

const Footer = () => {
	return (
		<div className="w-full bg-secondary border-t-2">
			<div className="container flex flex-col py-10 lg:flex-row  justify-between items-center md:max-w-[1480px] m-auto max-w-[600px] text-white text-sm">
				<span>Cars Spot</span>
				<button className="underline">Polityka prywatnosci</button>
			</div>
		</div>
	);
};

export default Footer;
