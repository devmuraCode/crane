import Link from "next/link";
import styles from "./ProductCard.module.scss";

export interface Details {
  id: number;
  name: string;
  category: {
    id: number;
    name: string;
    image: string;
    slug: string;
  };
  pricing: {
    id: number;
    hourly_rate: string;
    minimum_order: string;
  };
  load_capacity: string;
  boom_reach: string;
  floor_reach: string;
  description: string;
  rental_condition: string;
  characteristics: {
    name: string;
    value: string;
  };
  image: string;
}

interface ProductCardProps {
  product: Details;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3 className={styles.name}>{product.name}</h3>

      <Link
        href={`/catalog/${product.category.slug}/${product.id}`}
        className={styles.button}
      >
        Подробнее
      </Link>
    </div>
  );
};
