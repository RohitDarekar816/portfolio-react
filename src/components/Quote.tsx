import React from "react";
import "../index.css";

interface QuoteCardProps {
  quote?: string;
  author?: string;
}

const Quote: React.FC<QuoteCardProps> = ({
  quote = "With great power comes great electricity bill",
  author = "Rohit",
}) => {
  return (
    <div className="h-full flex items-center justify-center p-4">
      <div className="w-full max-w-xl md:max-w-4xl mx-auto">
        {/* Main quote container */}
        <div className="relative border-2 border-[#ABB2BF] p-6">
          {/* Opening quote mark */}
          <div className="absolute -top-4 left-6 text-6xl text-gray-400 fira-code">
            "
          </div>

          {/* Quote text */}
          <div className="text-white fira-code text-lg md:text-xl leading-relaxed pl-7">
            {quote}
          </div>
        </div>
        <div className="text-right border-2 text-gray-400 border-[#ABB2BF] px-6 py-2 mt-2 ml-0 md:ml-[750px] w-fit md:w-auto">
            <div className="fira-code text-base md:text-lg font-semibold text-white">
              {author}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
