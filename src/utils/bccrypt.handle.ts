import { hash, compare } from "bcryptjs"

//encrypt the data
const encrypt = async (passwordPlane: string) => {
  const passWordHash = await hash(passwordPlane, 6)//The second arg thell us is the level of hashability higher segurity and aslo higher cost of performance
  return passWordHash; //Return a password encrypted
}

//check if the password send is equal to the password encrypted
const verifyPassword = async (passwordPlane: string, passwordHash: string): Promise<boolean> => {
  const isCorrect = await compare(passwordPlane, passwordHash)//the first agr is the normal password and the second arg is the password hash
  return isCorrect
}

export { encrypt, verifyPassword }