export type TErrorScreenTypes = "error" | "pageNotFound";

export type TErrorScreenData = {
  [key in TErrorScreenTypes]: {
    title: string;
    subtitle: string;
  };
};
