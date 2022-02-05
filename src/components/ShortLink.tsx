import { MouseEvent } from "react";
interface ShortLinkProps {
  original_link: string;
  full_link: string;
  isCopied: boolean;
  handleCopy: (text: string | number) => void;
}
const ShortLink = ({
  original_link,
  full_link,
  isCopied,
  handleCopy,
}: ShortLinkProps): JSX.Element => {
  return (
    <div className="bg-white px-5 py-3 flex relative md:static space-y-5 md:space-y-0 rounded-md shadow-sm items-center flex-col md:flex-row">
      <p className="text-neutral-very-dark-violet flex-1 overflow-ellipsis overflow-hidden pr-0 md:pr-5 w-full">
        {original_link}
      </p>

      <div className="left-0 right-0 w-full h-[2px] bg-[#f0f1f6] md:hidden"></div>
      <div className="lg:ml-auto flex flex-col md:flex-row w-full md:items-center md:w-auto space-y-5 md:space-y-0">
        <span className="text-primary-cyan mx-auto">{full_link}</span>

        {isCopied ? (
          <button
            className="md:w-24 h-10 text-white bg-primary-dark-violet rounded-md md:ml-5 w-full"
            disabled
          >
            Copied!
          </button>
        ) : (
          <button
            className="md:w-24 h-10 text-white bg-primary-cyan rounded-md w-full  md:ml-5"
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              handleCopy(full_link);
            }}
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
};

export default ShortLink;
