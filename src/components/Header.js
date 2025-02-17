"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // 画面サイズによってモバイルかどうかを判定
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // モバイル画面幅（768px未満）
    };

    handleResize(); // 初期ロード時にサイズチェック
    window.addEventListener("resize", handleResize); // サイズ変更時にチェック

    return () => {
      window.removeEventListener("resize", handleResize); // クリーンアップ
    };
  }, []);

  // モバイルのとき、クリックでプルダウンメニューを閉じる
  useEffect(() => {
    const handleClickOutside = (event) => {
      // メニュー外やボタン外がクリックされた場合、メニューを閉じる
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isMobile) {
      window.addEventListener("mousedown", handleClickOutside); // モバイルではクリックを監視
    }

    return () => {
      if (isMobile) {
        window.removeEventListener("mousedown", handleClickOutside); // クリーンアップ
      }
    };
  }, [isMobile]);

  return (
    <header className="bg-gray-300 text-white p-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <Link href="/" className="hover:text-blue-400 hover:bold">ホーム</Link>
        </div>
        <div className="space-x-4">
          <Link href="/about" className="hover:text-blue-400 hover:bold">自己紹介</Link>
          <Link href="/projects" className="hover:text-blue-400 hover:bold">制作物一覧</Link>
          <Link href="/contact" className="hover:text-blue-400 hover:bold">お問い合わせ</Link>

          {/* 親要素 */}
          <div
            className="relative inline-block"
            onMouseEnter={() => setIsDropdownOpen(true)} // 親要素にマウスオーバーで表示
            onMouseLeave={() => !isMobile && setIsDropdownOpen(false)} // デスクトップ: 親要素からマウスが外れると非表示
          >
            <button
              ref={buttonRef}
              className="hover:text-blue-400 hover:bold"
              onClick={() => isMobile && setIsDropdownOpen(!isDropdownOpen)} // モバイル: クリックでトグル
            >
              <Link href="/correct-link">その他リンク</Link>
            </button>

            {/* プルダウンメニュー */}
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 bg-gray-700 text-white rounded shadow-lg py-2"
                onMouseEnter={() => setIsDropdownOpen(true)} // メニュー内にマウスオーバーでメニューが閉じないようにする
                onMouseLeave={() => !isMobile && setIsDropdownOpen(false)} // メニューからマウスが外れると非表示
              >
                <Link href="https://qiita.com/takumi1227/" className="block px-4 py-2 hover:bg-gray-600">Qiita</Link>
                <Link href="https://github.com/s-taku0502/" className="block px-4 py-2 hover:bg-gray-600">GitHub</Link>
                <Link href="https://zenn.dev/sudo_dev/" className="block px-4 py-2 hover:bg-gray-600">Zenn</Link>
                <Link href="https://note.com/link_sudo/" className="block px-4 py-2 hover:bg-gray-600">note</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
