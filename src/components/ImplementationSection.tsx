
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ImplementationSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Easy Implementation For Auto Dealerships</h2>
          
          <div className="bg-white rounded-lg shadow-md border border-blue-100 mb-12 hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <div className="flex-shrink-0 w-6 h-6 bg-teal-500 bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-teal-500 font-bold text-sm">✓</span>
                      </div>
                      <span>Insert Swizzl link into your dealership's outbound message</span>
                    </li>
                    <li className="flex items-center">
                      <div className="flex-shrink-0 w-6 h-6 bg-teal-500 bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-teal-500 font-bold text-sm">✓</span>
                      </div>
                      <span>Your dealership controls when it's sent</span>
                    </li>
                    <li className="flex items-center">
                      <div className="flex-shrink-0 w-6 h-6 bg-teal-500 bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-teal-500 font-bold text-sm">✓</span>
                      </div>
                      <span>We send enriched car buyer data back to your dealership CRM</span>
                    </li>
                    <li className="flex items-center">
                      <div className="flex-shrink-0 w-6 h-6 bg-teal-500 bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-teal-500 font-bold text-sm">✓</span>
                      </div>
                      <span>Sales people love it</span>
                    </li>
                  </ul>
                </div>
                
                <div className="md:w-1/2 bg-gray-100 rounded-lg p-4 border border-gray-200">
                  <p className="font-medium mb-3 text-gray-700">Example Dealership Message:</p>
                  <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm space-y-2 max-w-xs mx-auto">
                    <p>Hi Jane!</p>
                    <p>Have you decided on a vehicle? If so, let's chat.</p>
                    <p>Not sure? Our 10-min Assessment <span className="text-blue-600 font-medium">aa12.szl.ai</span> finds YOUR perfect car match. FREE. No bias.</p>
                    <p>Questions? I'm here!</p>
                    <p>– Cindy at US Car Dealer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200 mb-10 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4 text-center text-blue-900">Swizzl is not a chatbot. It's a discovery experience.</h3>
            <Separator className="bg-blue-300 mb-4 mx-auto w-24" />
            <p className="text-lg text-blue-800 mb-6 text-center">
              Unlike chatbots, Swizzl actually conducts the initial discovery process online, helping the customer gain the confidence they need to be willing to talk to you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 border border-blue-200 hover:border-blue-300 transition-colors duration-300">
                <h4 className="font-bold text-blue-800 mb-3">Meaningful Car Buying Conversations</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-teal-500 bg-opacity-10 rounded-full flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teal-500 font-bold text-xs">✓</span>
                    </div>
                    <span>Discovers true vehicle needs and preferences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-teal-500 bg-opacity-10 rounded-full flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teal-500 font-bold text-xs">✓</span>
                    </div>
                    <span>Addresses concerns before showroom visits</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-5 border border-blue-200 hover:border-blue-300 transition-colors duration-300">
                <h4 className="font-bold text-blue-800 mb-3">Actionable Results for Dealerships</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-teal-500 bg-opacity-10 rounded-full flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teal-500 font-bold text-xs">✓</span>
                    </div>
                    <span>Pre-qualifies genuinely ready car buyers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-teal-500 bg-opacity-10 rounded-full flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-teal-500 font-bold text-xs">✓</span>
                    </div>
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
