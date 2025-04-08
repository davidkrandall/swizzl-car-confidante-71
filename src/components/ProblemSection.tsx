
import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
  const problems = [
    {
      title: "Car dealers can't gain buyer trust",
      stat: "75%",
      description: "of car buyers do not trust dealership salespeople to tell the truth about their vehicles."
    },
    {
      title: "Car buyers want to figure it out themselves",
      stat: "87%",
      description: "of auto buyers want to self-serve part or all of their journey before talking to a dealership."
    },
    {
      title: "Car buyer confidence is dropping",
      stat: "59%",
      description: "of auto buyers feel less confident in their purchase decisions when relying solely on online resources."
    }
  ];

  const painPoints = [
    {
      title: "Your dealership can't engage most leads",
      description: "Most car buying leads never respond to generic messages asking them to 'come in'"
    },
    {
      title: "Auto salespeople hate low-yield outreach",
      description: "Converting salespeople to call center employees creates frustration"
    },
    {
      title: "Dealership messaging isn't compelling",
      description: "Without knowing anything about the car buyer, outreach falls flat"
    },
    {
      title: "Car customers show up with unreasonable expectations",
      description: "They don't know they can't afford the vehicle they want or have credit issues"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" id="problem">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">The Auto Sales Landscape</h2>
        
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

        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">The Result for Car Dealerships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-red-700">{point.title}</h3>
              <p className="text-gray-700">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-center mb-4 text-red-800">It's Getting Worse</h3>
          <div className="text-center mb-4">
            <p className="text-lg text-red-900 font-medium">The auto dealership sales landscape is rapidly deteriorating as traditional methods fail in the digital age.</p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-2xl mx-auto">
            <li className="flex items-start">
              <span className="text-red-700 font-semibold mr-2">•</span>
              <p className="text-red-700">As digital noise increases, car buyer engagement rates will continue to plummet - making each dealership lead more expensive and harder to convert</p>
            </li>
            <li className="flex items-start">
              <span className="text-red-700 font-semibold mr-2">•</span>
              <p className="text-red-700">Generic AI outreach solutions are flooding car buyers' inboxes, creating permanent damage to your dealership's brand reputation</p>
            </li>
            <li className="flex items-start">
              <span className="text-red-700 font-semibold mr-2">•</span>
              <p className="text-red-700">The gap between what auto customers expect and what dealership salespeople can deliver is widening - creating frustration on both sides</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
