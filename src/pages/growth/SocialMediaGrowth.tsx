
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const SocialMediaGrowth = () => {
  return (
    <Layout>
      <section className="pt-24 pb-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">📱</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Social Media <span className="gradient-text">Growth</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Build your brand presence and engage your audience with strategic social media 
            marketing and growth strategies.
          </p>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Grow Your Social Presence</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Connect with your audience and build a loyal community across all social platforms.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
            Grow Your Following
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SocialMediaGrowth;
