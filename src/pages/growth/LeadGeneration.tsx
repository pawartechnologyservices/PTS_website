
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const LeadGeneration = () => {
  return (
    <Layout>
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🎯</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Lead <span className="gradient-text">Generation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Generate high-quality leads and convert prospects into customers with our proven 
            lead generation strategies and tools.
          </p>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Quality Leads, Better Results</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Turn prospects into paying customers with targeted lead generation campaigns.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
            Generate More Leads
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default LeadGeneration;
