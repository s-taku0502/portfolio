const CustomH1 = ({ children, className = "" }) => {
    return (
        <h1 className={`font-playfair text-4xl mb-8 rounded-md ${className}`}>
            {children}
        </h1>
    );
};

export default CustomH1;