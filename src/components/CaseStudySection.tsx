
import { ArrowUp } from "lucide-react";

const CaseStudySection = () => {
  const metrics = [
    {
      label: "Homes Sold",
      before: "100/year",
      after: "400/year",
      icon: <ArrowUp className="h-4 w-4 text-green-500" />
    },
    {
      label: "Sales Team",
      before: "28",
      after: "14",
      icon: null
    },
    {
      label: "Close Rate",
      before: "2%",
      after: "40%",
      icon: <ArrowUp className="h-4 w-4 text-green-500" />
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">We've Solved This Before – For Homes</h2>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-6 text-center text-blue-900">Case Study Results</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <p className="text-gray-600 font-medium">{metric.label}</p>
                  <div className="flex items-center justify-center space-x-3 my-2">
                    <span className="text-lg text-gray-500 line-through">{metric.before}</span>
                    <span className="text-2xl font-bold text-blue-700">{metric.after}</span>
                    {metric.icon}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center text-lg font-medium text-green-700">
              Fewer but better leads
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
