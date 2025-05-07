"use client";

import { useForm } from "react-hook-form";
import Container from "@/components/Container/Container";
import styles from "./SectionOne.module.scss";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  name: string;
  phone: string;
  selectservice: string;
  message?: string;
};

export const SectionOne = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    try {
      await axios.post(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`,
        {
          chat_id: process.env.NEXT_PUBLIC_CHAT,
          text: `Имя: ${data.name}\nТелефон: ${data.phone}\nИнтересует: ${
            data.selectservice
          }\nДоп. инфо: ${data.message || "-"}`,
        }
      );
      toast.success("Сообщение успешно отправлено!", {
        position: "top-right",
        autoClose: 3000,
      });
      reset();
      setOpen(false);
    } catch (error) {
      toast.error("Ошибка при отправке сообщения!", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error("Ошибка при отправке:", error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <ToastContainer />
      <Container>
        <div className={styles.content}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Имя"
              {...register("name", { required: true })}
            />
            <input
              type="tel"
              placeholder="Телефон номер"
              {...register("phone", { required: true })}
            />
            <input
              type="text"
              placeholder="Интересующий товар/услуга"
              {...register("selectservice", { required: true })}
            />
            <textarea
              placeholder="Дополнительная информация..."
              {...register("message")}
            />
            <button type="submit">Отправить</button>
          </form>

          <div className={styles.map}>
            <iframe
              src="https://yandex.uz/map-widget/v1/profile?ll=69.164941%2C41.384859&z=14.79"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};
