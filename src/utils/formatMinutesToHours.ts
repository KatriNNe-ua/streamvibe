export function formatMinutesToHours(minutes: number): string {
  const h = Math.floor(minutes / 60); 
  const m = minutes % 60;           

  let result = "";
  if (h > 0) result += `${h}h `;
  if (m > 0) result += `${m}min`;

  return result.trim();
}