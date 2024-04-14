import { FoodService } from "../service/food-service.js";

export class FoodsController {
    foodService = new FoodService();

    async create(req, res) {
        const food = req.body;
        await this.foodService.create(food);
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
