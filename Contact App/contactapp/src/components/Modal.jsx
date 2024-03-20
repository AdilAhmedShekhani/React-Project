import { createPortal } from "react-dom";
import { AiOutlineAim, AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="relative z-50 min-h-[200px] max-w-[80%] bg-white p-4 m-auto">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="self-end text-2xl" />
            </div>
          </div>
          <div
            onClick={onClose}
            className="absolute top-0 z-40 h-screen w-screen backdrop-blur"
          />
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
