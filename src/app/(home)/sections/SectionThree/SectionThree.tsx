"use client";
import { useEffect, useRef } from "react";
import Container from "@/components/Container/Container";
import styles from "./SectionThree.module.scss";
import Image from "next/image";
import about from "@/assets/logo2.jpg";

export const SectionThree = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && wrapperRef.current) {
          wrapperRef.current.classList.add(styles.animate);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <Container>
        <h1>О компании</h1>
        <div>
          <div className={styles.inner}>
            <div className={styles.content}>
              <p>
                Наша компания успешно работает с 2007 года и зарекомендовала
                себя как надежный партнер в сфере предоставления спец. техники.
                Мы гордимся тем, что все наши водители — высококвалифицированные
                специалисты с многолетним опытом работы, что позволяет нам
                предоставлять услуги самого высокого уровня. Мы активно
                сотрудничаем с такими крупными предприятиями, как Artel,
                Охангаранский цементный завод, Бекабадский арматурный завод, а
                также Технопарк.
              </p>
              <br />
              <p>
                Мы обеспечиваем услуги спец. техники по всему Узбекистану,
                охватывая все 12 регионов страны. Наши специалисты имеют не
                менее 10 лет стажа и обладают глубокими знаниями в своей
                области, что позволяет нам гарантировать безупречное выполнение
                поставленных задач и высокий уровень безопасности на всех
                этапах.
              </p>
              <br />
              <p>
                Наш опыт и профессионализм — это залог вашего доверия и
                уверенности в качественном и своевременном обслуживании.
              </p>
            </div>
            <div>
              <Image src={about} alt="О компании" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
