
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl text-blue-900">Swizzl.ai</span>
        </div>
        <Button className="bg-teal-500 hover:bg-teal-600">
          <Mail className="h-4 w-4 mr-2" />
          <a href="mailto:andrew@swizzl.ai" className="text-white">Contact Us</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
