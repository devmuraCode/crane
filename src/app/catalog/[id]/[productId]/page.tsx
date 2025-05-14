"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "@/lib/api";
import styles from "./ProductDetailPage.module.scss";
import Container from "@/components/Container/Container";
import CardDetails from "@/components/CardDetails/CardDetails";

export default function ProductDetailPage() {
  const params = useParams();
  const categoryName = params?.id as string;
  const productId = params?.productId as string;

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getProductsByCategory", categoryName],
    queryFn: () => getProductsByCategory(categoryName),
    enabled: !!categoryName,
  });

  const product = products?.find((item: any) => String(item.id) === productId);

  if (isLoading) return <p>Загрузка продукта...</p>;
  if (error) return <p>Ошибка загрузки продукта</p>;
  if (!product) return <p>Продукт не найден</p>;

  return (
    <div className={styles.wrapper}>
      <Container>
        <CardDetails product={product} />
      </Container>
    </div>
  );
}
