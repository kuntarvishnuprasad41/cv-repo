// components/CodeCard.tsx
type CodeCardProps = {
  title: string;
  commands: string[];
};

export const CodeCard = ({ title, commands }: CodeCardProps) => (
  <div className="relative grid h-[130px] w-[433px] grid-rows-[40px_1fr] overflow-hidden rounded-[10px] bg-black">
    {/* Header */}
    <div className="relative flex items-center">
      <p className="px-3 py-1 text-[13px] text-sky-300">code : {title}</p>
      <button className="absolute right-1 top-[61%] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-slate-500 hover:text-slate-400">
        <svg
          className="h-[19px] w-[19px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Decorative Bar */}
      <div className="absolute bottom-0 right-1 z-10 h-[33px] w-[282px] rounded-t-[5px] border border-slate-600 bg-slate-700/50" />
      <div className="absolute bottom-0 z-20 h-[1px] w-[22%] bg-sky-300" />
    </div>

    {/* Footer with code lines */}
    <div className="flex flex-col justify-center gap-1 pl-2">
      {commands.map((cmd, idx) => (
        <div key={idx} className="flex items-center text-sm text-slate-100">
          <span className="pt-[3px] text-pink-400">
            <svg
              className="h-[19px] w-[19px] text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </span>
          <p className="pl-1">{cmd}</p>
        </div>
      ))}
    </div>
  </div>
);
