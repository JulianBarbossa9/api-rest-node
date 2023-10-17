import { Request, Response, Router } from "express";

const router = Router()//This handle the routes, create a CRUD, req, res

//Create a route http://localhost:3000/items
router.get('/', (req: Request, res: Response) => {
  res.send({ data: 'HERE_GOES_THE_DATA'})
})




export {router}