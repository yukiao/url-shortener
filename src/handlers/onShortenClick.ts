import React from "react";
import axios from "axios";
import Shortener from "shortener";
import ShortenObject from "shorten-object";

function onShortenClick(
  url: string,
  shortenUrl: any[],
  setUrl: React.Dispatch<React.SetStateAction<string>>,
  setShortenUrl: React.Dispatch<React.SetStateAction<any[]>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  setIsFetch: React.Dispatch<React.SetStateAction<boolean>>
) {
  return function (e: React.FormEvent<HTMLFormElement>) {
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

        let shortenUrlArray: ShortenObject[];
        const shortenStringify = window.localStorage.getItem("shortenUrl");
        if (!shortenStringify) {
          shortenUrlArray = [];
        } else {
          shortenUrlArray = JSON.parse(shortenStringify);
        }

        shortenUrlArray.push({
          id: shortenUrl.length,
          code: res.data.result.code,
          full_short_link: res.data.result.full_short_link,
          original_link: res.data.result.original_link,
        });

        window.localStorage.setItem(
          "shortenUrl",
          JSON.stringify(shortenUrlArray)
        );

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
}

export default onShortenClick;
