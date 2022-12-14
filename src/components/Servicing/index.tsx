import Link from "next/link";
import styles from "../Servicing/styles.module.scss";

export default function Servicing() {
  return (
    <section className={styles.servicingContainer}>
      <div className={styles.titleServicing}>
        <p>O QUE FAZEMOS</p>
        <span>NOSSOS SERVIÇOS</span>
      </div>

      <div className={styles.listServicing}>
        <div className={styles.card}>
          <span>Fretamento executivo</span>

          <div className={styles.cardBody}>
            <img src="/bus-1.png" alt="" />
            <p>
              Oferecemos o serviço de fretamentos para empresas, faculdades e
              turismo. Dispomos de carros de pequeno porte, vans e micro-ônibus
              e ônibus. Temos uma equipe especializada em logística para garantir o melhor plano de fretamento para você e sua empresa buscando a ideal viabilidade financeira e operacional.
            </p>
          </div>

          <div className={styles.cardFooter}>
            <p>Saiba mais</p>
          </div>
        </div>
        <div className={styles.card}>
          <span>Transporte coletivo</span>

          <div className={styles.cardBody}>
            <img src="/bus-2.png" alt="" />
            <p>
              Realizamos serviços de transporte coletivo de passageiros no
              município de Catalão, nas categorias urbana e rural além de
              serviços suburbanos, serviços de transporte de passageiros a
              diversas empresas e serviços rodoviários, que atendem a 5
              municípios próximos à Catalão.
            </p>
          </div>
          <div className={styles.cardFooter}>
            <p>Saiba mais</p>
          </div>
        </div>
      </div>
    </section>
  );
}
