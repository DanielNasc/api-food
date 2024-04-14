import { Router } from "express"
import { FoodsController } from "../controllers/food-controller.js"

const foodsRouter = new Router()
const foodsController = new FoodsController()

foodsRouter.post('/foods', (req, res) => foodsController.create(req, res))
foodsRouter.get('/foods', (req, res) => foodsController.findAll(req, res))
foodsRouter.get('/foods/:id', (req, res) => foodsController.findById(req, res))
foodsRouter.put('/foods/:id', (req, res) => foodsController.update(req, res))
foodsRouter.delete('/foods/:id', (req, res) => foodsController.delete(req, res))

export { foodsRouter }