import CustomH2 from "@/components/CustomH2";
import "../../styles/globals.css";
import CustomFooter from "@/components/CustomFooter";

export default function AboutPage() {
  return (
    <>
      <div className="background-shape shape-top-right" />
      <div className="background-shape shape-bottom-left" />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">自己紹介ページへようこそ</h1>
        <p className="text-lg">
          Hello! I'm a passionate developer with experience in technologies like JavaScript, Ruby, and Firebase.
          I enjoy building creative solutions and learning new technologies.
        </p>
        <div>
          <CustomH2>Name</CustomH2>
          <p className="text-lg">Sudo Takumi</p>
        </div>
        <div>
          <CustomH2>Affiliation</CustomH2>
          <p className="text-lg">Kanazawa Institute of Technology</p>
        </div>
      </main>
      <CustomFooter className="item-align-bottom" />
    </>
  );
}
