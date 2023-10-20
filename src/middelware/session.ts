//The mainly task is Check if you have an active section

import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload
}

const checkSessionJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const userJwt = req.headers.authorization || ''
    const jwt = userJwt.split(' ').pop()//['Bearer', 'valueToken']
    const userJwtValid = verifyToken(`${jwt}`)//if we put this show error const userJwtValid = verifyToken(jwt)
    console.log(userJwtValid) // show id in my casey encrypted
    if(!userJwtValid){
      res.status(401)
      res.send('SESSION_INVALID')
    } else{
      res.status(200)
      req.user = userJwtValid
      // console.log({userJwt})
      next()
    }

  } catch (error) {
    res.status(400)
    res.send('SESSION_NOT_VALID')
    console.log(error)
  }
}


export { checkSessionJwt }