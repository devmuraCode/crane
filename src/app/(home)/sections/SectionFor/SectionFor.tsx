"use client"
import Container from "@/components/Container/Container";
import styles from "./SectionFor.module.scss";
import { GoProjectSymlink } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { IoMdInfinite } from "react-icons/io";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import CountUp from "react-countup";

export const SectionFor = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.icons}>
              <GoProjectSymlink className={styles.icon} />
              <h1>
                <CountUp end={128} duration={3} />
              </h1>
            </div>
            <div className={styles.content}>
              <p>выполненных проектов</p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.icons}>
              <CiUser className={styles.icon} />
              <h1>
                +<CountUp end={10} duration={3} />
              </h1>
            </div>
            <div className={styles.content}>
              <p>новых сотрудников</p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.icons}>
              <IoMdInfinite className={styles.icon} />
              <h1>
                <CountUp end={15} duration={3} />
              </h1>
            </div>
            <div className={styles.content}>
              <p>выполненных проектов</p>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.icons}>
              <AiOutlineFundProjectionScreen className={styles.icon} />
              <h1>
                <CountUp end={150} duration={3} suffix="%" />
              </h1>
            </div>
            <div className={styles.content}>
              <p>увеличение оборота за год</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
