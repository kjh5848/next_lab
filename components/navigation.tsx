import Link from "next/link";

export default function Navigation() {
    return (
        <ul>
            <Link href="/">Home</Link>
            <Link href="/about-us">About</Link>
        </ul>
    )
}