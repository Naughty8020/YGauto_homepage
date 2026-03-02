import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 w-full  md:py-12 border-t border-gray-100 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0">
          {/* 1. コピーライト（スマホでは中央、PCでは左寄せ） */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-sm font-medium">
              &copy; 2026 Your Company.{" "}
              <span className="block md:inline">All rights reserved.</span>
            </p>
          </div>

          {/* 2. SNSアイコンエリア（サイズを少し大きく、タップしやすく） */}
          <div className="order-1 md:order-2 flex justify-center gap-8 md:gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-sky-500 transition-colors p-1"
            >
              <Twitter size={24} /> {/* スマホ考慮で少し大きく */}
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-colors p-1"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-700 transition-colors p-1"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors p-1"
            >
              <Github size={24} />
            </a>
          </div>

          {/* 3. ポリシーリンク（スマホでは下に、PCでは右寄せ） */}
          <div className="order-3 flex justify-center md:justify-end text-sm gap-4">
            <a href="/privacy" className="text-gray-500 hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-500 hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
