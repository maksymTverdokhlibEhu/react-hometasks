export interface DatabaseService {
  addUser<T>(username: string, password: string): Promise<T>;
  getUserById(id: string): Promise<any>;
}
