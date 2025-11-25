const QuestionsRibbon = ({ questions = [
  "Which invoices should I chase this week?",
  "Am I at risk of missing payroll next month?",
  "Why is my cash flow always negative at the end of the quarter?",
  "How can I improve my payment collection rate?",
  "What's my current working capital situation?",
  "Should I consider invoice financing for my business?",
  "How do I calculate my cash conversion cycle?",
  "What are the best practices for managing receivables?"
], speed = 20, imageOffset = 0, direction = "left" }: { 
  questions: string[], 
  speed: number, 
  imageOffset: number,
  direction?: "left" | "right"
}) => {
  return (
    <div className="overflow-hidden">
      <div 
        className="flex gap-4 items-center"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          animationName: `marquee-${direction}`
        }}
      >
        {/* Duplicate the questions for seamless loop */}
        {[...questions, ...questions].map((question, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-[#1E1E1E66]/40 backdrop-blur-md rounded-full px-4 py-2"
          >
            <div className="flex items-center space-x-3">
              <div className="size-6 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={`/portret/p${((index + 1) % 8) + imageOffset}.png`}
                  alt="CredititAI"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white text-base/6 whitespace-nowrap">
                {question}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
        `
      }} />
    </div>
  );
};

export default QuestionsRibbon;
