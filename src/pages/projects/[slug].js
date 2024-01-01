import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { projects } from '../../data/projects';
import styles from '../../styles/Home.module.css'
import { tools } from '../../data/tools';

import PhotoAlbum from "react-photo-album";

import { FaGithub } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

export default function Project() {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug) {
        return <div>Loading...</div>;
    }

    const project = projects.find(i => i.name === slug);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Jennifer's Portfolio: {project.title}</title>
            </Head>
            <main className={styles.main}>
                <div className={`${styles.section} ${styles.specSection}`}>
                    <h2>{project.title}</h2>
                    <h4>{project.subtitle}</h4>
                    <p>{project.desc}</p>

                    <div className={styles.projectSpec}>
                        <div>
                            <div className={styles.projectTags}>
                                {project.tags.map((tag, index) =>
                                    <p key={index}>#{tag}</p>
                                )}
                            </div>
                            <div className={styles.projectTools}>
                                {project.tools.map((tool, index) =>
                                    <div key={tool + " " + index + 1} className={styles.projectSpecToolIcon}>
                                        {tools.find((t) => t.key == tool).icon}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={styles.projectButtons}>
                            {project.github ?
                                <Link href={project.github}>
                                    <a className={styles.githubButton} target="_blank">
                                        <FaGithub className={styles.icon} />
                                    </a>
                                </Link>
                                : ""
                            }
                            {project.demo ?
                                <Link href={project.demo}>
                                    <a className={styles.projectButton} target="_blank">
                                        <p>Live Demo</p>
                                        <MdArrowOutward className={styles.miniIcon} />
                                    </a>
                                </Link>
                                : ""
                            }
                            {project.instructions ?
                                <Link href={project.instructions}>
                                    <a className={styles.projectButton} target="_blank">
                                        <p>Instructions</p>
                                        <MdArrowOutward className={styles.miniIcon} />
                                    </a>
                                </Link>
                                : ""
                            }
                        </div>
                    </div>
                    <div className={styles.imagesGrid}>
                        <PhotoAlbum layout="rows" photos={project.images} />
                    </div>

                </div>
            </main>
        </div>
    );
}