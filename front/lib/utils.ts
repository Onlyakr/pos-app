import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getUsers = async () => {
  const users = await fetch("http://localhost:3000/api/users");
  if (!users.ok) {
    throw new Error("Failed to fetch users");
  }
  const usersData = await users.json();
  return usersData;
};
