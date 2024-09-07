import React, { useState } from 'react';

import { scrollInto } from '../constants';
import ModalComponent from './Modal';
const Footer = () => {
	const [modalIsOpen, setIsOpen] = useState(false);
	return (
		<div className="w-full  bg-secondary border-t-2 ">
			<ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
			<div className="container flex flex-row py-10 px-4 lg:flex-row  justify-between items-center m-auto  text-white text-sm lg:max-w-[1440px]">
				<button
					className="font-bold pointer"
					onClick={() => scrollInto('home')}
				>
					Cars Spot
				</button>
				<button className="underline" onClick={() => setIsOpen(true)}>
					Polityka prywatności
				</button>
			</div>
		</div>
	);
};

export default Footer;
