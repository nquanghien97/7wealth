import {
  useCallback, useRef, useEffect, PropsWithChildren, useState,
} from 'react';
import { createPortal } from 'react-dom';

interface ModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  background?: string;
  innerClassName?: string;
}

export default function Modal(props: ModalProps) {
  const {
    children,
    open,
    onClose,
    background,
    innerClassName,
  } = props;

  const [isVisible, setIsVisible] = useState(open);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const closeModal = useCallback((event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setIsVisible(false);
      onClose()  // Chờ hiệu ứng đóng modal hoàn tất
    }
  }, [onClose]);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setTimeout(onClose, 100);  // Thêm độ trễ để hoàn tất hiệu ứng
    }
  }, [open, onClose]);

  useEffect(() => {
    document.addEventListener('click', closeModal, { capture: true });

    return () => {
      document.removeEventListener('click', closeModal, { capture: true });
    };
  }, [closeModal]);

  return isVisible || open ? createPortal(
    <div className={`fixed inset-0 z-[1000] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`fixed inset-0 z-[-1] bg-[#0b0b0b80] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${background}`} />
      <div className={`transform ${isVisible ? 'scale-100' : 'scale-95'} opacity-${isVisible ? '100' : '0'} transition-all duration-300 flex justify-center h-screen ${innerClassName}`}>
        <div ref={wrapperRef} className="relative m-auto shadow-[0_11px_15px_-7px_rgba(0,0,0,0.2),_0_24px_38px_3px_rgba(0,0,0,0.14),_0_9px_46px_8px_rgba(0,0,0,0.12)] rounded">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  ) : null;
}
