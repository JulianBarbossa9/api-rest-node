import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insertCar, getCarItems, getCarDetail, updateCar, deleteCar } from "../service/item"
import ItemModel from "../models/item"


const getItem = async ({params : { id }} : Request, res: Response)  => {
  try {
    const responseItem = await getCarDetail(id)//check in your routes if the name in the route name id exam: router.get('/:id', getItem) if the name is router.get('/:wrt', getItem) I need to provide wrt 
    const data = responseItem ? responseItem : 'NOT_FOUND'
    res.send(data)
  } catch (error)  {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}

const getItems = async (req: Request, res: Response) => {
  try {
    const responseItems = await getCarItems()
    res.send(responseItems)
  } catch (error)  {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}

const updateItem = async (req: Request, res: Response) => {
  try {
    const responseItem = await updateCar(req.params.id, req.body)
    res.send(responseItem)
  } catch (error)  {
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body)
    res.send(responseItem)
  } catch (error)  {
    handleHttp(res, 'ERROR_POST_ITEM', error)
  }
}

const deleteItem = async ({params: { id }}: Request, res: Response) => {
  try {
    const deleteItem = await deleteCar(id)
    res.send(deleteItem)
  } catch (error)  {
    handleHttp(res, 'ERROR_DELETED_ITEM')
  }
}

export { getItem, getItems, updateItem, postItem, deleteItem}