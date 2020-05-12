interface experience{
experiencia: String,
tempo: number

}

interface createUserData{
  name?: String,
  email: String,
  password: String,
  techs: Array<String | experience >
}

export default function createUser(
  {
    name  = '',
    email,
    password,
    techs,
  } :createUserData

) {
  const user = {
    name,
    email,
    password,
    techs,
  }
  return user;

}