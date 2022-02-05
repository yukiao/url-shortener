import HttpClient from "./http-client";
import { Shortener } from "../types/Shortener";

class MainApi extends HttpClient {
  private static classInstance?: MainApi;

  private constructor() {
    super("https://api.shrtco.de/v2");
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new MainApi();
    }

    return this.classInstance;
  }

  public getShorten = (url: string) =>
    this.instance.get<Shortener>(`/shorten?url=${url}`);
}

export default MainApi;
