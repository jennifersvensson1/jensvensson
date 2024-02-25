import { Unbounded, Work_Sans } from 'next/font/google';
import styles from '../styles/layout.module.css'
import Footer from './footer';
import Header from './header';

const mainFont = Work_Sans({
    subsets: ['latin'],
    variable: '--main-font',
});

const titleFont = Unbounded({
    subsets: ['latin'],
    variable: '--title-font',
});

export default function Layout({ children }) {
    return (
        <div className={`${mainFont.variable} ${titleFont.variable} ${styles.container}`}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}