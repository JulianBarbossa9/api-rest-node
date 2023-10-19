import { NextFunction, Request, Response } from "express"

const logMiddelware = (req: Request, res: Response, next: NextFunction) => {
  console.log('This is a log from middelware')
  const header = req.headers
  const userAgent = header["user-agent"]
  console.log(userAgent)//Show in console what client make the reaquest  show this =>: PostmanRuntime/7.33.0
  next()
}


export { logMiddelware }