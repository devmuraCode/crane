import styles from "./ProductCard.module.scss";

export interface Details {
  id: number;
  name: string;
  image: string;
  price: number;
  description?: string;
}

interface ProductCardProps {
  product: Details;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>
        {product.price > 0
          ? `${product.price.toLocaleString()} сум`
          : "Цена по запросу"}
      </p>
      {product.description && (
        <p className={styles.description}>{product.description}</p>
      )}
      <button className={styles.button}>Подробнее</button>
    </div>
  );
};
