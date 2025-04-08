
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Building trust and driving volume is harder than ever for car dealers
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Engage leads that never respond. Turn browsers into buyers who arrive ready to say yes.
          </p>
          <div className="mb-12">
            <Button className="bg-teal-500 hover:bg-teal-600 text-lg py-6 px-8">
              Get a Demo
            </Button>
          </div>
          
          <div className="mt-10 p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
            <blockquote className="italic text-lg">
              "We have huge gaps in this today and Swizzl is the only solution I've seen that could have a real impact on our most important metrics."
            </blockquote>
            <p className="mt-4 font-semibold">
              — Steve Brown, GM at US Auto Trust
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
