import { User } from "../domain/User"
import { UserRepository } from "../repository/UserRepository"
import { UserRepositoryImpl } from "../repository/UserRepositoryImpl"
import { UserService } from "./UserService";

export class UserServiceImpl implements UserService {

   // ~~~~~~~~~~~ Singleton pattern ~~~~~~~~~~~~~~ //

   private static _instance: UserService

   public static getInstance(): UserService {
      return this._instance || (this._instance = new this())
   }

   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

   private userRepository : UserRepository = UserRepositoryImpl.getInstance();

   public setUserRepositoryForTest(mocked: UserRepository) {
      this.userRepository = mocked
   }

   public getUserByName(name: string): User {
      return this.userRepository.getUserByName(name)
   }

   public postUser(user: User): User {
      return user
   }

}