interface User {
  id: string;
  email: string;
  name: string;
  password: string; // hashed
  user_type_id: number; // 0 = User, 1 = Admin
}

export const users: User[] = [];

export const findUserByEmail = (email: string) => users.find(u => u.email === email);
export const createUser = (user: User) => users.push(user);
