import styles from "./button.module.css";

interface ButtonInterface {
  texto: string;
  cor: 'blue' | 'green' | 'red' | 'yellow' | 'orange';
  quandoClicar: () => void;
}

export default function Button({ texto, cor, quandoClicar }: ButtonInterface) {
  console.log(styles[cor])
  return (
    <>
      <button className={`${styles.button} ${styles[cor]}`} onClick={quandoClicar}>
        {texto}
      </button>
    </>
  );
}
