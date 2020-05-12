import {Request, Response} from 'express';
import createUser from './services/createUser';


export function hello(request: Request, response: Response){
  const user = createUser({
    email: "robertojr",
    password: "senha",
    techs: [
       "node js", 
       "react native", 
       {
    experiencia: " Omnistack",   
    tempo : 10  
    }
  ]

  });
  
  console.log(user);
  
  return response.json({message: "Hello world" });
  
  };