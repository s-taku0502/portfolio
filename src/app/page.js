// import Link from "next/Link";
import "../styles/globals.css";
import CustomLink from "@/components/CustomLink";
import CustomFooter from "@/components/CustomFooter";

export default function Home() {
  return (
    <>
      <div className="background-shape shape-top-right" />
      <div className="background-shape shape-bottom-left" />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="font-playfair flex flex-col gap-8 row-start-2 items-center text-center">
          <h1 className="font-playfair text-[7vw] mb-2 rounded-md"> {/*`テキストサイズを画面の７％に設定`*/}
            Sudo`s portfolio
          </h1>
          <div className="max-h-screen p-8 w-full">
            <h1 className="font-playfair text-[3vw] text-2xl mb-2 rounded-md">
              Welcome to My Portfolio
            </h1>
            <nav className="flex space-x-4 text-base md:text-[2vw] justify-center">
              <CustomLink href="/about">自己紹介ページへ</CustomLink>
              <CustomLink href="/projects">制作物一覧へ</CustomLink>
              <CustomLink href="/contact">お問い合わせページへ</CustomLink>
            </nav>
          </div>
        </main>
        <CustomFooter />
      </div>
    </>
  );
}
