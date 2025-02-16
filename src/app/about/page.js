import CustomH2 from "@/components/CustomH2";
import "../../styles/globals.css";
import CustomFooter from "@/components/CustomFooter";

const aboutData = {
  name: "Sudo Takumi",
  affiliation: "Kanazawa Institute of Technology",
  location: "Kanazawa, Japan",
  motto: "Embrace challenges and grow through learning.",
  hobbies: ["Programming", "Playing the guitar", "Traveling", "Reading books"],
  technicalSkills: ["JavaScript", "Ruby", "Next.js", "Tailwind CSS", "Firebase"],
  projects: {
    description: "Check out my GitHub for some of my projects.",
    link: "https://github.com"
  },
  socialMedia: [
    { platform: "Twitter", link: "https://twitter.com" },
    { platform: "LinkedIn", link: "https://www.linkedin.com" }
  ]
};

export default function AboutPage() {
  return (
    <>
      <div className="background-shape shape-top-right" />
      <div className="background-shape shape-bottom-left" />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">自己紹介ページへようこそ</h1>

        <div>
          <CustomH2>Name</CustomH2>
          <p className="text-lg">{aboutData.name}</p>
        </div>

        <div>
          <CustomH2>Affiliation</CustomH2>
          <p className="text-lg">{aboutData.affiliation}</p>
        </div>

        <div>
          <CustomH2>Location</CustomH2>
          <p className="text-lg">{aboutData.location}</p>
        </div>

        <div>
          <CustomH2>Motto</CustomH2>
          <p className="text-lg">"{aboutData.motto}"</p>
        </div>

        <div>
          <CustomH2>Hobbies</CustomH2>
          <p className="text-lg">{aboutData.hobbies.join(", ")}</p>
        </div>

        <div>
          <CustomH2>Technical Skills</CustomH2>
          <ul className="list-disc pl-6">
            {aboutData.technicalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <CustomH2>Projects</CustomH2>
          <p className="text-lg">
            {aboutData.projects.description}{" "}
            <a href={aboutData.projects.link} className="text-blue-600">
              GitHub
            </a>
          </p>
        </div>

        <div>
          <CustomH2>Social Media</CustomH2>
          <p className="text-lg">
            {aboutData.socialMedia.map((social, index) => (
              <span key={index}>
                <a href={social.link} className="text-blue-600">
                  {social.platform}
                </a>
                {index < aboutData.socialMedia.length - 1 && " and "}
              </span>
            ))}
          </p>
        </div>
      </main>
      <CustomFooter className="item-align-bottom" />
    </>
  );
}
