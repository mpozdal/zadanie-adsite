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
		rozwin: 'Rozwiń',
		zwin: 'Zwiń',
	},
	title: 'Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.',
	short: 'Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]',
	desc: 'Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et.  Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et. Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et.',
};

export function scrollInto(id) {
	if (id === 'faq') {
		window.scrollTo({
			top: 2 * window.innerHeight - 160,
			behavior: 'smooth',
		});
	} else if (id === 'mainSection') {
		window.scrollTo({
			top: window.innerHeight - 80,
			behavior: 'smooth',
		});
	} else if (id === 'home') {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}
}
