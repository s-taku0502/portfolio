const CustomH2 = ({ children, className = "" }) => {
    return (
        <h2 className={`font-playfair text-xl mb-2 rounded-md ${className}`}>
            {children}
        </h2>
    );
};

export default CustomH2;