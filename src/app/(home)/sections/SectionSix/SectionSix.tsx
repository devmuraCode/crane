"use client";

import Container from "@/components/Container/Container";
import styles from "./SectionSix.module.scss";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getequipmentTypes } from "@/lib/api";

export const SectionSix = () => {
  const {
    data: equipmentTypes = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["equipmentTypes"],
    queryFn: getequipmentTypes,
  });

  return (
    <div className={styles.wrapper}>
      <Container>
        <h2 className={styles.title}>Услуги</h2>

        {isLoading && <p className={styles.status}>Загрузка...</p>}
        {error && (
          <p className={styles.status}>Произошла ошибка при загрузке данных</p>
        )}

        {!isLoading && !error && (
          <div className={styles.grid}>
            {equipmentTypes.map((item, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.imageWrapper}>
                  {/* <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  /> */}
                </div>
                <div className={styles.label}>{item.type.name}</div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};
