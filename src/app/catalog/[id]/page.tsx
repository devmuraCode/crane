"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getProductsByCategory } from "@/lib/api";
import Container from "@/components/Container/Container";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import styles from "../sections/SectionOne.module.scss";

export default function CatalogPage() {
  const params = useParams();
  const categoryName = params?.id as string;

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productsByCategory", categoryName],
    queryFn: () => getProductsByCategory(categoryName),
    enabled: !!categoryName,
  });

  if (isLoading) return <p>Загрузка товаров...</p>;
  if (error) return <p>Ошибка загрузки товаров</p>;
  const categoryTitle = products?.[0]?.category?.type?.name;
  return (
    <div className={styles.wrapper}>
      <Container>
        <h1 className={styles.title}>{categoryTitle}</h1>
        <div className={styles.type_modals}>
          {products?.map((product: any) => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                name: product.model,
                image:
                  "https://astslon.ru/files/styles/original-size-image/public/catalogunit/photos/9427.jpg",
                price: product.pricing?.hourly_rate || 0,
                description: product.description,
              }}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
