"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getProductsByCategory } from "@/lib/api";
import Container from "@/components/Container/Container";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import styles from "./SectionOne.module.scss";

export default function CatalogPage() {
  const params = useParams();
  const categoryName = params?.id as string;
  console.log(categoryName);

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productsByCategory", categoryName],
    queryFn: () => getProductsByCategory(categoryName),
    enabled: !!categoryName,
  });

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <div>Произошла ошибка при загрузке данных</div>;
  const categoryTitle = products?.[0]?.category?.slug;
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

                name: product.name,
                image: product.image,
                pricing: product.pricing,
                description: product.description,
                category: product.category,
                load_capacity: product.load_capacity,
                boom_reach: product.boom_reach,
                floor_reach: product.floor_reach,
                rental_condition: product.rental_condition,
                characteristics: product.characteristics,
              }}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
