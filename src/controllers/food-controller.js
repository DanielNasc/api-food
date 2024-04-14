import { FoodService } from "../service/food-service.js";

export class FoodsController {
    constructor() {
        this.foodService = new FoodService()
    }

    async create(req, res) {
        const {
            name, category, quantity,
            expirationDate, price
        } = req.body;

        if (!name || !category, !quantity, !expirationDate, isNaN(price)) 
            return res.status(400).json({ "message": "missing data" })

        await this.foodService.create({
            name, category, quantity,
            expirationDate, price
        });
        res.sendStatus(201);
    }

    async findAll(req, res) {
        const foods = await this.foodService.findAll();
        res.json(foods);
    }

    async findById(req, res) {
        const { id } = req.params;
        const food = await this.foodService.findById(id);
        res.json(food);
    }

    async update(req, res) {
        const { id } = req.params;
        const food = req.body;
        await this.foodService.update(id, food);
        res.sendStatus(204);
    }

    async delete(req, res) {
        const { id } = req.params;
        await this.foodService.delete(id);
        res.sendStatus(204);
    }
}
