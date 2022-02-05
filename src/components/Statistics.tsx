import React, { useState } from "react";
import Card from "./Card";
import ShortLink from "./ShortLink";
import Container from "./Container";

import axios from "axios";
import { Shortener } from "../types/Shortener";
import { ShortenObject } from "../types/ShortenObject";
import useCopyToClipboard from "../hooks/useCopyToClipboard";

const Statistics = (): JSX.Element => {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [shortenUrl, setShortenUrl] = useState<ShortenObject[]>([]);
  const [isFetch, setIsFetch] = useState<boolean>(false);

  const [isCopied, handleCopy] = useCopyToClipboard(3000);

  const onShortenClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!url) {
      setErrorMessage("Please add link");
      setIsError(true);
      setTimeout(() => {
        setErrorMessage("");
        setIsError(false);
      }, 5000);
      return;
    }

    setIsFetch(true);
    axios
      .get<Shortener>("https://api.shrtco.de/v2/shorten?url=" + url)
      .then((res) => {
        setShortenUrl([
          ...shortenUrl,
          {
            id: shortenUrl.length,
            code: res.data.result.code,
            full_short_link: res.data.result.full_short_link,
            original_link: res.data.result.original_link,
          },
        ]);

        setErrorMessage("");
        setIsError(false);
        setUrl("");
        setIsFetch(false);
      })
      .catch((e) => {
        setErrorMessage(e.response.data.error);
        setIsError(true);
        setUrl("");
        setIsFetch(false);
        setTimeout(() => {
          setErrorMessage("");
          setIsError(false);
        }, 5000);
      });
  };

  return (
    <>
      <div className="mt-40 bg-[#f0f1f6] ">
        <Container className="bg-[#3a3053] rounded-md transform -translate-y-1/2 relative mx-5 xl:mx-auto px-0 ">
          <img
            src="/images/bg-shorten-desktop.svg"
            alt="shorten-desktop"
            className="w-full rounded-md hidden md:block"
          />
          <img
            src="/images/bg-shorten-mobile.svg"
            alt="shorten-mobile"
            className="w-full rounded-md md:hidden"
          />
          <div className="flex flex-col md:flex-row absolute w-10/12 lg:mx-0 lg:w-11/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div className="flex flex-col md:flex-1 ">
              <input
                type="text"
                className={`md:flex-1 outline-none  rounded-md px-3 py-2 md:px-5 text-base ${
                  isError &&
                  "border-4 border-secondary-red placeholder:text-secondary-red"
                }`}
                placeholder="Shorten a link here..."
                value={url}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUrl(e.target.value)
                }
              />
              <p
                className={`   text-secondary-red md:font-bold italic my-3 md:absolute top-full md:mt-1 text-sm md:text-base  lg:mt-3 ${
                  isError ? "visible" : "invisible"
                }`}
              >
                {errorMessage}
              </p>
            </div>
            <button
              className={`${
                isFetch ? "bg-[#9be3e2]" : "bg-primary-cyan"
              } font-bold text-white px-5 py-2 text-base rounded-md ml-0 md:ml-5`}
              disabled={isFetch ? true : false}
              onClick={onShortenClick}
            >
              {isFetch ? "Generating" : "Shorten It!"}
            </button>
            {/* <input type="text" className="md:flex-1" /> */}
          </div>
        </Container>
        <Container className=" flex flex-col space-y-5 ">
          {shortenUrl.map((url) => (
            <ShortLink
              original_link={url.original_link}
              full_link={url.full_short_link}
              isCopied={isCopied}
              handleCopy={handleCopy}
              key={url.id}
            />
          ))}
        </Container>
      </div>

      <div className="bg-[#f0f1f6] py-24 ">
        <Container className="py-1">
          <h1 className="text-4xl font-bold text-neutral-very-dark-violet mb-2 text-center">
            Advanced Statistics
          </h1>

          <p className="text-center mt-5">
            Track how your links are performing across the web with <br /> our
            advanced statistics dashboard
          </p>

          <div className="flex flex-col lg:flex-row relative justify-between mt-20   lg:space-x-5 before:w-2 before:block before:h-full before:left-1/2 before:-translate-x-1/2 before:lg:w-11/12 before:lg:top-1/2 before:lg:h-2 before:bg-primary-cyan before:absolute items-start">
            <Card
              title="Brand Recognition"
              description="Boost your brand recognition with each click. Generic liks don't mean a thing. Branded links help instil confidence in your content."
              image="/images/icon-brand-recognition.svg"
            />
            <Card
              title="Detailed Records"
              description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
              image="/images/icon-detailed-records.svg"
              className="mt-20 lg:mt-10"
            />
            <Card
              title="Fully Customizable"
              description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
              image="/images/icon-fully-customizable.svg"
              className="mt-20 lg:mt-20"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Statistics;
