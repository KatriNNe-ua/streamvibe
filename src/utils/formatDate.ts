export function formatDate(dateStr: string): string {

  const [day, month, year] = dateStr.split(".");
  const date = new Date(+year, +month - 1, +day);


  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
