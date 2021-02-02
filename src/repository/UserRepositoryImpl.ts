import { User } from "../domain/User"
import { UserRepository } from "./UserRepository"

export class UserRepositoryImpl implements UserRepository {

    // ~~~~~~~~~~~ Singleton pattern ~~~~~~~~~~~~~~ //

   private static _instance: UserRepository

   public static getInstance(): UserRepository {
      return this._instance || (this._instance = new this())
   }

   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

   public getUserByName(name: string): User {
      return new User("NNKFRC54H13D761E", name, "Furcedda", 87)
   }

   public postUser(user: User): User {
      return user
   }

}