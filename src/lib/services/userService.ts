import { firebaseService } from "./firebaseService";
import type { DatabaseService } from "./types";

export class UserService {
  constructor(private dbService: DatabaseService) {
    this.dbService = dbService;
  }

  async addUser<T>(username: string, password: string) {
    try {
      const res = await this.dbService.addUser(username, password);
      return res as T;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async getUserbyId(id: string) {
    try {
      const res = await this.dbService.getUserById(id);
      return res;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

export const userService = new UserService(firebaseService);
