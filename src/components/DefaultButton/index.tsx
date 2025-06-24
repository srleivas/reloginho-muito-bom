import styles from './styles.module.css';

type DefaultButtonProps = {
    icon: React.ReactNode;
    color?: 'red' | 'green';
} & React.ComponentProps<'button'>;

export function DefaultButton({
    color = 'green',
    ...props
}: DefaultButtonProps) {
    return (
        <>
            <button className={`${styles.button} ${styles[color]}`} {...props}>
                {props.icon}
            </button>
        </>
    );
}
