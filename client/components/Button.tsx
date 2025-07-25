"use client";
import clsx from "clsx";

interface buttonProps {
    type?: "button" | "submit" | "reset" | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}

const Button: React.FC<buttonProps> = ({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled,
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx(
                "rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline2 focus-visible:outline-offset-2 cursor-pointer",
                fullWidth && "w-full",
                disabled && "opacity-50 cursor-default",
                danger &&
                    "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
                secondary ? "text-gray-900" : "text-white",
                !secondary &&
                    !danger &&
                    "duration-150 bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600",
            )}
        >
            {children}
        </button>
    );
};

export default Button;
