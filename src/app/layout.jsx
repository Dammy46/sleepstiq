import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: {
    template: "%s | Sleepstiq",
    default: "Sleepstiq",
  },
  description:
    "With the aid of our Melatonin Sleepstiq, we can assure you that you can get quality sleep.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/svgs/icon.svg" />
      </head>
      <body>
        <NextTopLoader showSpinner={false} color="#2C3E50" />
        {children}
      </body>
    </html>
  );
}
