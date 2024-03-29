import { useState, useCallback, useRef, useEffect } from "react";

const ESC_KEY = 27;

const onEscapeKeyPress = (fn) => ({ keyCode }) =>
  keyCode === ESC_KEY ? fn() : null;

const useDropdown = (onClose) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleGlobalMouseDown = ({ target }) => {
      if (!ref.current || ref.current.contains(target)) {
        return;
      }
      close();
      onClose && onClose();
    };

    const handleGlobalKeydown = onEscapeKeyPress(()=> {
      close();
      onClose && onClose();
    });

    document.addEventListener("mousedown", handleGlobalMouseDown);
    document.addEventListener("keydown", handleGlobalKeydown);

    return () => {
      document.removeEventListener("mousedown", handleGlobalMouseDown);
      document.removeEventListener("keydown", handleGlobalKeydown);
    };
  }, [close, onClose]);

  return [ref, isOpen, open, close];
};

export default useDropdown;
