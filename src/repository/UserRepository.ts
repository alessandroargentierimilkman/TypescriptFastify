import { User } from "../domain/User"

export interface UserRepository {
   getUserByName(name: string): User   
   postUser(user: User): User
}