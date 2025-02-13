import CustomLink from "./CustomLink";

const CustomFooter = ({ children, className = "" }) => {
    return (
        <footer className="font-playfair flex text-base md:text-[2vw] flex-col gap-4 row-start-3 items-center">
            <div className="flex space-x-4">
                <a className="font-playfair text-base md:text-[2vw] text-center">©2025 sudo</a>
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