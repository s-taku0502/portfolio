import CustomFooter from "@/components/CustomFooter";
import "../../styles/globals.css";
import Header from "@/components/Header";

/*
"/": "status=[公開中, 限定公開中, 公開停止中, 制作中]のいずれかを指定します。公開中の場合はリンクが有効になります。",
"start": "制作開始日を指定します。公開中の場合は表示されません。",
"update": "更新日を指定します。制作中の場合は表示されません。",
"imageUrl": "画像のURLを指定します。画像がない場合は表示されません。",
*/
const projects = [
  {
    title: "スタンプラリー（ウェブアプリ）/ 一般利用者用",
    description: "金沢市額（ぬか）振興会の方との提携により制作したスタンプラリーです。",
    link: "https://kanazawa-nuka2024.web.app/",
    status: "公開中",
    start: "2024/08/20",
    update: "2025/02/15",
    imageUrl: "/images/summer-festival.png",
  },
  {
    title: "スタンプラリー（ウェブアプリ）/ 管理者用",
    description: "金沢市額（ぬか）振興会の方との提携により制作したスタンプラリーです。但し、管理者専用画面のため、一般利用者はアクセスできません。",
    link: "https://knzwnk-auth.web.app/",
    status: "公開停止中",
    start: "2025/01/20",
    update: "2025/02/15",
    imageUrl: "/images/stamp-rally-admin.png",
  },
  {
    title: "Portfolio Website",
    description: "大学生活での制作物をまとめたポートフォリオサイトです。",
    link: "#",
    status: "制作中",
    start: "2025/02/14",
    update: "#",
    imageUrl: "/images/portfolio.png",
  },
  {
    title: "trim6",
    description: "あらゆるURLを6文字に短縮するジェネレーター",
    link: "https://trim6.onrender.com/",
    status: "公開中",
    start: "2025/02/26",
    update: "2025/02/27",
    imageUrl: "/images/trim6.png",
  },
  {
    title: "personal_diaries",
    description: "日々の出来事を記録するための日記アプリ",
    link: "https://personal-diaries.onrender.com/",
    status: "公開中",
    start: "2025/02/27",
    update: "#",
    imageUrl: "/images/personal-diaries.png",
  }
];

export default function ProjectsPage() {
  return (
    <>
      <Header className="pb-6" />  {/* Increased padding for the header */}
      <main className="pt-20 p-6"> {/* Increased padding-top for better spacing */}
        <div className="background-shape shape-top-right" />
        <div className="background-shape shape-bottom-left" />
        <h1 className="text-3xl font-bold mb-8 text-center">成果物一覧</h1> {/* Increased margin-bottom */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105"
            >
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 inline-block px-4 py-2 text-white rounded transition ${
                    project.status === "公開中"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-gray-500 cursor-not-allowed"
                  }`}
                >
                  View Project
                </a>
              )}
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                公開状況：{project.status}
              </p>

              {(project.update !== "#" || project.start !== "#") && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {project.update === "#"
                    ? `制作開始日：${project.start}`
                    : `更新日：${project.update}`}
                </p>
              )}
            </div>
          ))}
        </div>
      </main>
      <CustomFooter className="item-align-bottom" />
    </>
  );
}
