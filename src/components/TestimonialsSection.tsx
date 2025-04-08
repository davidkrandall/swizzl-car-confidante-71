
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "We used Swizzl last night and walked into the dealers and bought a car today. My husband and I had been debating this purchase for 3 months but your recommendation really did help sell me on the final decision.",
      author: "Sarah Thompson"
    },
    {
      quote: "I appreciated the honesty. Showing me why certain options wouldn't work for my needs was just as helpful as the recommendations. The \"gap\" it showed me based on my needs showed me that I could trust what it was saying.",
      author: "Michael Rodriguez"
    },
    {
      quote: "I wasn't ready to talk to a salesperson but I was willing to work with this. It asked me really good questions and it oddly felt like I was talking to someone. It helped me gain the confidence I needed before walking into a dealer.",
      author: "Jennifer Chen"
    }
  ];

  const stats = [
    { label: "Engagement", value: "10x", description: "" },
    { label: "Avg. time on site", value: "14 min", description: "" },
    { label: "Email collection", value: "68%", description: "" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">What Swizzl Users Are Saying</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <blockquote className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-right text-gray-500">— {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12 border border-blue-200 shadow-sm">
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-700">
            Customers Are <span className="text-blue-900">Responding</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-5 text-center shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md">
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-700 font-medium">{stat.label}</p>
                {stat.description && (
                  <p className="text-sm text-gray-500">{stat.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
