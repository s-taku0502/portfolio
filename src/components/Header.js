"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MoreVertical, X } from "lucide-react"; // 三点リーダーアイコンに変更

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 外クリックでメニュー閉じる
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
    <header className="shadow-md p-4 fixed w-full top-0 z-50 bg-white">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* ロゴ */}
        <div className="text-2xl font-semibold">
          <Link href="/" className="hover:text-blue-400">ホーム</Link>
        </div>

        {/* メニューボタン（常に表示） */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <MoreVertical size={28} />}
        </button>
      </nav>

      {/* メニュー（全画面オーバーレイ） */}
      <div
        ref={dropdownRef}
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-sm flex flex-col items-center justify-center transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* 閉じるボタン */}
        <button className="absolute top-4 right-4 text-white" onClick={() => setIsMenuOpen(false)}>
          <X size={32} />
        </button>

        {/* メニューリンク */}
        <div className="flex flex-col space-y-6 text-white text-xl">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>ホーム</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>自己紹介</Link>
          <Link href="/projects" onClick={() => setIsMenuOpen(false)}>制作物一覧</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>お問い合わせ</Link>
          <Link href="/blogs" onClick={() => setIsMenuOpen(false)}>外部記事一覧</Link>
        </div>
      </div>
    </header>
  );
}
