import Container from "@/components/Container/Container";
import styles from "./SectionThree.module.scss";
import Image from "next/image";
import about from "@/assets/about.png";
export const SectionThree = () => {
  return (
    <div className={styles.wrapper}>
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
              <Image src={about} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
