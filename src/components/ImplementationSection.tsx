
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ImplementationSection = () => {
  const steps = [
    "Car buyer lead hits your dealership CRM",
    "Swizzl link sent",
    "Car buyer interacts",
    "Enriched vehicle profile goes to sales team"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Easy Implementation For Auto Dealerships</h2>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-12">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-500 font-bold mr-2">✓</span>
                <span>Insert Swizzl link into your dealership's outbound message</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 font-bold mr-2">✓</span>
                <span>Your dealership controls when it's sent</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 font-bold mr-2">✓</span>
                <span>We send enriched car buyer data back to your dealership CRM</span>
              </li>
            </ul>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-dashed border-gray-300">
              <p className="font-medium mb-2">Example Dealership Message:</p>
              <div className="space-y-2">
                <p>Hi Jane!</p>
                <p>Have you decided on a vehicle? If so, let's chat.</p>
                <p>Not sure? Our 10-min assessment finds YOUR perfect car match. FREE. No bias.</p>
                <p>Questions? I'm here!</p>
                <p>– Cindy at US Car Dealer</p>
                <p className="text-blue-600 font-medium">aa12.szl.ai</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">How It Works For Car Dealers</h3>
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
          
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100 mb-10">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">Not Just Another Auto Sales Chatbot</h3>
            <p className="text-lg text-blue-800 mb-6 text-center">
              Unlike simple chatbots or sales training programs, Swizzl actually conducts the initial auto sales process online.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-3">Meaningful Car Buying Conversations</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-500 font-bold mr-2">✓</span>
                    <span>Discovers true vehicle needs and preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 font-bold mr-2">✓</span>
                    <span>Addresses concerns before showroom visits</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-5 border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-3">Actionable Results for Dealerships</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-teal-500 font-bold mr-2">✓</span>
                    <span>Pre-qualifies genuinely ready car buyers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 font-bold mr-2">✓</span>
                    <span>Creates detailed buyer profiles your dealership team can act on</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;
