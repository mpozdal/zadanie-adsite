import React from 'react';

export const Button = ({ text, secondary, primary, href }) => {
	return (
		<>
			{primary && (
				<a
					href="tel:+48790222491"
					className="button bg-button text-white hover:opacity-50"
				>
					{text}
				</a>
			)}
			{secondary && (
				<a
					className="button bg-white  text-button hover:opacity-50"
					href="tel:+48790222491"
				>
					{text}
				</a>
			)}
		</>
	);
};
