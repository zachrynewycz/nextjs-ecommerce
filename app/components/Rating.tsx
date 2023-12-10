function Rating({ value, showValue = true }: { value: number; showValue?: boolean }) {
    const filledStar = "/icons/star-filled.svg";
    const emptyStar = "/icons/star.svg";

    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
                <img
                    className="w-4 my-1"
                    key={index}
                    src={index + 1 <= value ? filledStar : emptyStar}
                    alt={`star-${index}`}
                />
            ))}
            {showValue && <span className="ml-2 underline underline-offset-2">{(Math.random() * 136).toFixed(0)}</span>}
        </div>
    );
}

export default Rating;
