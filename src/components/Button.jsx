import React from 'react';

export const Button = ({ text, href, secondary, primary }) => {
	return (
		<>
			{primary && (
				<a
					className="button bg-button text-white hover:opacity-50"
					href={href}
				>
					{text}
				</a>
			)}
			{secondary && (
				<a
					className="button bg-white  text-button hover:opacity-50"
					href={href}
				>
					{text}
				</a>
			)}
		</>
	);
};
