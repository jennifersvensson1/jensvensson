import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

import React from 'react';


import TypeWriter from 'typewriter-effect';

import { projects } from '../data/projects';
import { tools } from '../data/tools';

import { FaGithub } from 'react-icons/fa';
import { MdArrowForward, MdArrowOutward } from "react-icons/md";

export default function Home() {
	const router = useRouter();

	return (
		<div className={styles.container}>
			<Head>
				<title>Jennifer's Portfolio</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>

				<div id="home" className={`${styles.section} ${styles.section1}`}>
					<h1 className={styles.title}>
						Hi! I'm Jennifer.
					</h1>

					<div className={styles.description}>
						<span id={styles.preTypeWriterText}>Front-end web developer and </span>
						<TypeWriter
							options={{
								strings: ['plant mom.', 'bookworm.', 'Illustrator lover.', 'playlist nerd.', 'aspiring CSS guru.', 'occasional artist.'],
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

				<div id="about" className={`${styles.section} ${styles.section2}`}>
					<div className={styles.aboutCircle}></div>

					<div className={styles.aboutText}>
						<h2>About me</h2>
						<h4>24 years old, from the deep forests of southern Sweden. Fresh from finishing a Masters degree in Media Technology, with a focus on web- and mobile development. I love a good programming challenge.</h4>
						{/* <h4>Favorite...</h4>
						<p><span>Framework:</span> React</p> */}
					</div>

				</div>

				<div id="tools" className={`${styles.section} ${styles.section3}`}>
					<h2>Tools I've worked with</h2>
					<h4>Some of the bits and bobs found in my creative toolbox:</h4>

					<div className={styles.toolsGrid}>
						{tools.map((tool, index) => (
							<div key={index} className={styles.toolCard}>
								<div key={tool + " " + index + 1} className={styles.toolIcon}>
									{tool.icon}
								</div>
								<p>{tool.name}</p>
							</div>
						))}
					</div>
				</div>

				<div id="projects" className={`${styles.section} ${styles.section4}`}>
					<h2>Projects</h2>

					<div className={styles.projectsGrid}>
						{projects.map((project, index) =>
							<div className={styles.projectCard} key={index}>
								<div className={styles.projectInfo}>
									<h3>{project.title}</h3>
									<p className={styles.projectDesc}>{project.subtitle}</p>
									<div className={styles.projectTags}>
										{project.tags.map((tag) =>
											<p>{tag}</p>
										)}
									</div>
									<div className={styles.projectTools}>
										{project.tools.map((tool, index) =>
											<div key={tool + " " + index + 1} className={styles.projectToolIcon}>
												{tools.find((t) => t.key == tool).icon}
											</div>
										)}
									</div>

									<div className={styles.projectButtons}>
										{project.github ?
											<button className={styles.githubButton} onClick={() => { window.location.href = project.github }}>
												<FaGithub className={styles.icon} />
											</button>
											: ""
										}
										{project.demo ?
											<button className={styles.projectButton} onClick={() => { window.location.href = project.demo }}>
												<p>Live Demo</p>
												<MdArrowOutward className={styles.miniIcon} />
											</button>
											: ""
										}
										{project.instructions ? 
											<button className={styles.projectButton} onClick={() => { window.location.href = project.instructions }}>
												<p>Instructions</p>
												<MdArrowOutward className={styles.miniIcon} />
											</button>
											: ""
										}

										<button className={styles.projectButton}
											onClick={() => router.push({
												pathname: '/projects/[slug]',
												query: { slug: project.name }
											})}>
											<p>Tell me more</p>
											<MdArrowForward className={styles.miniIcon} />
										</button>

									</div>
								</div>

								<div className={styles.projectImg}>
									<Image
										src={`/projects/${project.name}/${project.name}_1.png`}
										alt={`Image from the ${project.title} project`}
										layout="fill"
										objectFit="contain"
										objectPosition="center"
									/>
								</div>
							</div>
						)}
					</div>
				</div>
			</main>
		</div>
	)
}