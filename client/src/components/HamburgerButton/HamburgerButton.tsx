import { Dispatch, SetStateAction } from "react";
import styles from "./HamburgerButton.module.scss";

type HamburgerButtonProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};

export default function HamburgerButton({
  setIsOpen,
  isOpen,
}: HamburgerButtonProps) {
  return (
    <button
      title="Hamburger button"
      type="button"
      className={
        isOpen
          ? `${styles.hamburgerBtnOpen} ${styles.hamburgerBtn}`
          : styles.hamburgerBtn
      }
      onClick={() => setIsOpen(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
