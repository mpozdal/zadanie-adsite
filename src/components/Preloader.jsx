import React, { useEffect } from 'react';
import { preLoaderAnim } from '../animations';

const Preloader = () => {
	useEffect(() => {
		preLoaderAnim();
	}, []);

	return (
		<div className="w-screen h-screen bg-current text-white fixed flex justify-center items-center overflow-hidden">
			<div className="flex items-center justify-between h-14 w-60 font-bold font-3xl overflow-hidden color-white">
				<span>Cars</span>
				<span>Spot</span>
			</div>
		</div>
	);
};

export default Preloader;
