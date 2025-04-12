"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <Link href="/">
          <li>Home{path === "/" ? "😊" : ""}</li>
        </Link>
        <Link href="/about-us">
          <li>About{path === "/about-us" ? "😊" : ""}</li>
        </Link>
        <Link href="/login">
          <li>login{path === "/login" ? "😊" : ""}</li>
        </Link>
      </ul>
    </nav>
  );
}
