import { client, urlFor } from "@/lib/sanity";

async function GiftsOfJoy() {
    const heroImage = await client.fetch('*[_type == "images" && name == "hero"]');

    return (
        <div className="relative text-center w-full h-[45rem]">
            <img src={urlFor(heroImage[0].image.asset._ref).url()} alt="Hero" className="w-full h-full object-cover" />

            <div className="absolute font-bold inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center z-10 text-[#fdefdc] ">
                <h1 className="text-xl sm:text-7xl mb-2 box">
                    Gifts for a<br />
                    Good Story
                </h1>
                <p className="text-xl mt-8 font-bold">Built for lifetimes of whatever brings them joy.</p>
            </div>
        </div>
    );
}

export default GiftsOfJoy;
