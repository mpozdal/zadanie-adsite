import React from 'react';
import Slider from 'react-slick';
import Car from '../assets/car1.jpg';
var settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 2,
	slidesToScroll: 1,
};
const MainSection = () => {
	return (
		<div className="w-full">
			<header className="container flex flex-col py-20  justify-center items-start md:max-w-[1480px] m-auto max-w-[600px] ">
				<p className="text-button text-xl font-roboto-condensed">
					Prezentacja firmy
				</p>
				<h1 className="text-5xl font-bebas-neue">
					ZOBACZ NASZA GALERIE ZDJEC
				</h1>
				<div className="flex gap-10 pt-10">
					<button>Samochody osobowe</button>
					<button>Samochody dostawcze</button>
				</div>
			</header>
			<section className="w-full py-10 ">
				<Slider
					{...settings}
					className="container flex flex-col py-20  justify-center items-start md:max-w-[1480px] m-auto max-w-[600px]"
				>
					<div className="w-[500px] h-[500px] px-20">
						<img src={Car} alt="car1" className="" />
					</div>
					<div className="w-[500px] h-[500px] px-20">
						<img src={Car} alt="car1" className="" />
					</div>
				</Slider>
			</section>
		</div>
	);
};

export default MainSection;
