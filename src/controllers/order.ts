import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insertCar, getCarItems, getCarDetail, updateCar, deleteCar } from "../service/item"
import ItemModel from "../models/item"
import { JwtPayload } from "jsonwebtoken"

interface RequestExt extends Request {
  user?: string | JwtPayload
}

const getOrders = async (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "This only can read person how have permission / JWT",
      user: req.user
    })
  } catch (error)  {
    handleHttp(res, 'ERROR_GET_ORDERS')
  }
}



export { getOrders }