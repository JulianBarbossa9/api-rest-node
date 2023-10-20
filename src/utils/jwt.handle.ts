//JSON WEB TOKEN
import { sign, verify } from "jsonwebtoken"

/**
 * For genera a token we need 2 things
 * 1- payload (carga)
 * 2- sign (firma)
 */

const JWT_SECRET= process.env.JWT_SECRET || "token.01010109"

/**
 * The firg arg is the payload, and the second arg is the sign, 
 * and the third ars in when expire the token
 */
const generateToken = (id: string) => {
  const createJwt = sign({ id }, JWT_SECRET ,{
    expiresIn: '2h'
  })

  return createJwt
}

const verifyToken = (jwt: string) => {
  const jwtExist = verify(jwt, JWT_SECRET)
  return jwtExist
}

export { generateToken, verifyToken}