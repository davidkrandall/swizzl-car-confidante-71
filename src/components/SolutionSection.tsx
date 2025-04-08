
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SolutionSection = () => {
  const impactItems = [
    "They wrestle with real questions",
    "They uncover tough tradeoffs",
    "They get clear on what really matters"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="solution">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Swizzl's Impact</h2>
          <p className="text-xl text-gray-700 mb-8">
            Swizzl engages your leads online and turns them into confident buyers who walk in ready to say yes.
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 border border-blue-100 mb-10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">Not Just Another Chatbot</h3>
          <p className="text-lg text-blue-800 mb-6 text-center">
            Unlike simple chatbots or sales training programs, Swizzl actually conducts the initial sales process online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-5 border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-3">Meaningful Conversations</h4>
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
              <h4 className="font-bold text-blue-800 mb-3">Actionable Results</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-500 font-bold mr-2">✓</span>
                  <span>Pre-qualifies genuinely ready buyers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 font-bold mr-2">✓</span>
                  <span>Creates detailed buyer profiles your team can act on</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {impactItems.map((item, index) => (
            <Card key={index} className="text-center bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <CheckCircle2 className="h-12 w-12 text-teal-500 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-800">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-900 text-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">What This Means for You</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-blue-700 rounded-lg p-5 bg-blue-800">
              <h4 className="font-bold text-xl mb-2">More leads come in</h4>
              <p className="text-blue-100 text-sm">KPIs: Leads engaging, appointments booked</p>
            </div>
            <div className="border border-blue-700 rounded-lg p-5 bg-blue-800">
              <h4 className="font-bold text-xl mb-2">Easier to convert</h4>
              <p className="text-blue-100 text-sm">KPI: Conversion rate</p>
            </div>
            <div className="border border-blue-700 rounded-lg p-5 bg-blue-800">
              <h4 className="font-bold text-xl mb-2">More customer trust</h4>
              <p className="text-blue-100 text-sm">KPIs: Service sales, repeat customers, trade-ins</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
