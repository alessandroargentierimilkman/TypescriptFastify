import { User } from "../domain/User"
import { UserRepository } from "../repository/UserRepository"

export class UserService {

   // ~~~~~~~~~~~ Singleton pattern ~~~~~~~~~~~~~~ //

   private static _instance: UserService

   public static getInstance(): UserService {
      return this._instance || (this._instance = new this())
   }

   // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

   private userRepository : UserRepository = UserRepository.getInstance();

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
