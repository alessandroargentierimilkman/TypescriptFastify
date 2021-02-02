import { RouteHandlerMethod } from "fastify"
import { RouteGenericInterface } from "fastify/types/route"
import { Server, IncomingMessage, ServerResponse } from "http"
import { User } from "../domain/User"
import { UserServiceImpl } from "../service/UserServiceImpl"




/* ~~~~~~~~~~~~~~~~~~~~~~~ GET /users?name=<name> ~~~~~~~~~~~~~~~~~~~~~~~~*/
interface GetUserByNameQueryParameters {
   name: string
}

interface GetUserByNameHeaders {
   authorization: string
}

export interface GetUserByName extends RouteGenericInterface {
   QueryParameters: GetUserByNameQueryParameters
   Headers: GetUserByNameHeaders
}

export const GetUserByNameHandler: RouteHandlerMethod<Server, IncomingMessage, ServerResponse, GetUserByName, unknown> = (async (request, reply) => {
   const token = (request.headers as GetUserByNameHeaders).authorization
   const name  = (request.query as GetUserByNameQueryParameters).name
   console.log("Name: " + name)
   console.log("Token: " + token)

   return UserServiceImpl.getInstance().getUserByName(name)
})

/* ~~~~~~~~~~~~~~~~~~~~~~~~ POST /users -d '{"name": "Nick", "surname": "Furcedda", "age": 87}' ~~~~~~~~~~~~~~~~~~~~ */

interface PostUserHeaders {
   authorization: string;
}

export interface PostUser extends RouteGenericInterface {
   Headers: PostUserHeaders;
   Body: User;
}

export const PostUserHandler: RouteHandlerMethod<Server, IncomingMessage, ServerResponse, PostUser, unknown> = (async (request, reply) => {
   const token = (request.headers as GetUserByNameHeaders).authorization
   console.log("Token: " + token)

   const user: User = request.body

   return UserServiceImpl.getInstance().postUser(user)
})