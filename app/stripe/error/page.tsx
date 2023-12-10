"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function ErrorPage() {
    const router = useRouter();

    useEffect(() => {
        const id = setTimeout(() => router.push("/"), 3000);

        return () => {
            clearTimeout(id);
        };
    }, []);

    return <main className="text-center text-red-500 text-3xl font-bold mt-10">There has been an error</main>;
}

export default ErrorPage;
