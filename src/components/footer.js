import { SiMaildotru } from 'react-icons/si';
import styles from '../styles/Home.module.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';

export default function Footer() {
	const container = useRef();

	useGSAP(
		() => {
			gsap.registerPlugin(ScrollTrigger);

			// REVEAL ANIMATIONS, inspired by https://codepen.io/GreenSock/pen/pojzxwZ 
			function animateFrom(el, direction = 1) {
				var x = 0, y = direction * 100;

				if (el.classList.contains("reveal_fromLeft")) { x = -100; y = 0; }
				else if (el.classList.contains("reveal_fromRight")) { x = 100; y = 0; }

				el.style.transform = "translate(" + x + "px, " + y + "px)";
				el.style.opacity = "0";

				gsap.fromTo(
					el,
					{
						x: x,
						y: y,
						autoAlpha: 0
					},
					{
						x: 0,
						y: 0,
						autoAlpha: 1,
						duration: 1.5,
						ease: "expo",
						overwrite: "auto"
					}
				);
			}

			function hide(el) {
				gsap.set(el, { autoAlpha: 0 });
			}

			gsap.utils.toArray(".reveal").forEach(function (el) {
				hide(el); // assure that element is hidden when scrolling into view

				ScrollTrigger.create({
					trigger: el,
					onEnter: function () { animateFrom(el) },
					onEnterBack: function () { animateFrom(el, -1) },
					onLeave: function () { hide(el) } // hide element when scrolling out of view
				});
			});

			// FOOTER LINKS
			ScrollTrigger.batch(".footerIcon", {
				interval: 0.1,
				batchMax: 3,
				onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1, overwrite: true }),
				onLeave: batch => gsap.set(batch, { opacity: 0, y: -50, overwrite: true }),
				onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1, overwrite: true }),
				onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 50, overwrite: true }),
			});
		},
		{ scope: container }
	);

	return (
		<footer id="contact" className={`footer ${styles.footer}`} ref={container}>
			<div className={styles.topBox}>
				<h1 className={`reveal reveal_fromLeft ${styles.title}`}>Get in touch with me!</h1>
				<h2 className={`reveal`}>I don't bite, I promise.</h2>

				<div className={styles.footerLinks}>
					<a href="mailto:jennifer.svenssn@gmail.com">
						<SiMaildotru className={`footerIcon ${styles.footerIcon}`}></SiMaildotru>
					</a>
					<a href="https://www.linkedin.com/in/jennifer-svensson-36172717b/">
						<FaLinkedin className={`footerIcon ${styles.footerIcon}`} />
					</a>
					<a href="https://github.com/jennifersvensson1">
						<FaGithub className={`footerIcon ${styles.footerIcon}`} />
					</a>
				</div>
			</div>

			<div className={`reveal ${styles.bottomBox}`}>
				<p>&copy; Copyright 2024 - Jennifer Svensson</p>
				<p><Link href="https://github.com/jennifersvensson1/jensvensson" target="_blank">Site repo <MdArrowOutward /></Link></p>
			</div>
		</footer>
	);
}