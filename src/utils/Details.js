import React from 'react';

const Details = () => {
  return (
    <div className="w-full max-w-2xl mx-auto  rounded-lg overflow-hidden shadow-2xl border border-[#537895]">
      {/* Window Dots */}
      <div className="flex space-x-4 items-center px-6 py-3 bg-[#25355b] h-14">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
      </div>

      {/* Code Block */}
      <pre className="p-6 md:p-10 text-xs md:text-sm font-mono leading-relaxed overflow-x-auto">
        <code>
          <span className="text-[#f92672]">const</span>{" "}
          <span className="text-[#a6e22e]">coder</span>{" "}
          <span className="text-white">=</span> {"{"}
          <br />
          {"  "}
          <span className="text-[#f8f8f2]">name</span>:{" "}
          <span className="text-[#e6db74]">'Ankit kumar Pandey'</span>,
          <br />
          {"  "}
          <span className="text-[#f8f8f2]">skills</span>:{" "}
          <span className="text-white">[</span>
          <span className="text-[#e6db74]">
            'Html', 'Css', 'Java Script', 'Type Script', 'React js'
          </span>
          <br />
          {"    "}
          <span className="text-[#e6db74]">
            'Express', 'MongoDB', 'Node',
          </span>
          <span className="text-white">]</span>,
          <br />
          {"  "}
          <span className="text-[#f8f8f2]">hardWorker</span>:{" "}
          <span className="text-[#ae81ff]">true</span>,
          <br />
          {"  "}
          <span className="text-[#f8f8f2]">quickLearner</span>:{" "}
          <span className="text-[#ae81ff]">true</span>,
          <br />
          {"  "}
          <span className="text-[#f8f8f2]">problemSolver</span>:{" "}
          <span className="text-[#ae81ff]">true</span>,
          <br />
          {"  "}
          <span className="text-[#66d9ef]">hireable</span>:{" "}
          <span className="text-[#f92672]">function</span>() {"{"}
          <br />
          {"    "}
          <span className="text-[#f92672]">return</span> (
          <br />
          {"      "}
          <span className="text-[#66d9ef]">this</span>.hardWorker &&
          <br />
          {"      "}
          <span className="text-[#66d9ef]">this</span>.problemSolver &&
          <br />
          {"      "}
          <span className="text-[#66d9ef]">this</span>.skills.length{" "}
          <span className="text-[#f92672]">&gt;=</span>{" "}
          <span className="text-[#ae81ff]">5</span>
          <br />
          {"    "});
          <br />
          {"  "}
          {"}"}
          <br />
          {"}"};
        </code>
      </pre>
    </div>
  );
};

export default Details;
