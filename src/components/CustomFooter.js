import CustomLink from "./CustomLink";

const CustomFooter = ({ children, className = "" }) => {
    return (
        <footer className="font-playfair flex flex-col gap-4 row-start-3 items-center">
            <div className="flex">
                <a className="font-playfair text-base md:text-[1.3vw] text-center">©2025 sudo</a>
            </div>
            <div className="flex">
                <CustomLink href="/privacy" className="text-base md:text-[1.2vw] bg-gray-200 rounded-md">
                    プライバシーポリシー<br />
                </CustomLink>　
                <CustomLink href="https://x.com/ocean_t_umi" className="text-base md:text-[1.2vw] bg-gray-200 rounded-md">
                    X（旧Twitter）
                </CustomLink>　
                <CustomLink href="https://github.com/s-taku0502" className="text-base md:text-[1.2vw] bg-gray-200 rounded-md">
                    GitHub
                </CustomLink>
            </div>
        </footer>
    );
};

export default CustomFooter;