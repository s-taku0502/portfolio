import CustomLink from "./CustomLink";

const CustomFooter = ({ children, className = "" }) => {
    return (
        <footer className="font-playfair flex text-base md:text-[2vw] flex-col gap-4 row-start-3 items-center">
            <div className="flex space-x-4">
                <a className="font-playfair text-base md:text-[2vw] text-center">©2025 sudo</a>
            </div>
            <div className="flex space-x-4 pb-10px">
                    <CustomLink href="/privacy" className="bg-gray-200 rounded-lg p-2">
                        プライバシーポリシー
                    </CustomLink>
            </div>
            <div>
                <CustomLink href="https://x.com/ocean_t_umi" className="bg-gray-200 rounded-lg p-1">
                    X（旧Twitter）
                </CustomLink>
                <CustomLink href="https://github.com/s-taku0502" className="bg-gray-200 rounded-lg p-1">
                    GitHub
                </CustomLink>
            </div>
        </footer>
    );
};

export default CustomFooter;