import { seoData } from '../constants';
import { useState } from 'react';
const SEO = () => {
	const [showMoreFirst, setShowMoreFirst] = useState(false);
	const [showMoreSecond, setShowMoreSecond] = useState(false);
	return (
		<div className="w-full bg-secondary text-white text-sm">
			<div className="container flex flex-col py-20 lg:flex-row  justify-center items-start md:max-w-[1480px] m-auto max-w-[600px] gap-20 ">
				<div className="flex flex-col gap-y-10 w-[50%]">
					<h1 className="uppercase text-3xl text-bold font-bebas-neue ">
						{seoData.title}
					</h1>

					<p>{showMoreFirst ? seoData.desc : seoData.short}</p>
					<button
						className="border-b-2 w-fit"
						onClick={() => setShowMoreFirst(!showMoreFirst)}
					>
						{showMoreFirst ? 'Zwin' : 'Rozwin'}
						<span className="text-xl">↓</span>
					</button>
				</div>
				<div className="flex flex-col gap-y-10 w-[50%]">
					<h1 className="uppercase text-3xl text-bold font-bebas-neue ">
						{seoData.title}
					</h1>

					<p>{showMoreSecond ? seoData.desc : seoData.short}</p>
					<button
						className="border-b-2 w-fit"
						onClick={() => setShowMoreSecond(!showMoreSecond)}
					>
						{showMoreSecond ? 'Zwin' : 'Rozwin'}
						<span className="text-xl">↓</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SEO;
