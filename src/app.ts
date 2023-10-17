//Root file

import 'dotenv/config' //To use Environment Variables
import express from 'express'
import cors from 'cors'
import { router } from './routes/index'

const PORT = process.env.PORT ?? 3001

const app = express()
app.use(cors())//With this we say that we API can be used for everybody origin: '*'

app.use(router) //With this we call the file routes/item.ts
app.listen(PORT, () => console.log(`App listen in the port: http://localhost:${PORT}`))
