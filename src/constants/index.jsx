export const navItems = [
	{ label: 'Galeria zdjęć', id: 'mainSection' },
	{ label: 'FaQ', id: 'faq' },
];
export const heroData = {
	title: 'SPRZEDAJEMY SAMOCHODY Z EUROPY',
	desc: 'Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.',
};
export const btnText = {
	photo: 'Zobacz zdjęcia',
	phone: 'Zadzwoń do nas',
};
export const mainSectionText = {
	text: 'Prezentacja firmy',
	title: 'ZOBACZ NASZĄ GALERIĘ ZDJĘĆ',
};
export const carsType = [
	{ name: 'Samochody osobowe', id: 1 },
	{ name: 'Samochody dostawcze', id: 2 },
];
export const seoData = {
	btn: {
		rozwin: "Rozwiń",
		zwin: "Zwiń"
	},
	title: 'Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.',
	short: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae fuga dolorum facere aliquid odit dicta sapiente aut maiores quam, ducimus, voluptatum nostrum laborum. Sed debitis ipsa vel eaque perspiciatis nemo nostrum ad vitae facilis. Ab optio accusantium rem sunt impedit veniam explicabo soluta [...]',
	desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae fuga dolorum facere aliquid odit dicta sapiente aut maiores quam, ducimus, voluptatum nostrum laborum. Sed debitis ipsa vel eaque perspiciatis nemo nostrum ad vitae facilis. Ab optio accusantium rem sunt impedit veniam explicabo soluta dicta. Libero, sunt? Quasi recusandae quia modi similique itaque odit dolorum soluta facere quidem, accusantium asperiores, numquam nesciunt laboriosam doloribus aspernatur voluptatem ducimus culpa dignissimos explicabo necessitatibus esse? Tempore nesciunt consequuntur aut optio, commodi omnis consectetur adipisci perferendis fugit. Exercitationem!',
};

export function scrollInto(id) {
	const element = document.getElementById(id);
	element?.scrollIntoView({
		behavior: 'smooth',
	});
}
