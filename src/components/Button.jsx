function Button({label,onClick}) {
    return(
        <button onClick={onClick} className="border border-blue-400 rounded-md px-3 py-1 m-4">
            {label}
        </button>
    );
};

export default Button;