"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartButton from "./Cart/CartButton";

function Nav() {
    const pathname = usePathname();

    const links = [
        { name: "Tops", href: "/Tops" },
        { name: "Bottoms", href: "/Bottoms" },
        { name: "Hoodies", href: "/Hoodies" },
        { name: "Accesories", href: "/Accessories" },
    ];

    return (
        <nav className="shadow-md py-4 flex z-50">
            <Link href={"/"} className="flex-1 text-center">
                <img src="/images/logo.jpg" alt="" className="w-16 inline h-fit" />
            </Link>

            <div className="flex-1 text-center font-medium">
                {links.map((link) => (
                    <Link className={`${link.href === pathname && "font-bold"} mx-5`} key={link.href} href={link.href}>
                        {link.name}
                    </Link>
                ))}
            </div>

            <CartButton />
        </nav>
    );
}

export default Nav;
