import Hero from "@/components/hero";
import { ProductGrid } from "@/components/prooductGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
// import { NavbarDemo } from "@/components/navbar";
export default function Home() {
  return (
    <>
  <Hero />
<ProductGrid amount={8} />

  <Link
        href="/explore"
        className="text-black flex justify-center pt-2 text-xl "
      >
        <Button className="mx-auto mt-8 bg-[#00b67f]/80 hover:bg-[#00b67f] px-4 py-2 rounded-lg transition-colors text-sm font-medium flex hover:cursor-pointer">
          See More <ArrowRight />
        </Button>
      </Link>
    </>
)
  ;
}
