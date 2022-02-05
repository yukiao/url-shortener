type AppProps = {
  title: string;
  description: string;
  image: string;
  className?: string;
};

const Card = (props: AppProps): JSX.Element => {
  const { title, description, image, className } = props;
  return (
    <div
      className={`bg-white max-w-sm relative px-5 py-10 flex-1 mx-auto shadow-sm rounded-md ${className}`}
    >
      <div className="rounded-full bg-[#3a3053] w-20 h-20 p-5 top-0 -mt-10 relative left-1/2 lg:static -translate-x-1/2 lg:translate-x-0 -translate-y-1/2">
        <img
          src={image}
          className="w-full"
          alt={`${title.toLowerCase().split(" ").join("-")}`}
        />
      </div>
      <h2 className="text-xl text-center lg:text-left font-bold text-neutral-very-dark-violet">
        {title}
      </h2>
      <p className="text-base text-center lg:text-left mt-5">{description}</p>
    </div>
  );
};

export default Card;
