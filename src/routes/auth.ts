import { Request, Response, Router } from 'express'
import { loginCtrl, registerCtrl } from '../controllers/auth'

const router = Router()
/** http://localhos:3000/auth/register [POST] */
router.post('/register', registerCtrl )
router.post('/login', loginCtrl )


export { router }