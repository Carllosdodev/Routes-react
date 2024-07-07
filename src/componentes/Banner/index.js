import styles from './Banner.module.css';
import circuloColorido from '../assets/circulo_colorido.png';
import minhaFoto from '../assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Olá, ao meu site pessoal, Eu sou Antonio Carlos, estudante do curso 6 de Front-End da Alura. Aqui compartilho vários conhecimentos, espero que um dia eu possa contribuir!
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt="Círculo colorido"
                    aria-hidden="true"
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Antonio Carlos Sorrindo"
                />
            </div>
        </div>
    );
}
