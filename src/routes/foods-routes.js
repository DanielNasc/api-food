import { Router } from "express"
import { FoodsController } from "../controllers/food-controller.js"

const foodsRouter = Router()

const foodsController = new FoodsController()

foodsRouter.post('/foods', foodsController.create)
foodsRouter.get('/foods', foodsController.findAll)
foodsRouter.get('/foods/:id', foodsController.findById)
foodsRouter.put('/foods/:id', foodsController.update)
foodsRouter.delete('/foods/:id', foodsController.delete)

export { foodsRouter }