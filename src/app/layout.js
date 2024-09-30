import "./globals.css";
import "./AgroyaarStyle.css"
import HotjarComponent from "@/components/Helmet/Helmet";
import AgroMarco from "./agromarco/page";

export default function RootLayout() {
  const metadata = {
    title: "اگرومارکو | پلتفرم بازار کشاورزی",
    description: "",
  }
  return (
    <html lang="fa-IR" dir="rtl">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        <HotjarComponent />
      
        <AgroMarco />
      
      </body>
    </html>
  )
}