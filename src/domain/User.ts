export class User {

   fiscalCode: string
   name: string
   surname: string
   age: number
  
   constructor(fiscalCode: string, name: string, surname: string, age: number) {
      this.fiscalCode = fiscalCode
      this.name = name
      this.surname = surname
      this.age = age
   }
  
   greet(): void {
      console.log("Hello!")
   }
  
   getCompleteName(nickname?:string): string { 
      return `${this.name} ${(nickname!=null) ? (" " + nickname + " ") : " " + this.surname}`  
   }
    
}