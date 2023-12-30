import { SiAdobe, SiConstruct3, SiJavascript, SiNextdotjs, SiPhp, SiTypescript } from 'react-icons/si';
import { FaAngular, FaCss3Alt, FaDatabase, FaGitAlt, FaGithub, FaHtml5, FaJira, FaNodeJs, FaReact } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { DiVisualstudio } from 'react-icons/di';
import { MdDevices } from 'react-icons/md';

import styles from '../styles/Home.module.css';

export const tools = [
    {
        icon: <FaHtml5 className={styles.icon} />,
        name: 'HTML5',
        key: 'html5',
    },
    {
        icon: <FaCss3Alt className={styles.icon} />,
        name: 'CSS3',
        key: 'css3',
    },
    {
        icon: <SiJavascript className={styles.icon} />,
        name: 'JavaScript',
        key: 'js',
    },
    {
        icon: <SiTypescript className={styles.icon} />,
        name: 'TypeScript',
        key: 'ts',
    },
    {
        icon: <FaNodeJs className={styles.icon} />,
        name: 'Node.js',
        key: 'nodejs',
    },
    {
        icon: <FaAngular className={styles.icon} />,
        name: 'Angular',
        key: 'angular',
    },
    {
        icon: <FaReact className={styles.icon} />,
        name: 'React',
        key: 'react',
    },
    {
        icon: <FaReact className={styles.icon} />,
        name: 'React Native',
        key: 'reactnative',
    },
    {
        icon: <SiNextdotjs className={styles.icon} />,
        name: 'Next.js',
        key: 'nextjs',
    },
    {
        icon: <SiPhp className={styles.icon} />,
        name: 'PHP',
        key: 'php',
    },
    {
        icon: <FaDatabase className={styles.icon} />,
        name: 'SQL',
        key: 'sql',
    },
    {
        icon: <FaGitAlt className={styles.icon} />,
        name: 'Git',
        key: 'git',
    },
    {
        icon: <FaGithub className={styles.icon} />,
        name: 'GitHub',
        key: 'github',
    },
    {
        icon: <TbApi className={styles.icon} />,
        name: 'RESTful APIs',
        key: 'restfulapis',
    },
    {
        icon: <MdDevices className={styles.icon} />,
        name: 'Responsive Web Design',
        key: 'rwd',
    },
    {
        icon: <DiVisualstudio className={styles.icon} />,
        name: 'VS Code',
        key: 'vscode',
    },
    {
        icon: <SiAdobe className={styles.icon} />,
        name: 'Adobe Suite',
        key: 'adobe',
    },
    {
        icon: <SiConstruct3 className={styles.icon} />,
        name: 'Construct 3',
        key: 'construct3',
    },
    {
        icon: <FaJira className={styles.icon} />,
        name: 'Jira',
        key: 'jira',
    },
];
