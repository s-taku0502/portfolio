import Header from "@/components/Header";
import "../styles/globals.css";
import CustomFooter from "@/components/CustomFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="background-shape shape-top-right" />
      <div className="background-shape shape-bottom-left" />

      <main className="flex flex-col flex-grow items-center justify-center text-center p-8 sm:p-20">
        <h1 className="font-playfair text-[7vw] mb-2 rounded-md">
          Sudo`s portfolio
        </h1>
        <div className="p-8 w-full">
          <h1 className="font-playfair text-[3vw] text-2xl mb-6 rounded-md">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg">
            このサイトは、私のポートフォリオサイトです。私のスキルや経歴を紹介しています。  <br />
            また、このサイトはNext.jsを使用して作成しています。
          </p>
        </div>
      </main>

      <CustomFooter />
    </div>
  );
}
