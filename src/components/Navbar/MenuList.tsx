"use client";

import Link from "next/link";
import styles from "./Navbar.module.scss";

interface MenuItemProps {
  label: string;
  href: string;
}

const MenuItem = ({ label, href }: MenuItemProps) => {
  return (
    <Link href={href} className={styles.link}>
      {label}
    </Link>
  );
};

export default MenuItem;
