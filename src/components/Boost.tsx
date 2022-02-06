interface BoostProp {
  onGetStartedClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Boost = ({ onGetStartedClick }: BoostProp): JSX.Element => {
  return (
    <div className="bg-[#3a3053] relative">
      <img
        src="/images/bg-boost-desktop.svg"
        alt="boost-desktop"
        className="w-full hidden lg:block"
      />
      <img
        src="/images/bg-boost-mobile.svg"
        alt="boost-mobile"
        className="w-full lg:hidden"
      />
      <div className="absolute w-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
        <h1 className="font-bold text-white text-2xl md:text-4xl">
          Boost your links today
        </h1>
        <button
          className="text-sm md:text-base font-bold text-white bg-primary-cyan py-2 px-7 mt-5 rounded-full"
          onClick={onGetStartedClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Boost;
