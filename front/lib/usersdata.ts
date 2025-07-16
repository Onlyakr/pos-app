export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "cashier",
    password: "password",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    role: "manager",
    password: "password",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
