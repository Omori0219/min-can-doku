import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ja";

dayjs.extend(relativeTime);
dayjs.locale("ja");

export function formatDate(date: string) {
  const postDate = dayjs(date);
  const now = dayjs();
  const diffHours = now.diff(postDate, "hour");

  if (diffHours < 24) {
    return postDate.fromNow();
  } else {
    return postDate.format("M月D日");
  }
}
