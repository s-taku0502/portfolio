"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // ハンバーガーアイコン用

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 画面サイズによってモバイルかどうかを判定
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // メニュー外をクリックすると閉じる
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      window.removeEventListener("mousedown", handleClickOutside);
    }

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="shadow-md p-4 fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* ロゴ */}
        <div className="text-2xl font-semibold">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
        </div>

        {/* デスクトップナビゲーション */}
        <div className="hidden md:flex space-x-4 mr-[150px]">
          <Link href="/about" className="hover:text-blue-400">自己紹介</Link>
          <Link href="/projects" className="hover:text-blue-400">制作物一覧</Link>
          <Link href="/contact" className="hover:text-blue-400">お問い合わせ</Link>
        </div>

        {/* ハンバーガーメニュー（モバイル用） */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* モバイルメニュー */}
      <div
        ref={dropdownRef}
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-sm flex flex-col items-center justify-center transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* ボタンの位置を調整 */}
        <button className="absolute top-4 right-4 text-white" onClick={() => setIsMenuOpen(false)}>
          <X size={32} />
        </button>

        <div className="flex flex-col space-y-6 text-white text-xl mr-[150px]">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>ホーム</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>自己紹介</Link>
          <Link href="/projects" onClick={() => setIsMenuOpen(false)}>制作物一覧</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>お問い合わせ</Link>
        </div>
      </div>
    </header>
  );
}
