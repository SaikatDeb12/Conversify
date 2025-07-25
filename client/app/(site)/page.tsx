import Image from "next/image";
import { AuthForm } from "./components/AuthForm";
import ThemeButton from "@/components/ThemeButton";
import axios from "axios";

export default function Home() {
    axios.defaults.withCredentials = true;
    return (
        <div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8 bg-gray-100 dark:bg-primary">
            <div className="w-full flex justify-end">
                <ThemeButton />
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-full">
                <Image
                    height={40}
                    width={40}
                    src={"/images/logo.png"}
                    className="mx-auto w-auto"
                    alt="logo"
                />
                <h2 className="text-2xl sm:text-3xl text-center font-bold mt-6 text-gray-900 tracking-tight dark:text-accent-1">
                    Sign Into Your Account
                </h2>
                <AuthForm />
            </div>
        </div>
    );
}
