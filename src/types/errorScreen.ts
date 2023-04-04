export type TErrorScreenTypes = "error" | "pageNotFound";
interface IErrorScreenBody {
  title: string;
  subtitle: string;
}
export type TErrorScreenData = Record<TErrorScreenTypes, IErrorScreenBody>;
