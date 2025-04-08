
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to transform your sales process?</h2>
        <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
          We strive to act as consultants to our customers, solving their problems and guiding them through a process that welcomes them in, builds trust, and facilitates decision-making.
        </p>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white text-lg py-6 px-8">
          <Mail className="h-5 w-5 mr-2" />
          <a href="mailto:andrew@swizzl.ai">Contact Us</a>
        </Button>
        <div className="mt-12 text-blue-300 text-sm">
          <p>© 2025 Swizzl.ai. All rights reserved.</p>
          <p className="mt-1">Contact: andrew@swizzl.ai</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
