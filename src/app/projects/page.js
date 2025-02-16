import CustomFooter from "@/components/CustomFooter";
import "../../styles/globals.css";

const projects = [
  {
    title: "スタンプラリー（ウェブアプリ）/一般利用者用",
    description: "金沢市額（ぬか）振興会の方との提携により制作したスタンプラリーです。",
    link: "https://kanazawa-nuka2024.web.app/",
    status: "公開中",
    start: "2024/08/20",
    update: "2025/02/15",
    imageUrl: "/images/summer-festival.png",
  },
  {
    title: "スタンプラリー（ウェブアプリ）/管理者用",
    description: "金沢市額（ぬか）振興会の方との提携により制作。",
    link: "https://knzwnk-auth.web.app/",
    status: "公開停止中",
    imageUrl: "/images/stamp-rally-admin.png",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing my work.",
    link: "#",
    status: "In Progress",
    imageUrl: "/images/portfolio.png",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <main className="p-6">
        <div className="background-shape shape-top-right" />
        <div className="background-shape shape-bottom-left" />
        <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              {project.imageUrl && (
                <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              )}
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h2>
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 inline-block px-4 py-2 text-white rounded transition ${project.status === "公開中" ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-500 cursor-not-allowed"
                    }`}
                >
                  View Project
                </a>
              )}
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">公開状況：{project.status}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">制作開始日：{project.start}</p>
              {project.update && <p className="text-sm text-gray-600 dark:text-gray-400">更新日：{project.update}</p>}
            </div>
          ))}
        </div>
      </main>
      <CustomFooter className="item-align-bottom" />
    </>
  );
}
