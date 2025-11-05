import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

import Image from "next/image";
import { CountingNumber } from "./ui/shadcn-io/counting-number";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto relative overflow-hidden bg-linear-to-br from-background via-secondary/30 to-background">
      <div className="container px-4 py-20 md:py-32 md:px-8">
        <div className="flex gap-12 flex-col lg:flex-row lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Discover Unique
                <span className="bg-linear-to-tr from-accent to-[#00B67F] bg-clip-text text-transparent">
                  {" "}
                  Designer Products
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Connect with talented designers and explore exclusive
                handcrafted products. From fashion to accessories, find pieces
                that define your style.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#00b67f]/80 hover:bg-[#00b67f] text-accent-foreground shadow-lg hover:shadow-xl transition-all"
              >
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">
                    <CountingNumber
                    number={500}
                    inView={true}
                    transition={{ stiffness: 60, damping: 50 }}
                  />+
                  
                </div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">
                  <CountingNumber
                    number={100}
                    inView={true}
                    transition={{ stiffness: 60, damping: 50 }}
                  />+
                </div>
                <div className="text-sm text-muted-foreground">Designers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">
                  <CountingNumber
                    number={50}
                    inView={true}
                    transition={{ stiffness: 60, damping: 50 }}
                  />
                  K+
                </div>
                <div className="text-sm text-muted-foreground">
                  Happy Customers
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={"/productimage/hero_marketplace.jpg"}
                width={800}
                height={600}
                alt="Designer marketplace showcase"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[hsl(25,85%,60%)]/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
