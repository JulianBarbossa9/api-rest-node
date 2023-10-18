//Logica de negocio

import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/item"

const insertItem = async (item: Car): Promise<Car> => {
  const responseInsert = await ItemModel.create(item) //Insert the item in db
  return responseInsert
}

export { insertItem }