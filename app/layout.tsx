import ErrorDisplay from "../components/ErrorDisplay"
import Navigation from "../components/navigation"
import { ErrorProvider } from "./contexts/ErrorContext"
import "../styles/global.css"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        </body>
    </html>
  )
}
