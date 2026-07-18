export const emptyForm = { name: "", salary: "", age: "" };

export const fmtMoney = (n) => "$" + Number(n || 0).toLocaleString("en-US");

export const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

const PALETTE = ["#5B8CC7", "#B8895F", "#4F9D8C", "#B45C7A", "#C7A048", "#8B7EC8"];

export const accentFor = (id) => PALETTE[Math.abs(id) % PALETTE.length];
