import React from "react";
import ReactMarkdown from "react-markdown";

const MlBody: React.FC<MotivationalLetterProps> = ({ motivationalLetter }) => {
  return (
    <div className="font-sans text-[11pt] whitespace-pre-line leading-relaxed">
      <ReactMarkdown
        components={{
          strong: ({ node, ...props }) => (
            <strong className="font-bold" {...props} />
          ),
          em: ({ node, ...props }) => <em className="italic" {...props} />,
        }}
      >
        {motivationalLetter.body}
      </ReactMarkdown>
    </div>
  );
};

export default MlBody;
