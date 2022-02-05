export interface Shortener {
  ok: boolean;
  result: {
    code: string;
    full_short_link: string;
    original_link: string;
  };
}
