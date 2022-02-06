declare module "shorten-object" {
  interface ShortenObject {
    id: number;
    code: string;
    full_short_link: string;
    original_link: string;
  }
  export = ShortenObject;
}
