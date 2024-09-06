import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { X } from 'lucide-react';
import { scrollInto } from '../constants';
const Footer = () => {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	useEffect(() => {
		if (modalIsOpen) document.body.style.overflow = 'hidden';
		else {
			document.body.style.overflow = 'unset';
		}
	}, [modalIsOpen]);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div className="w-full  bg-secondary border-t-2 ">
			<Modal
				className="fixed w-[100%] h-[70%] lg:w-[70%] p-8 bg-primary top-[50%] left-[50%] overflow-y-auto right-auto bottom-auto -translate-x-1/2 -translate-y-1/2"
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Example Modal"
			>
				<h1 className="text-3xl font-bold text-center py-5">
					Polityka prywatności
					<button className="pointer hover:opacity-50 transition-all">
						<X
							className="absolute top-5 right-5"
							onClick={closeModal}
						/>
					</button>
				</h1>

				<h2 className="text-xl font-bold bg-primary p-1 my-1">
					I. Postanowienia ogólne
				</h2>
				<p>
					<ol>
						<li>
							1. Polityka prywatności określa, jak zbierane,
							przetwarzane i przechowywane są dane osobowe
							Użytkowników niezbędne do świadczenia usług drogą
							elektroniczną za pośrednictwem serwisu internetowego
							[adres strony] (dalej: Serwis).
						</li>
						<li>
							2. Serwis zbiera wyłącznie dane osobowe niezbędne do
							świadczenia i rozwoju usług w nim oferowanych.
						</li>
						<li>
							3. Dane osobowe zbierane za pośrednictwem Serwisu są
							przetwarzane zgodnie z Rozporządzeniem Parlamentu
							Europejskiego i Rady (UE) 2016/679 z dnia 27
							kwietnia 2016 r. w sprawie ochrony osób fizycznych w
							związku z przetwarzaniem danych osobowych i w
							sprawie swobodnego przepływu takich danych oraz
							uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie
							o ochronie danych, dalej RODO) oraz ustawą o
							ochronie danych osobowych z dnia 10 maja 2018 r..
						</li>
					</ol>
				</p>
				<h2 className="text-xl font-bold bg-primary p-1 my-1">
					I. Administrator danych
				</h2>
				<p>
					Administratorem danych osobowych zbieranych poprzez Serwis
					jest [nazwa osoby prawnej/przedsiębiorcy/osoby fizycznej],
					adres: [adres siedziby/zamieszkania], KRS: [numer], NIP:
					[numer], REGON: [numer], adres poczty elektronicznej: [adres
					e-mail] (dalej: Administrator).
				</p>
				<h2 className="text-xl font-bold bg-primary p-1 my-1">
					III. Cel zbierania danych osobowych
				</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Consectetur, necessitatibus similique natus, possimus cum
					mollitia, temporibus nihil tenetur beatae quod eum dolorem.
					Culpa eveniet aliquam voluptatibus neque voluptatem ut et
					repudiandae vitae iusto fuga eius, voluptates pariatur.
				</p>
				<h2 className="text-xl font-bold bg-primary p-1 my-1">
					IV. Rodzaj przetwarzanych danych osobowych
				</h2>
				<p>
					Administrator może przetwarzać dane osobowe Użytkownika:
					imię i nazwisko, data urodzenia, adres zamieszkania, adres
					e-mail, numer telefonu, NIP.
				</p>
				<h2 className="text-xl font-bold bg-primary p-1 my-1">
					V. Okres przetwarzania danych osobowych
				</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Consectetur, necessitatibus similique natus, possimus cum
					mollitia, temporibus nihil tenetur beatae quod eum dolorem.
					Culpa eveniet aliquam voluptatibus neque voluptatem ut et
					repudiandae vitae iusto fuga eius, voluptates pariatur.
				</p>
				<h2 className="text-xl font-bold bg-primary p-1 my-1">
					VI. Udostępnianie danych osobowych
				</h2>
				<p>
					1. Dane osobowe Użytkowników mogą być przekazywane:
					podmiotom powiązanym z Administratorem, jego podwykonawcom,
					podmiotom współpracującym z Administratorem np. firmom
					obsługującym e-płatności, firmom świadczącym usługi
					kurierskie/pocztowe, kancelariom prawnym. 2. Dane osobowe
					Użytkowników nie będą/będą przekazywane poza teren
					Europejskiego Obszaru Gospodarczego (EOG).
				</p>

				<h2 className="text-xl font-bold bg-primary p-1 my-1">
					VII. Prawa Użytkowników
				</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Consectetur, necessitatibus similique natus, possimus cum
					mollitia, temporibus nihil tenetur beatae quod eum dolorem.
					Culpa eveniet aliquam voluptatibus neque voluptatem ut et
					repudiandae vitae iusto fuga eius, voluptates pariatur.
				</p>
				<h2 className="text-xl font-bold bg-primary p-1 my-1">
					VIII. Pliki cookies
				</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Consectetur, necessitatibus similique natus, possimus cum
					mollitia, temporibus nihil tenetur beatae quod eum dolorem.
					Culpa eveniet aliquam voluptatibus neque voluptatem ut et
					repudiandae vitae iusto fuga eius, voluptates pariatur.
				</p>
				<h2 className="text-xl font-bold bg-primary p-1 my-1">
					IX. Zautomatyzowane podejmowanie decyzji i profilowanie
				</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Consectetur, necessitatibus similique natus, possimus cum
					mollitia, temporibus nihil tenetur beatae quod eum dolorem.
					Culpa eveniet aliquam voluptatibus neque voluptatem ut et
					repudiandae vitae iusto fuga eius, voluptates pariatur.
				</p>
				<h2 className="text-xl font-bold bg-primary p-1 my-1">
					X. Postanowienia końcowe
				</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Consectetur, necessitatibus similique natus, possimus cum
					mollitia, temporibus nihil tenetur beatae quod eum dolorem.
					Culpa eveniet aliquam voluptatibus neque voluptatem ut et
					repudiandae vitae iusto fuga eius, voluptates pariatur.
				</p>
			</Modal>
			<div className="container flex flex-row py-10 px-4 lg:flex-row  justify-between items-center m-auto  text-white text-sm lg:max-w-[1440px]">
				<button
					className="font-bold pointer"
					onClick={() => scrollInto('home')}
				>
					Cars Spot
				</button>
				<button className="underline" onClick={openModal}>
					Polityka prywatności
				</button>
			</div>
		</div>
	);
};

export default Footer;
