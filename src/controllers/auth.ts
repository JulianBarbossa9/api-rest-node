import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../service/auth"

const resgisterCtrl =async ({body}: Request, res: Response) => {
  const responseUser = await registerNewUser(body)
  res.send(responseUser)
}

const loginCtrl =async ({body}: Request, res: Response) => {
  const { email, password } = body
  const responseIsValid = await loginUser({ email, password})
  if( responseIsValid === 'PASSWORD_INCORRECT'){
    res.status(403)
    res.send(responseIsValid)
  } else {
    res.send(responseIsValid)
    res.status(200)
  }
}

export { resgisterCtrl, loginCtrl}