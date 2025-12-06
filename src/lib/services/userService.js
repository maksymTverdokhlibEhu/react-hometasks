import { firebaseService } from "./firebaseService";

export class UserService {
    constructor(dbService) {
        this.dbService = dbService
    }

    async addUser(username, password) {
        try {
            const res = await this.dbService.addUser(username, password);

            console.log("User added!");
            return res
        } catch (error) {
            console.error("Error:", error);
        }
    }

    async getUserbyId(id) {
        try {
            const res = await this.dbService.getUserById(id);
            return res
        } catch (error) {
            console.error("Error:", error);
        }
    }
}

export const userService = new UserService(firebaseService);