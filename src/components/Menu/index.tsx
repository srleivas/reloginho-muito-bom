import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

import styles from './styles.module.css';

export function Menu() {
    return (
        <nav className={styles.menu}>
            <a href="#" className={styles.menuLink}>
                <HouseIcon></HouseIcon>
            </a>
            <a href="#" className={styles.menuLink}>
                <HistoryIcon></HistoryIcon>
            </a>
            <a href="#" className={styles.menuLink}>
                <SettingsIcon></SettingsIcon>
            </a>
            <a href="#" className={styles.menuLink}>
                <SunIcon></SunIcon>
            </a>
        </nav>
    );
}
