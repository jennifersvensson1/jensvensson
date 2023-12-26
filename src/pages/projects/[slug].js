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

            <main className={styles.main}>

                <div className={styles.section}>
                <h2>{project.title}</h2>
                <h4>{project.subtitle}</h4>
                <p>{project.desc}</p>

                <div className={styles.imagesGrid}>
                    {project.images.map((img, index) => 
                        <Image 
                            src={`/projects/${project.name}/${project.name}_${index + 1}.png`} 
                            key={`${project.name} image ${index + 1}`}
                            alt={`Project image ${index + 1}`}
                            width="400"
                            height="220"
                            layout="responsive"
                        />
                    )}
                </div>
                </div>
                
                
            </main>
        </div>
    );
}