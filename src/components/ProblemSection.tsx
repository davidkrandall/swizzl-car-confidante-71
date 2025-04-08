
import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
  const problems = [
    {
      title: "Sellers can't gain buyer trust",
      stat: "75%",
      description: "of buyers do not trust salespeople to tell the truth about their product or service."
    },
    {
      title: "Buyers want to figure it out themselves",
      stat: "87%",
      description: "of buyers want to self-serve part or all of their journey before talking to a salesperson."
    },
    {
      title: "Buyer confidence is dropping",
      stat: "59%",
      description: "of buyers feel less confident in their purchase decisions when relying solely on online resources."
    }
  ];

  const painPoints = [
    {
      title: "You can't engage most leads",
      description: "Most leads never respond to generic messages asking them to 'come in'"
    },
    {
      title: "Salespeople hate low-yield outreach",
      description: "Converting salespeople to call center employees creates frustration"
    },
    {
      title: "Messaging isn't compelling",
      description: "Without knowing anything about the customer, outreach falls flat"
    },
    {
      title: "Customers show up with unreasonable expectations",
      description: "They don't know they can't afford the car they want or have credit issues"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" id="problem">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">The Landscape</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="border-t-4 border-t-blue-700">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                <p className="text-4xl font-bold text-blue-700 mb-2">{problem.stat}</p>
                <p className="text-gray-600">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">The Result</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-red-700">{point.title}</h3>
              <p className="text-gray-700">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-center mb-4 text-red-800">It's Going to Get Worse</h3>
          <div className="text-center mb-4">
            <p className="text-lg text-red-900 font-medium">The auto sales landscape is rapidly deteriorating as traditional methods fail in the digital age.</p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-2xl mx-auto">
            <li className="flex items-start">
              <span className="text-red-700 font-semibold mr-2">•</span>
              <p className="text-red-700">As digital noise increases, customer engagement rates will continue to plummet - making each lead more expensive and harder to convert</p>
            </li>
            <li className="flex items-start">
              <span className="text-red-700 font-semibold mr-2">•</span>
              <p className="text-red-700">Generic AI outreach solutions are flooding customer inboxes, creating permanent damage to your brand reputation</p>
            </li>
            <li className="flex items-start">
              <span className="text-red-700 font-semibold mr-2">•</span>
              <p className="text-red-700">The gap between what customers expect and what salespeople can deliver is widening - creating frustration on both sides</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
