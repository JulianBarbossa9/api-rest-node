
import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"
import { encrypt, verifyPassword } from "../utils/bccrypt.handle"
import { generateToken } from "../utils/jwt.handle"

const registerNewUser =async ({name, email, password}: User) => {
  //First we check if the user exist
  const checkUserExist = await UserModel.findOne({ email: email})
  if(checkUserExist) return "USER_ALREADY_EXIST"

  const passwordHash = await encrypt(password)//Encrypted password
  const registerNewUser = await UserModel.create({ name, email, password: passwordHash})
  return registerNewUser

}


const loginUser =async ({  email, password } : Auth) => {
  const checkUserExist = await UserModel.findOne({ email })
  if(!checkUserExist) return "USER_NOT_FOUND"

  const currentPassHash = checkUserExist.password
  const isCorrectPass =  await verifyPassword(password, currentPassHash)
  
  if (!isCorrectPass) return "PASSWORD_INCORRECT"//If don't exist return this message
  
  //create the token when the user is login
  const tokenjwt = generateToken(currentPassHash)

  const data = {
    token: tokenjwt,
    user: checkUserExist
  }
  
  return data // now instead of return the user, we return the token
  // return checkUserExist //Return the user if exist
}

export { registerNewUser, loginUser}