import Container from "./Container";

interface HeroProp {
  onGetStartedClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Hero = ({ onGetStartedClick }: HeroProp): JSX.Element => {
  return (
    <div
      style={{
        height: "calc(100vh - 112px)",
      }}
      className="min-h-screen lg:min-h-0 mt-[112px]"
    >
      <Container className="flex items-center h-full flex-col-reverse lg:flex-row">
        <div className=" w-full lg:w-7/12 lg:pr-24 flex flex-col justify-center mt-5  ">
          <h1 className=" font-bold text-4xl lg:text-7xl text-center lg:text-left text-neutral-very-dark-blue">
            More than just shorter links
          </h1>
          <p className="text-lg mt-3 text-neutral-grayish-violet text-center lg:text-left">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button
            className="mt-10 px-5 py-3 rounded-full bg-primary-cyan text-white text-base font-bold cursor-pointer mx-auto self-start lg:mx-0"
            onClick={onGetStartedClick}
          >
            Get Started
          </button>
        </div>

        <div className="lg:flex-1 h-full transform translate-x-10 lg:translate-x-32 relative">
          <img
            src="/images/illustration-working.svg"
            alt="hero"
            className="lg:w-full lg:bottom-0 lg:absolute lg:scale-150 lg:origin-bottom"
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
