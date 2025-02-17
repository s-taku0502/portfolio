// import Link from "next/Link";
import Header from "@/components/Header";
import "../styles/globals.css";
import CustomLink from "@/components/CustomLink";
import CustomFooter from "@/components/CustomFooter";

export default function Home() {
  return (
    <>
      <Header />
      <div className="background-shape shape-top-right" />
      <div className="background-shape shape-bottom-left" />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="font-playfair flex flex-col gap-8 row-start-2 items-center text-center">
          <h1 className="font-playfair text-[7vw] mb-2 rounded-md"> {/*text-[7vw]: テキストサイズを画面の７％に設定*/}
            Sudo`s portfolio
          </h1>
          <div className="max-h-screen p-8 w-full">
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
    </>
  );
}
