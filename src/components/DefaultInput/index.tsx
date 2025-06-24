import styles from './styles.module.css';

type DefaultInputProps = {
    id: string;
    label: string;
} & React.ComponentProps<'input'>;

export function DefaultInput(props: DefaultInputProps) {
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
