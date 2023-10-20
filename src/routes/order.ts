import { Router } from "express";
import { getOrders } from "../controllers/order";
import { checkSessionJwt } from "../middelware/session";

/**
 * can only be accessed if you have an active section
 * if we have a JWT valid
 */
const router = Router()

router.get('/',checkSessionJwt, getOrders)

export { router }