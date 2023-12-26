import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';

import React from 'react';

import { SiAdobe, SiJavascript, SiMaildotru, SiNextdotjs, SiPhp, SiTypescript } from 'react-icons/si';
import { FaAngular, FaCss3Alt, FaDatabase, FaGitAlt, FaGithub, FaHtml5, FaLinkedin, FaNodeJs, FaReact } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { DiVisualstudio } from 'react-icons/di';
import { MdDevices } from 'react-icons/md';
import TypeWriter from 'typewriter-effect';

import { projects } from '../data/projects';

export default function Home() {
	const section1Ref = React.createRef(null);
	const section2Ref = React.createRef(null);
	const section3Ref = React.createRef(null);
	const section4Ref = React.createRef(null);
	const section5Ref = React.createRef(null);

	const router = useRouter();

	const scrollTo = (ref) => {
		window.scroll({
			top: ref.current.offsetTop,
			behavior: "smooth",
		});
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>My Portfolio</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>

				{/* <Image src="/amazed.svg" width="500" height="500" className={styles.outline}></Image> */}

				<div id="home" ref={section1Ref} className={`${styles.section} ${styles.section1}`}>
					<h1 className={styles.title}>
						Hi! I'm Jennifer.
					</h1>

					<div className={styles.description}>
						<span id={styles.preTypeWriterText}>Front-end web developer and </span>
						<TypeWriter
							options={{
								strings: ['plant mom.', 'bookworm.', 'Illustrator lover.', 'aspiring CSS guru.', 'occasional artist.'],
								autoStart: true,
								loop: true,
								pauseFor: 2500,
								delay: 100,
								deleteSpeed: 70,
								// wrapperClassName: 'typewriter'
							}}
						/>
					</div>
				</div>

				<div id="about" ref={section2Ref} className={`${styles.section} ${styles.section2}`}>
					<h2>About me</h2>

				</div>

				<div id="tools" ref={section3Ref} className={`${styles.section} ${styles.section3}`}>
					<h2>Tools I've worked with</h2>

					<div className={styles.toolsGrid}>
						<div className={styles.toolCard}>
							<FaHtml5 className={styles.toolIcon} />
							<p>HTML5</p>
						</div>
						<div className={styles.toolCard}>
							<FaCss3Alt className={styles.toolIcon} />
							<p>CSS3</p>
						</div>
						<div className={styles.toolCard}>
							<SiJavascript className={styles.toolIcon} />
							<p>JavaScript</p>
						</div>
						<div className={styles.toolCard}>
							<SiTypescript className={styles.toolIcon} />
							<p>TypeScript</p>
						</div>
						<div className={styles.toolCard}>
							<FaNodeJs className={styles.toolIcon} />
							<p>Node.js</p>
						</div>
						<div className={styles.toolCard}>
							<FaAngular className={styles.toolIcon} />
							<p>Angular</p>
						</div>
						<div className={styles.toolCard}>
							<FaReact className={styles.toolIcon} />
							<p>React</p>
						</div>
						<div className={styles.toolCard}>
							<SiNextdotjs className={styles.toolIcon} />
							<p>Next.js</p>
						</div>
						<div className={styles.toolCard}>
							<SiPhp className={styles.toolIcon} />
							<p>PHP</p>
						</div>
						<div className={styles.toolCard}>
							<FaDatabase className={styles.toolIcon} />
							<p>SQL</p>
						</div>
						<div className={styles.toolCard}>
							<FaGitAlt className={styles.toolIcon} />
							<p>Git</p>
						</div>
						<div className={styles.toolCard}>
							<FaGithub className={styles.toolIcon} />
							<p>GitHub</p>
						</div>
						<div className={styles.toolCard}>
							<TbApi className={styles.toolIcon} />
							<p>RESTful APIs</p>
						</div>
						<div className={styles.toolCard}>
							<MdDevices className={styles.toolIcon} />
							<p>Responsive Web Design</p>
						</div>
						<div className={styles.toolCard}>
							<DiVisualstudio className={styles.toolIcon} />
							<p>VS Code</p>
						</div>
						<div className={styles.toolCard}>
							<SiAdobe className={styles.toolIcon} />
							<p>Adobe Suite</p>
						</div>
					</div>
				</div>

				<div id="projects" ref={section4Ref} className={`${styles.section} ${styles.section4}`}>
					<h2>Projects</h2>

					<div className={styles.projectsGrid}>
						{projects.map((project, i) =>
							<div className={styles.projectCard} 
								key={i} 
								onClick={() => router.push({
									pathname: '/projects/[slug]', 
									query: { slug: project.name }
									})
								}>
								<div className={styles.projectImg}>
								<Image
									src={`/projects/${project.name}/${project.name}_1.png`}
									alt={`Image from the ${project.title} project`}
									layout="fill"
									objectFit="contain"
								/>
								</div>
								<div className={styles.projectInfo}>
									<h3>{project.title}</h3>
									<p>{project.subtitle}</p>
								</div>
							</div>
						)}
					</div>
				</div>

			</main>
		</div>
	)
}