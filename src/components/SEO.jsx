import { seoData } from '../constants';
import { useState } from 'react';
const SEO = () => {
	const [showMoreFirst, setShowMoreFirst] = useState(false);
	const [showMoreSecond, setShowMoreSecond] = useState(false);
	return (
		<div className="w-full bg-secondary text-white text-sm " id="faq">
			<div className=" container flex flex-col py-20 lg:flex-row  justify-center text-justify lg:text-start items-center lg:items-start  m-auto  gap-20 px-4  lg:max-w-[1440px]">
				<div className="flex flex-col container gap-y-10  lg:w-[50%]">
					<h1 className="uppercase text-3xl text-bold font-bebas-neue ">
						{seoData.title}
					</h1>

					<p className="">
						{showMoreFirst ? seoData.desc : seoData.short}
					</p>
					<button
						className="border-b-2 w-fit py-1 font-roboto-condensed "
						onClick={() => setShowMoreFirst(!showMoreFirst)}
					>
						{showMoreFirst ? seoData.btn.zwin : seoData.btn.rozwin}
						<span className="text-xl">
							{showMoreFirst ? '  ↑' : '  ↓'}{' '}
						</span>
					</button>
				</div>
				<div className="flex flex-col container gap-y-10  lg:px-0 lg:w-[50%]">
					<h1 className="uppercase text-3xl text-bold font-bebas-neue ">
						{seoData.title}
					</h1>

					<p>{showMoreSecond ? seoData.desc : seoData.short}</p>
					<button
						className="border-b-2 w-fit py-1 font-roboto-condensed"
						onClick={() => setShowMoreSecond(!showMoreSecond)}
					>
						{showMoreSecond ? seoData.btn.zwin : seoData.btn.rozwin}
						<span className="text-xl">
							{showMoreSecond ? '  ↑' : '  ↓'}{' '}
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SEO;
