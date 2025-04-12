"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname()

    return (
        <ul>
            <Link href="/"><li>Home{path === "/" ? "😊" : ""}</li></Link>
            <Link href="/about-us"><li>About{path === "/about-us" ? "😊" : ""}</li></Link>
            <Link href="/login"><li>login{path === "/login" ? "😊" : ""}</li></Link>
        </ul>
    )
}