import Container from "@/components/Container/Container";
import styles from "./SectionOne.module.scss";
import { Details } from "@/types/details";
import { ProductCard } from "@/components/ProductCard/ProductCard";

export const SectionOne = () => {
  const details: Details[] = [
    {
      id: 1,
      name: "RТUNG-94331.35-0000010",
      image:
        "https://astslon.ru/files/styles/original-size-image/public/catalogunit/photos/9427.jpg?itok=keae6lZS",
      price: 0,
    },
    {
      id: 2,
      name: "SSBOHRER",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwHqVBpUeAnqnwIzh10ohXZsr-purlpbPzw&s",
      price: 0,
    },
    {
      id: 3,
      name: "СПЕЦПРИЦЕП мод. 94623F",
      image:
        "https://lh6.googleusercontent.com/proxy/-7opyz3jlYOeDTbrXA9y8KvJVxR6EcjRa6_Szs-QwdphJd11X37pZzMO7DNosuqk3nVcx2LVjvQy",
      price: 0,
    },
    {
      id: 4,
      name: "СПЕЦПРИЦЕП 9942D3L",
      image: "https://tral-msk.ru/images/usl/zakazat-tral-v-moskve.jpg",
      price: 0,
    },
    {
      id: 5,
      name: "Nooteboom Euro",
      image:
        "https://d2e5b8shawuel2.cloudfront.net/vehicle/257766/hla/original.jpg",
      price: 0,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Container>
        <h1 className={styles.title}>Автокраны</h1>
        <div className={styles.type_modals}>
          {details.map((machine) => (
            <ProductCard key={machine.id} product={machine} />
          ))}
        </div>
      </Container>
    </div>
  );
};
