import Image from '../assets/hero.png';
import Background from '../assets/bitmap2.png';
import { btnText, heroData, scrollInto } from '../constants';
import { Button } from './Button';
const Hero = () => {
	return (
		<div className="w-full py-24  h-[calc(100vh-5rem)] flex items-center lg:items-start">
			<img
				src={Background}
				alt="background"
				className="absolute -z-50 right-20 top-0"
			/>
			<div className="container mx-auto px-4 lg:max-w-[1440px]">
				<div className="flex flex-col ">
					<div className="text-7xl text-secondary text-center lg:text-start font-bebas-neue ">
						<p>{heroData.title.split(' ').slice(0, 2).join(' ')}</p>
						<p>{heroData.title.split(' ').slice(2, 4).join(' ')}</p>
					</div>
					<div className="pt-10 text-lg font-roboto-condensed text-center lg:text-start">
						<p className=" text-secondary">
							{heroData.desc.split(' ').slice(0, 6).join(' ')}
						</p>
						<p className="text-secondary">
							{heroData.desc.split(' ').slice(6, 10).join(' ')}
						</p>
					</div>
					<div className="pt-10 flex gap-5 flex-row justify-center lg:justify-start ">
						<button
							className="button bg-button text-white hover:opacity-50"
							onClick={() => {
								scrollInto('mainSection');
							}}
						>
							{btnText.photo}
						</button>

						<Button secondary text={btnText.phone} />
					</div>
				</div>
			</div>
			<div className="absolute right-0 bottom-20 -z-10 object-fit-scale-down hidden lg:flex max-w-[1400px]">
				<img src={Image} alt="cars" className="" />
			</div>
		</div>
	);
};

export default Hero;
