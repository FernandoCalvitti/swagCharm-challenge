export default function truncate(str: string): string {
  return str.split(" ").splice(0, 5).join(" ");
}
