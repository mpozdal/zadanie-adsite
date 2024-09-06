import React, { useEffect } from 'react';
import { preLoaderAnim } from '../animations';

const Preloader = () => {
	useEffect(() => {
		preLoaderAnim();
	}, []);

	return (
		<div className="preloader w-screen h-screen bg-button z-50 text-white fixed flex justify-center items-center overflow-hidden">
			<div className="texts-container flex items-center justify-between h-14 w-60 font-bold font-3xl overflow-hidden color-white">
				<span>Cars Spot</span>
			</div>
		</div>
	);
};

export default Preloader;
