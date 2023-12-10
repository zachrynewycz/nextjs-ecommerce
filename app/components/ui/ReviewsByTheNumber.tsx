"use client";
import CountUp from "react-countup";

function ReviewsByTheNumbers() {
    return (
        <section className="bg-black py-28 mt-20">
            <h1 className="text-white text-6xl font-semibold text-center leading-snug max-w-5xl mx-auto">
                Over{" "}
                <span className="w-32 font-extrabold">
                    {<CountUp style={{ color: "#fdefdc" }} end={136052} duration={4} delay={2} />}
                </span>{" "}
                customers ready to make an <span className="italic font-light"> impact </span> on our planet{" "}
                <span className="animate-pulse">🌏</span>
            </h1>
        </section>
    );
}

export default ReviewsByTheNumbers;
