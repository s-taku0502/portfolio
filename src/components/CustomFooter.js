import CustomLink from "./CustomLink";

const CustomFooter = ({ children, className = "" }) => {
    return (
        <footer className="font-playfair flex text-[1.2vw] flex-col gap-4 row-start-3 items-center">
            <div className="flex space-x-4">
                <a className="font-jetbrains-mono text-[1.2vw] text-center text-xl">©2025 </a>
                <a className="text-center text-[1.2vw] text-xl">sudo</a>
            </div>
            <div className="flex space-x-4">
                <CustomLink href="/privacy" >
                    プライバシーポリシー
                </CustomLink>
                <CustomLink href="https://x.com/ocean_t_umi" >
                    X（旧Twitter）
                </CustomLink>
            </div>
        </footer>
    );
};

export default CustomFooter;