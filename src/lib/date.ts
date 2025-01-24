import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

export function formatDate(date: string) {
  const postDate = dayjs(date);
  return postDate.format("M月D日 HH:mm");
}
