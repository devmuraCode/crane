"use client";

import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import useContactModal from "@/hooks/useContactModal";
import { toast } from "react-toastify";
import styles from "./ContactModa.module.scss"

type Inputs = {
  name: string;
  phone: string;
  selectservice: string;
  message?: string;
};

export const ContactModal = () => {
  const contactModal = useContactModal();
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      contactModal.onOpen(); 
      const timer = setTimeout(() => {
        contactModal.onClose(); 
      }, 5000);

      return () => clearTimeout(timer); 
    }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    try {
      setIsLoading(true);
      await axios.post(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`,
        {
          chat_id: process.env.NEXT_PUBLIC_CHAT,
          text: `Имя: ${data.name}\nТелефон: ${data.phone}\nEmail: ${data.message}\nИнтересует: ${data.selectservice}`,
        }
      );
      toast.success("Сообщение успешно отправлено!", {
        position: "top-right",
        autoClose: 3000,
      });
      reset();
      contactModal.onClose();
    } catch (error) {
      toast.error("Ошибка при отправке сообщения!", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error("Ошибка при отправке:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className={styles.form}>
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
    </div>
  );

  const footerContent = <div />;

  return (
    <Modal
      isOpen={contactModal.isOpen}
      onClose={contactModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
      title="отправить"
    />
  );
};
