
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "We used Swizzl last night and walked into the dealer and bought a car today. My husband and I had been debating this purchase for 3 months but your recommendation really helped.",
      author: "Customer"
    },
    {
      quote: "I appreciated the honesty. Showing me why certain options wouldn't work was just as helpful as what would.",
      author: "Customer"
    },
    {
      quote: "I wasn't ready to talk to a salesperson, but this felt like talking to someone. It gave me confidence before going in.",
      author: "Customer"
    }
  ];

  const stats = [
    { label: "Facebook Ad Clicks", value: "10x", description: "industry average" },
    { label: "Avg. time on site", value: "14", description: "minutes" },
    { label: "Email collection", value: "68%", description: "" },
    { label: "Avg. cars reviewed", value: "8", description: "" },
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

        <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Customers Are Responding</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
              {stat.description && (
                <p className="text-xs text-gray-500">{stat.description}</p>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          (Note: stats based on lower-intent Facebook ads – high-intent leads perform even better.)
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
