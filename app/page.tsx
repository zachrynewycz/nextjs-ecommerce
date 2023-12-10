import NewestProducts from "./components/NewestProducts/NewestProducts";
import GiftsOfJoy from "./components/ui/GiftsOfJoy";
import ReviewsByTheNumbers from "./components/ui/ReviewsByTheNumber";

export default function Home() {
    return (
        <main>
            <GiftsOfJoy />
            <NewestProducts />
            <ReviewsByTheNumbers />
        </main>
    );
}
