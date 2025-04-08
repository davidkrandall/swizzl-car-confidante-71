
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

        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 transform -skew-y-1 rounded-xl shadow-lg"></div>
          <div className="relative py-10 px-6 rounded-xl">
            <h3 className="text-3xl font-extrabold text-center mb-10 text-white drop-shadow-md">
              Customers Are<span className="ml-2 text-yellow-300 animate-pulse">Responding!</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 border border-white/20 shadow-lg">
                  <p className="text-5xl font-bold bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent mb-2">{stat.value}</p>
                  <p className="text-lg font-medium text-white">{stat.label}</p>
                  {stat.description && (
                    <p className="text-sm text-blue-100">{stat.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
