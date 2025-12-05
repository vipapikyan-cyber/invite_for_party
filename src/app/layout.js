import { classNames } from "@/fonts";
import "@/styles/globals.css";

export const metadata = {
  title: "Vahan & Mariam",
  description: "Inviting you for the most important date of this year.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={classNames}>
      <body>{children}</body>
    </html>
  );
}
