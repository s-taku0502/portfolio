// /components/CustomLink.js
import Link from "next/link";

const CustomLink = ({ href, children, className = "" }) => {
  return (
    <Link href={href} className={`text-blue-600 hover:underline ${className}`}>
      {children}
    </Link>
  );
};

export default CustomLink;
