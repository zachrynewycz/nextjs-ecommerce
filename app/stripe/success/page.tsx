"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function SuccessPage() {
    const router = useRouter();

    useEffect(() => {
        const id = setTimeout(() => router.push("/"), 3000);

        return () => {
            clearTimeout(id);
        };
    }, []);
    return <main className="text-center text-3xl font-bold mt-10">Your payment has processed</main>;
}

export default SuccessPage;
