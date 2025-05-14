"use client";
import { useCallback, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    remember: boolean
  ) => void;
  body: React.ReactNode;
  footer: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  body,
  footer,
  title,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  const handleCheckboxChange = () => {
    setRemember((prev) => !prev);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 outline-none 
          focus:outline-none
          bg-neutral-800/70"
    >
      <div className="bg-white w-full max-w-3xl mx-4 p-8 rounded-lg  relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <IoCloseOutline size={24} />
        </button>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e, remember);
          }}
        >
          <div className="text-center">{body}</div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full max-w-3xl bg-[#99f63d] text-black py-2 rounded-md text-lg font-medium hover:bg-[#88df33] transition"
            >
              {title}
            </button>
          </div>
          <div>{footer}</div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
