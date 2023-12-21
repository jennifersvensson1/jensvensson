import styles from '../styles/layout.module.css'
import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}