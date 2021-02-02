import { User } from "../../src/domain/User"
import { UserService } from "../../src/service/UserService"
import { mock, when, instance } from "ts-mockito"
import { UserRepository } from "../../src/repository/UserRepository"

//npm install ts-mockito --save-dev

var chai = require('chai')
const expect = chai.expect


describe('get User by name', () => {
    it('should get the User by his/her name', async () => {

        const userService : UserService = UserService.getInstance()
        const expected : User = new User("NNKFRC54H13D761E", "Niccu", "Furcedda", 87)
        const actual   : User = userService.getUserByName("Niccu")

        expect(expected).to.eql(actual);
        expect(expected.fiscalCode).equal(actual.fiscalCode)
    })

    it('should mock userRepository', async () => {

        const expected : User = new User("NNKFRC54H13D761E", "Nicola", "Furcedda", 87)

        let mockedUserRepository: UserRepository = mock(UserRepository);
        when(mockedUserRepository.getUserByName("Niccu")).thenReturn(expected);
        let userRepository:UserRepository = instance(mockedUserRepository);

        const userService : UserService = UserService.getInstance()
        userService.setUserRepositoryForTest(userRepository)
        const actual   : User = userService.getUserByName("Niccu")

        expect(expected).to.eql(actual);
        expect(expected.fiscalCode).equal(actual.fiscalCode)
    })


})
