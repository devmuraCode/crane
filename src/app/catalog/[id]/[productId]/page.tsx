"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "@/lib/api";
import styles from "./ProductDetailPage.module.scss";
import Container from "@/components/Container/Container";
import CardDetails from "@/components/CardDetails/CardDetails";
import { ProductCard } from "@/components/ProductCard/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  console.log(params);
  
  const categoryName = params?.id as string; 
  const productId = params?.productId as string;
  console.log(categoryName);
  
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getProductsByCategory", categoryName],
    queryFn: () => getProductsByCategory(categoryName),
    enabled: !!categoryName,
  });
  console.log(products);

  const product = products?.find((item: any) => String(item.id) === productId);
  console.log(product);

const similarProducts = products
  ?.filter((item: any) => String(item.id) !== productId)
  .slice(0, 4);


  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки продукта</p>;
  if (!product)
    return (
      <p className="d-flex justify-content-center items-center">
        Продукт не найден
      </p>
    );

  return (
    <div className={styles.wrapper}>
      <Container>
        <CardDetails product={product} />

        {similarProducts?.length > 0 && (
          <div className={styles.similarSection}>
            <h2 className={styles.similarTitle}>Похожие товары</h2>
            <div className={styles.similarList}>
              {similarProducts.map((item: any) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
