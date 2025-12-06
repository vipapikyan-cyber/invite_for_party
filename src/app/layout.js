import { classNames } from "@/fonts";
import { MobileBackground } from "@/components/MobileBackground";
import "@/styles/globals.css";

export const metadata = {
  title: "Invitiation to a party",
  description: "Inviting you for the most important date of this year.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={classNames}>
      <body>
        <MobileBackground />
        <div className="app-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}