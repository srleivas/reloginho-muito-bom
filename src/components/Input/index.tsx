import styles from './styles.module.css';

type InputProps = {
    id: string;
    label: string;
} & React.ComponentProps<'input'>;

export function Input(props: InputProps) {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                className={styles.input}
                type={props.type ?? 'text'}
                {...props}
                id={props.id}
            />
        </>
    );
}
