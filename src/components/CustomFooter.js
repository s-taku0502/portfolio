import CustomLink from "./CustomLink";

const CustomFooter = ({ children, className = "" }) => {
    return (
        <footer className="font-playfair flex flex-col gap-4 row-start-3 items-center">
            <div className="flex space-x-4">
                <a className="font-jetbrains-mono text-center text-xl">©2025 </a>
                <a className="text-center text-xl">sudo</a>
            </div>
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
    );
};

export default CustomFooter;