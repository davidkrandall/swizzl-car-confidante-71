
import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
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
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Why It's So Hard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-red-700">{point.title}</h3>
              <p className="text-gray-700">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-100 border border-gray-300 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">It's Getting Worse</h3>
          <div className="text-center mb-4">
            <p className="text-lg text-gray-700 font-medium">The auto dealership sales landscape is rapidly deteriorating as traditional methods fail in the digital age.</p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-2xl mx-auto">
            <li className="flex items-start">
              <span className="text-gray-700 font-semibold mr-2">•</span>
              <p className="text-gray-700">Generic AI outreach solutions are flooding car buyers' inboxes, making customers more likely to ignore everyone's generic messages</p>
            </li>
            <li className="flex items-start">
              <span className="text-gray-700 font-semibold mr-2">•</span>
              <p className="text-gray-700">It's becoming harder to recruit and train salespeople who can man the phones and provide a brand right consultative sales experience for your customers</p>
            </li>
          </ul>
        </div>

        {/* Demo Section */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-bold text-center mb-6 text-blue-800">See Swizzl in Action</h3>
          <div className="aspect-video max-w-3xl mx-auto">
            <iframe
              src="https://www.loom.com/embed/3edc225018a641c68f747931f04c602b?sid=5359d804-ea0c-4a9b-9beb-623e984564f6"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
          <div className="text-center mt-6">
            <p className="text-lg text-blue-700 font-medium">Watch how Swizzl transforms dealership lead engagement and improves customer experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
