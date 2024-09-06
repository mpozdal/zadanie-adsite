import React, { useState } from 'react';
import Slider from 'react-slick';
import Car from '../assets/car4.jpg';
import Car2 from '../assets/car5.jpg';
import Car3 from '../assets/car6.jpg';
import Car4 from '../assets/car_dost1.jpeg';
import Car5 from '../assets/car_dost2.jpg';
import Car6 from '../assets/car_dost3.jpg';
import { carsType, mainSectionText } from '../constants';
var settings = {
	dots: true,
	infinite: true,
	speed: 1000,
	slidesToShow: 2,
	slidesToScroll: 1,
	autoplaySpeed: 3000,
	cssEase: 'linear',
	autoplay: true,
	arrows: false,

	responsive: [
		{
			breakpoint: 1080,
			settings: {
				cssEase: 'linear',
				dots: true,
				infinite: true,
				speed: 1000,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplaySpeed: 3000,
				autoplay: true,
				arrows: false,
			},
		},
	],
};
const MainSection = () => {
	const [option, setOption] = useState(1);

	return (
		<div
			className="w-full h-[calc(100vh-5rem)] py-20 flex flex-col  "
			id="mainSection"
		>
			<header className="container flex flex-col   m-auto px-4  lg:max-w-[1440px] ">
				<p className="text-button text-xl font-roboto-condensed">
					{mainSectionText.text}
				</p>
				<h1 className="text-5xl  font-bebas-neue">
					{mainSectionText.title}
				</h1>
				<div className="flex gap-10 py-10 font-bold">
					{carsType.map((item) => (
						<button
							onClick={() => setOption(item.id)}
							className={
								option === item.id
									? 'text-button border-b-2 border-button '
									: 'text-black border-b-2 border-primary'
							}
						>
							{item.name}
						</button>
					))}
				</div>
			</header>
			<section className="container m-auto px-4  lg:max-w-[1440px]">
				<div className="">
					{option === 1 && (
						<div className="w-full">
							<Slider {...settings} className="-mx-5 ">
								<img
									src={Car}
									className="w-full px-5"
									alt="car1"
								/>
								<img
									src={Car2}
									className="w-full px-5"
									alt="car1"
								/>
								<img
									src={Car3}
									className="w-full px-5 "
									alt="car1"
								/>
							</Slider>
						</div>
					)}
					{option === 2 && (
						<div className="w-full">
							<Slider {...settings} className="text-center -mx-5">
								<img
									src={Car4}
									className="max-w-full px-5"
									alt="car1"
								/>
								<img
									src={Car5}
									className="max-w-full px-5"
									alt="car1"
								/>
								<img
									src={Car6}
									className="max-w-full px-5"
									alt="car1"
								/>
							</Slider>
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default MainSection;
