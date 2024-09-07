import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { X } from 'lucide-react';
const ModalComponent = ({ modalIsOpen, setIsOpen }) => {
	useEffect(() => {
		if (modalIsOpen) document.body.style.overflow = 'hidden';
		else {
			document.body.style.overflow = 'unset';
		}
	}, [modalIsOpen]);

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<Modal
			className="fixed w-[100%] h-[70%] lg:w-[70%] px-8 bg-primary top-[50%] left-[50%] overflow-y-auto right-auto bottom-auto -translate-x-1/2 -translate-y-1/2  rounded-xl shadow-lg"
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel="Example Modal"
		>
			<h1 className="text-3xl font-bold text-center py-5 border-b-2 border-grey">
				Polityka prywatności
				<button className="pointer hover:opacity-50 transition-all">
					<X
						className="absolute top-5 right-5"
						onClick={closeModal}
					/>
				</button>
			</h1>
			<ol className="list-[upper-roman] font-bold text-xl p-8 gap-10">
				<li>
					<h2>Postanowienia ogólne</h2>
					<ol className="list-[decimal] font-normal text-sm">
						<li>
							Polityka prywatności określa, jak zbierane,
							przetwarzane i przechowywane są dane osobowe
							Użytkowników niezbędne do świadczenia usług drogą
							elektroniczną za pośrednictwem serwisu internetowego
							[adres strony] (dalej: Serwis).
						</li>
						<li>
							Serwis zbiera wyłącznie dane osobowe niezbędne do
							świadczenia i rozwoju usług w nim oferowanych.
						</li>
						<li>
							Dane osobowe zbierane za pośrednictwem Serwisu są
							przetwarzane zgodnie z Rozporządzeniem Parlamentu
							Europejskiego i Rady (UE) 2016/679 z dnia 27
							kwietnia 2016 r. w sprawie ochrony osób fizycznych w
							związku z przetwarzaniem danych osobowych i w
							sprawie swobodnego przepływu takich danych oraz
							uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie
							o ochronie danych, dalej RODO) oraz ustawą o
							ochronie danych osobowych z dnia 10 maja 2018 r.
						</li>
					</ol>
				</li>
				<li>
					<h2>Administrator danych</h2>
					<p className="font-normal text-sm ">
						Administratorem danych osobowych zbieranych poprzez
						Serwis jest [nazwa osoby prawnej/przedsiębiorcy/osoby
						fizycznej], adres: [adres siedziby/zamieszkania], KRS:
						[numer], NIP: [numer], REGON: [numer], adres poczty
						elektronicznej: [adres e-mail] (dalej: Administrator).
					</p>
				</li>
				<li>
					<h2>Cel zbierania danych osobowych</h2>
					<p className="font-normal text-sm ">
						Administratorem danych osobowych zbieranych poprzez
						Serwis jest [nazwa osoby prawnej/przedsiębiorcy/osoby
						fizycznej], adres: [adres siedziby/zamieszkania], KRS:
						[numer], NIP: [numer], REGON: [numer], adres poczty
						elektronicznej: [adres e-mail] (dalej: Administrator).
					</p>
				</li>
				<li>
					<h2>Rodzaj przetwarzanych danych osobowych</h2>
					<p className="font-normal text-sm ">
						Administratorem danych osobowych zbieranych poprzez
						Serwis jest [nazwa osoby prawnej/przedsiębiorcy/osoby
						fizycznej], adres: [adres siedziby/zamieszkania], KRS:
						[numer], NIP: [numer], REGON: [numer], adres poczty
						elektronicznej: [adres e-mail] (dalej: Administrator).
					</p>
				</li>
				<li>
					<h2>Okres przetwarzania danych osobowych</h2>
					<p className="font-normal text-sm ">
						Administratorem danych osobowych zbieranych poprzez
						Serwis jest [nazwa osoby prawnej/przedsiębiorcy/osoby
						fizycznej], adres: [adres siedziby/zamieszkania], KRS:
						[numer], NIP: [numer], REGON: [numer], adres poczty
						elektronicznej: [adres e-mail] (dalej: Administrator).
					</p>
				</li>
				<li>
					<h2>Udostępnianie danych osobowych</h2>
					<p className="font-normal text-sm ">
						Administratorem danych osobowych zbieranych poprzez
						Serwis jest [nazwa osoby prawnej/przedsiębiorcy/osoby
						fizycznej], adres: [adres siedziby/zamieszkania], KRS:
						[numer], NIP: [numer], REGON: [numer], adres poczty
						elektronicznej: [adres e-mail] (dalej: Administrator).
					</p>
				</li>
				<li>
					<h2>Prawa Użytkowników</h2>
					<p className="font-normal text-sm ">
						Administratorem danych osobowych zbieranych poprzez
						Serwis jest [nazwa osoby prawnej/przedsiębiorcy/osoby
						fizycznej], adres: [adres siedziby/zamieszkania], KRS:
						[numer], NIP: [numer], REGON: [numer], adres poczty
						elektronicznej: [adres e-mail] (dalej: Administrator).
					</p>
				</li>
				<li>
					<h2>Pliki cookies</h2>
					<p className="font-normal text-sm ">
						Administratorem danych osobowych zbieranych poprzez
						Serwis jest [nazwa osoby prawnej/przedsiębiorcy/osoby
						fizycznej], adres: [adres siedziby/zamieszkania], KRS:
						[numer], NIP: [numer], REGON: [numer], adres poczty
						elektronicznej: [adres e-mail] (dalej: Administrator).
					</p>
				</li>
				<li>
					<h2>Zautomatyzowane podejmowanie decyzji i profilowanie</h2>
					<p className="font-normal text-sm ">
						Administratorem danych osobowych zbieranych poprzez
						Serwis jest [nazwa osoby prawnej/przedsiębiorcy/osoby
						fizycznej], adres: [adres siedziby/zamieszkania], KRS:
						[numer], NIP: [numer], REGON: [numer], adres poczty
						elektronicznej: [adres e-mail] (dalej: Administrator).
					</p>
				</li>
				<li>
					<h2>Postanowienia końcowe</h2>
					<p className="font-normal text-sm ">
						Administratorem danych osobowych zbieranych poprzez
						Serwis jest [nazwa osoby prawnej/przedsiębiorcy/osoby
						fizycznej], adres: [adres siedziby/zamieszkania], KRS:
						[numer], NIP: [numer], REGON: [numer], adres poczty
						elektronicznej: [adres e-mail] (dalej: Administrator).
					</p>
				</li>
			</ol>
		</Modal>
	);
};

export default ModalComponent;
