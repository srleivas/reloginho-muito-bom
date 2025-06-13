import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

type LogoProps = {
    title: string;
};

export function Logo(props: LogoProps) {
    return (
        <div className={styles.logo}>
            <a href="#" className={styles.logoLink}>
                <TimerIcon></TimerIcon>
                <span>{props.title}</span>
            </a>
        </div>
    );
}
