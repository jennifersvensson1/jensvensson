import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { useRef } from 'react';

import { projects } from '../../data/projects';
import styles from '../../styles/Home.module.css'

import { tools } from '../../data/tools';

import { FaGithub } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

import { PhotoAlbum} from "react-photo-album";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';


export default function Project() {
    const container = useRef();
    const router = useRouter();
    const { slug } = router.query;

    useGSAP(() => {

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

        gsap.utils.toArray(".reveal").forEach(function(el) {
            hide(el); // assure that element is hidden when scrolling into view

            ScrollTrigger.create({
                trigger: el,
                onEnter: function () { animateFrom(el) },
                onEnterBack: function () { animateFrom(el, -1) },
                onLeave: function () { hide(el) } // hide element when scrolling out of view
            });
        });

        const batchVars = {
            interval: 0.1,
            batchMax: 3,
            onEnter: batch => gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.1, overwrite: true }),
            onLeave: batch => gsap.set(batch, { autoAlpha: 0, y: -50, overwrite: true }),
            onEnterBack: batch => gsap.to(batch, { autoAlpha: 1, y: 0, stagger: 0.1, overwrite: true }),
            onLeaveBack: batch => gsap.set(batch, { autoAlpha: 0, y: 50, overwrite: true }),
        };
        gsap.utils.toArray(".batchElement").forEach(function(el) {
            hide(el);
        });

        // ALBUM IMAGES
        ScrollTrigger.batch(".albumImage", batchVars);

        // OTHER BATCH ELEMENTS
        ScrollTrigger.batch(".batchElement", batchVars);

        },
        { scope: container }
    );


    if (!slug) {
        return <div>Loading...</div>;
    }

    const project = projects.find(i => i.name === slug);

    if (!project) {
        return <div>Project not found</div>;
    }

    function NextJsImage({
        photo,
        imageProps: { alt, title, sizes, onClick },
        wrapperStyle,
      }) {
        return (
          <div style={{ ...wrapperStyle, position: "relative"}} className={`reveal`}>
            <Image
              fill
              src={photo}
              className={`albumImage ${styles.albumImage}`}
              {...{ alt, title, sizes, onClick }}
            />
          </div>
        );
    }
    

    return (
        <div className={styles.container} ref={container}>
            <Head>
                <title>Jennifer's Portfolio: {project.title}</title>
            </Head>
            <main className={styles.main}>
                <div className={`${styles.section} ${styles.specSection}`}>
                    <h2 className={`reveal reveal_fromRight`}>{project.title}</h2>
                    <h4 className={`reveal`}>{project.subtitle}</h4>
                    <p className={`reveal reveal_fromLeft`}>{project.desc}</p>

                    <div className={styles.projectSpec}>
                        <div>
                            <div className={`${styles.projectTags}`}>
                                {project.tags.map((tag, index) =>
                                    <p key={index} className={`batchElement`}>#{tag}</p>
                                )}
                            </div>
                            <div className={`${styles.projectTools}`}>
                                {project.tools.map((tool, index) =>
                                    <div key={tool + " " + index + 1} className={`batchElement ${styles.projectSpecToolIcon}`}>
                                        {tools.find((t) => t.key == tool).icon}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={styles.projectButtons}>
                            {project.github ?
                                <Link href={project.github} target="_blank">
                                    <span className={`batchElement ${styles.githubButton}`}>
                                        <FaGithub className={styles.icon} />
                                    </span>
                                </Link>
                                : ""
                            }
                            {project.demo ?
                                <Link href={project.demo} target="_blank">
                                    <span className={`batchElement ${styles.projectButton}`}>
                                        <p>Live Demo</p>
                                        <MdArrowOutward className={styles.miniIcon} />
                                    </span>
                                </Link>
                                : ""
                            }
                            {project.instructions ?
                                <Link href={project.instructions} target="_blank">
                                    <span className={`batchElement ${styles.projectButton}`}>
                                        <p>Instructions</p>
                                        <MdArrowOutward className={styles.miniIcon} />
                                    </span>
                                </Link>
                                : ""
                            }
                        </div>
                    </div>
                    <div className={`${styles.imagesGrid}`}>
                        <PhotoAlbum
                            layout="rows" 
                            photos={project.images} 
                            renderPhoto={NextJsImage}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}