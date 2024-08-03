import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef: any = useRef();

  useEffect(() => {
    if (editorRef.current && aiOutput) {
      editorRef.current.value = aiOutput;
    }
  }, [aiOutput]);

  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput);
  };

  return (
    <div className="bg-white border shadow-lg rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="flex gap-2" onClick={handleCopy}>
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>
      <div className="p-5">
        {aiOutput ? (
          <SyntaxHighlighter language="python" style={darcula}>
            {aiOutput}
          </SyntaxHighlighter>
        ) : (
          <ReactQuill 
            theme="snow" 
            value="Your Result will appear here!" 
            className="h-[600px]" 
            ref={editorRef} 
            readOnly={true}
          />
        )}
      </div>
    </div>
  );
}

export default OutputSection;
