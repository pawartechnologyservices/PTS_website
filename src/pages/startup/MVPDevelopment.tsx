
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const MVPDevelopment = () => {
  return (
    <Layout>
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🚀</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            MVP <span className="gradient-text">Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Rapid MVP development to validate your startup idea and get to market quickly 
            with minimal viable products.
          </p>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Fast Track Your Startup</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Get your MVP to market in weeks, not months, with our agile development approach.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
            Build Your MVP
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default MVPDevelopment;
