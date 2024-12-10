import { User } from '../models/User';
import { validateUser } from '../validators/userValidator';

const users: User[] = [];

export const createUser = async (userData: unknown): Promise<User> => {
    const validatedUser = validateUser(userData);
  const newUser: User = { ...validatedUser, id: Date.now().toString() };
  users.push(newUser);
  return newUser;
};

export const getUsers = async (): Promise<User[]> => {
  return users;
};