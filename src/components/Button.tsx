"use client";
import { redirect } from "next/navigation";

const Button = ({ text, classes, link }: { text: string; classes: string; link?: string }) => {
    return (
        <button className={`px-4 py-2 w-fit text-sm md:text-base ${classes} hover:bg-blue-800 text-white rounded-md`} onClick={() => link && redirect(link!)}>
            {text}
        </button>
    )
}

export default Button