// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">
          <Link href="/" className="hover:text-gray-400">ホーム</Link>
        </div>
        <div className="space-x-4">
          <Link href="/projects" className="hover:text-gray-400">制作物一覧</Link>
          <Link href="/contact" className="hover:text-gray-400">お問い合わせ</Link>
          <div className="relative inline-block">
            <button className="hover:text-gray-400">その他リンク</button>
            <div className="absolute right-0 mt-2 bg-gray-700 text-white rounded shadow-lg py-2">
              <Link href="https://qiita.com/takumi1227/" className="block px-4 py-2 hover:bg-gray-600">Qiita</Link>
              <Link href="https://github.com/s-taku0502/" className="block px-4 py-2 hover:bg-gray-600">GitHub</Link>
              <Link href="https://zenn.dev/sudo_dev/" className="block px-4 py-2 hover:bg-gray-600">Zenn</Link>
              <Link href="https://note.com/link_sudo/" className="block px-4 py-2 hover:bg-gray-600">note</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
