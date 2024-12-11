import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Todo List App",
  description: "Created using React - NextJS",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div>
          <div className="bg-background">
            <div className="flex flex-row">
              <div className="hidden lg:block w-[18%] bg-red-400 text-white">
                <Sidebar />
              </div>
              <div className="col-span-3 lg:border-l w-[82%]">
                <Header />
                <div className="px-6 py-6 lg:px-8">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
