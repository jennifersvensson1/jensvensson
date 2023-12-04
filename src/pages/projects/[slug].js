import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { projects } from '../../data/projects';
import styles from '../../styles/Home.module.css'

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
                <title>{slug}</title>
            </Head>
            <Image src={"/projects/" + project.src} alt={"Image from the " + project.title + " project"} layout="fill" objectFit="contain"></Image>
            <h1>{project.title}</h1>
            <p>{project.desc}</p>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>

        </div>
    );
}