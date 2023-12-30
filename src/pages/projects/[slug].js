import Head from 'next/head';
import { useRouter } from 'next/router';

import { projects } from '../../data/projects';
import styles from '../../styles/Home.module.css'

import PhotoAlbum from "react-photo-album";

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
                <div className={styles.section}>
                    <h2>{project.title}</h2>
                    <h4>{project.subtitle}</h4>
                    <p>{project.desc}</p>
                    <PhotoAlbum layout="rows" photos={project.images} />
                </div>
            </main>
        </div>
    );
}