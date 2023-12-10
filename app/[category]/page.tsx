import ProductCard from "@/[category]/ProductCard";
import { client } from "@/lib/sanity";

async function getData(category: string) {
    const query = `*[_type == "product" && category->name == "${category}"]`;
    const data = await client.fetch(query);
    return data;
}

async function CategoryPage({ params }: { params: { category: string } }) {
    const data = await getData(params.category);

    return (
        <main className="max-w-7xl mx-auto py-10">
            <h1 className="text-4xl mb-10 font-bold text-neutral-800">{params.category}</h1>

            <div className="grid grid-cols-4 gap-4">
                {data.map((product: any) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </main>
    );
}

export default CategoryPage;
