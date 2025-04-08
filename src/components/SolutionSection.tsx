
import { CheckCircle2, ArrowDownCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const SolutionSection = () => {
  const impactItems = [
    "They wrestle with real vehicle questions",
    "They uncover tough car buying tradeoffs",
    "They get clear on what really matters in their next vehicle"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50" id="solution">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Swizzl's Impact For Auto Dealers</h2>
          <p className="text-xl text-gray-700">
            Swizzl engages your dealership leads online and turns them into confident car buyers who walk in ready to say yes.
          </p>
        </div>

        {/* Top cards section with consistent styling */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {impactItems.map((item, index) => (
            <Card key={index} className="text-center border border-blue-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6 flex flex-col items-center">
                <div className="w-14 h-14 bg-teal-500 bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-teal-500" />
                </div>
                <p className="text-lg font-medium text-gray-800">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Arrow down indicator to connect sections */}
        <div className="flex justify-center mb-8">
          <ArrowDownCircle className="h-10 w-10 text-blue-700 animate-bounce" />
        </div>

        {/* Bottom section with background that ties to cards above */}
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">What This Means for Your Dealership</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-blue-700 rounded-lg p-5 bg-blue-800 hover:bg-blue-700 transition-colors duration-300">
              <h4 className="font-bold text-xl mb-2">More car buyers come in</h4>
              <Separator className="bg-blue-600 my-3" />
              <p className="text-blue-100 text-sm">KPIs: Leads engaging, test drives booked</p>
            </div>
            
            <div className="border border-blue-700 rounded-lg p-5 bg-blue-800 hover:bg-blue-700 transition-colors duration-300">
              <h4 className="font-bold text-xl mb-2">Easier to convert</h4>
              <Separator className="bg-blue-600 my-3" />
              <p className="text-blue-100 text-sm">KPI: Vehicle sale conversion rate</p>
            </div>
            
            <div className="border border-blue-700 rounded-lg p-5 bg-blue-800 hover:bg-blue-700 transition-colors duration-300">
              <h4 className="font-bold text-xl mb-2">More customer trust</h4>
              <Separator className="bg-blue-600 my-3" />
              <p className="text-blue-100 text-sm">KPIs: Service sales, repeat customers, trade-ins</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
