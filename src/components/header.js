import { useState } from 'react';
import { slide as BurgerMenu } from 'react-burger-menu'
import styles from '../styles/Header.module.css'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function isMenuOpen(state) {
        setIsOpen(state.isOpen);
    }

    function closeMenu() {
        setIsOpen(false);
    }

    function Links({ styleClass }) {
        return (
            <>
                <a href="../#home" className={styleClass} onClick={closeMenu}>Landing</a>
                <a href="../#about" className={styleClass} onClick={closeMenu}>About me</a>
                <a href="../#tools" className={styleClass} onClick={closeMenu}>Tools</a>
                <a href="../#projects" className={styleClass} onClick={closeMenu}>Projects</a>
                <a href="../#contact" className={styleClass} onClick={closeMenu}>Contact</a>
            </>
        );
    }

    return (
        <div className={styles.nav}>
            <div className={styles.navLinks}>
                <Links styleClass={styles.navLink} />

                <BurgerMenu right
                    onStateChange={isMenuOpen}
                    isOpen={isOpen}

                    burgerButtonClassName={styles.burgerButton}
                    burgerBarClassName={styles.burgerBars}
                    crossButtonClassName={styles.burgerCrossButton}
                    crossClassName={styles.burgerCross}

                    menuClassName={styles.burgerMenu}
                    morphShapeClassName={styles.burgerMorphShape}
                    itemListClassName={styles.burgerItemList}
                    itemClassName={styles.burgerMenuItem}
                    overlayClassName={styles.burgerOverlay}
                >
                    <Links />
                </BurgerMenu>
            </div>
    
        </div>
    );
}