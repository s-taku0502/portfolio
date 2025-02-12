// import Link from "next/Link";
import "../styles/globals.css";
import CustomLink from "../components/CustomLink";

export default function Home() {
  return (
    <>
      <div className="background-shape shape-top-right" />
      <div className="background-shape shape-bottom-left" />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="font-playfair flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-6xl ts-2xl">Sudo`s portfolio</h1>
          <div className="max-h-screen p-8">
            <h1 className="text-4xl mb-8 bg-blue-100 rounded-md">
              Welcome to My Portfolio
            </h1>
            <nav className="flex space-x-4">
              <CustomLink href="/about">
                自己紹介ページへ
              </CustomLink>
              <CustomLink href="/projects">
                制作物一覧へ
              </CustomLink>
              <CustomLink href="/contact">
                お問い合わせページへ
              </CustomLink>
            </nav>
          </div>
        </main>
        <footer className="font-playfair flex flex-col gap-4 row-start-3 items-center">
          <a className="text-center text-xl">©2025 sudo</a>
          <div className="flex space-x-4">
            <CustomLink href="/privacy" >
              プライバシーポリシー
            </CustomLink>
            <a
              href="https://x.com/ocean_t_umi"
              className="text-blue-600 hover:underline"
            >
              X（旧Twitter）
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
