import Image from '../assets/hero.png';

import { Button } from './Button';
const Hero = () => {
	return (
		<div className="w-full py-24 ">
			<div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0 ">
				<div className="flex flex-col lg:justify-center">
					<div className="text-7xl text-secondary text-center md:text-start font-bebas-neue">
						<p>SPRZEDAJEMY SAMOCHODY</p>
						<p>Z EUROPY</p>
					</div>
					<div className="pt-10 text-lg font-roboto-condensed text-center md:text-start">
						<p className=" text-secondary">
							Kup komfortowy pojazd, aby kazda podroz
						</p>
						<p className="text-secondary">
							byla wyjatkowym przezyciem
						</p>
					</div>
					<div className="pt-10 flex gap-5 flex-col lg:flex-row">
						<Button primary text="Zobacz zdjecia" />
						<Button secondary text="Zadzwon do nas" />
					</div>
				</div>
			</div>
			<div className="absolute right-0 bottom-20  max-w-[1200px] hidden lg:flex object-scale-down">
				<img src={Image} alt="cars" className="" />
			</div>
		</div>
	);
};

export default Hero;
