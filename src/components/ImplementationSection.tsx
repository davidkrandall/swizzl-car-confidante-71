
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ImplementationSection = () => {
  const steps = [
    "Internet lead hits your CRM",
    "Swizzl link sent",
    "Customer interacts",
    "Enriched profile goes to sales"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Easy Implementation + Minimal Compliance</h2>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-12">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-500 font-bold mr-2">✓</span>
                <span>Insert Swizzl link into your outbound message</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 font-bold mr-2">✓</span>
                <span>You control when it's sent</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 font-bold mr-2">✓</span>
                <span>We send enriched customer data back to your CRM</span>
              </li>
            </ul>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-dashed border-gray-300">
              <p className="font-medium mb-2">Example Message:</p>
              <div className="space-y-2">
                <p>Hi Jane!</p>
                <p>Have you decided on a vehicle? If so, let's chat.</p>
                <p>Not sure? Our 10-min assessment finds YOUR perfect match. FREE. No bias.</p>
                <p>Questions? I'm here!</p>
                <p>– Cindy at US Car Dealer</p>
                <p className="text-blue-600 font-medium">aa12.szl.ai</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">How It Works</h3>
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center mb-4 md:mb-0">
                <div className="bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3">
                  {index + 1}
                </div>
                <div className="text-gray-700">{step}</div>
                {index < steps.length - 1 && (
                  <ArrowRight className="mx-3 text-gray-400 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;
