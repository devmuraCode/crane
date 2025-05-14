import styles from "./CardDetails.module.scss";
import { Details } from "@/types/details";

interface Props {
  product: Details;
}

const CardDetails: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
            loading="lazy"
          />
        </div>

        <div className={styles.details}>
          <p>
            <strong>Название:</strong> {product.name}
          </p>
          <p>
            <strong>Грузоподъёмность:</strong> {product.load_capacity}
          </p>
          <p>
            <strong>Вылет стрелы:</strong> {product.boom_reach}
          </p>
          <p>
            <strong>Высота подъема:</strong> {product.floor_reach}
          </p>
          <p>
            <strong>Цена за час:</strong> {product.pricing.hourly_rate} сум
          </p>
          <p>
            <strong>Минимальный заказ:</strong> {product.pricing.minimum_order}{" "}
            сум
          </p>

          <p>
            <strong>Описание:</strong> {product.description}
          </p>

          <div className={styles.actions}>
            <button className={styles.primary}>Заказать товар</button>
            <button className={styles.secondary}>Задать вопрос</button>
          </div>
        </div>
      </div>
      {product.characteristics?.length > 0 && (
        <div className={styles.characteristics}>
          <h3>Характеристики:</h3>
          <table>
            <tbody>
              {product.characteristics.map((char: any) => (
                <tr key={char.name}>
                  <td>{char.name}</td>
                  <td>{char.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
