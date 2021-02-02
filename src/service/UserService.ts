import { User } from "../domain/User"
import { UserRepository } from "../repository/UserRepository"

export interface UserService {
   setUserRepositoryForTest(mocked: UserRepository): void
   getUserByName(name: string): User
   postUser(user: User): User
}
