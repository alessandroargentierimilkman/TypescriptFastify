import { FastifyInstance, FastifyLoggerInstance } from "fastify"
import fastify from 'fastify'
import { Server, IncomingMessage, ServerResponse } from "http"
import { GetUserByName, GetUserByNameHandler, PostUser, PostUserHandler } from "./handlers/UserHandlers"

export class App {

   build(): FastifyInstance<Server, IncomingMessage, ServerResponse, FastifyLoggerInstance> {
      const server = fastify()

      server.get('/health', async (request, reply) => {return {status: "active"}})
          
      // $ curl -H 'Authorization: bearer GFTSG6767' -X GET 'http://localhost:9876/users?name=Nicolo'      
      server.get<GetUserByName>("/users", GetUserByNameHandler)
     
      // $ curl -H 'Content-Type: application/json' -H 'Authorization: bearer GFTSG6767' -X POST 'http://localhost:9876/users' -d '{"fiscalCode": "RBNCRS45D342WS", "name": "Robinson", "surname": "Crusoe", "age": 74}'      
      server.post<PostUser>("/users", PostUserHandler)
  
      return server
   }

   start(): void {
      this.build().listen(9876, (err, address) => {
         if (err) {
            console.error(err)
            process.exit(1)
         }
         console.log(`Server listening at ${address}`)
      })
   }
}