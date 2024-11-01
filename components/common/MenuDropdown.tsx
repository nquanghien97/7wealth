import {
  PropsWithChildren,
  ReactNode,
  isValidElement,
  useState,
} from 'react';
import { motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

interface MenuDropdownProps {
  title: string;
  children: ReactNode;
  path: string;
  position?: string;
}

function MenuDropdown(props: MenuDropdownProps) {
  const { children, title, path, position } = props;
  const [isHover, setIsHover] = useState(false);
  const onHover = () => {
    if (window.innerWidth > 1024) {
      setIsHover(true);
    }
  };
  const offHover = () => {
    if (window.innerWidth > 1024) {
      setIsHover(false);
    }
  };
  const toggleClick = () => {
    if (window.innerWidth <= 1024) {
      setIsHover(!isHover);
    }
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      display: 'none',
    },
  };

  const dropdownRef = useOutsideClick(() => {
    setIsHover(false);
  });
  const pathname = usePathname();
  // const key = children?.props.children.map(item => item.key)
  const getKeys = (children: React.ReactNode) => {
    if (isValidElement(children)) {
      const childrenArray = React.Children.toArray(children.props.children);
      return childrenArray.flatMap((child) => {
        if (isValidElement(child)) {
          return child.key;
        }
        return [];
      });
    }
    return [];
  };

  const key = getKeys(children)
  return (
    <div ref={dropdownRef} className="relative hover:text-[#f18017] duration-300">
      <motion.div
        className="flex items-center"
        onHoverStart={onHover}
        onHoverEnd={offHover}
        onClick={toggleClick}
      >
        <Link href={path} className={`cursor-pointer p-4 after:content-['\\25be'] flex items-center ${key.includes(`.$${pathname}`) ? 'text-[#ff9900]' : ''}`}>
          {title}
        </Link>
        <motion.div
          className={position === 'right' ? 'absolute right-[-100%] w-full z-[100] top-0' : "absolute top-[60px] z-[100] w-full"}
          initial="exit"
          animate={isHover ? 'enter' : 'exit'}
          variants={subMenuAnimate}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MenuDropdown;