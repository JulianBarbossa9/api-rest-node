import { Request, Response, Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";

const router = Router()//This handle the routes, create a CRUD, req, res

//Create a route http://localhost:3000/items
router.get('/:id', getItem)

router.get('/', getItems)

router.patch('/:id', updateItem)

router.post('/', postItem)

router.delete('/:id', deleteItem)



export {router}