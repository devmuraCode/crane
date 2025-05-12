"use client";

import Link from "next/link";
import styles from "./Navbar.module.scss";

interface MenuItemProps {
  label: string;
  href: string;
}

const MenuItem = ({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: () => void;
}) => (
  <Link href={href} onClick={onClick} className={styles.link}>
    {label}
  </Link>
);


export default MenuItem;
