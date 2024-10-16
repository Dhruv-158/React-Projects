import React, { useId } from "react";

const Input = React.forwardRef(function Input(
    { label, type = "text", className = "", ...prop },
    ref
) {
    const id = useId();
    return (
        <>
            <div className="w-full">
                {label && (
                    <label className="inline-block md-1 pl-1" htmlFor={id}>
                        {label}
                    </label>
                )}
                <input
                    type={type}
                    className={`px-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border-gray-200 w-full ${className}`}
                ref={ref}
                {...prop}
                id={id}
                />
            </div>
        </>
    );
});

export default Input;
