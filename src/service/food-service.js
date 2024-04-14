import { FoodsRepository } from "../repositories/foods-repository.js";

export class FoodService {
    foodsRepository = new FoodsRepository();
    
    async create(food) {
        await this.foodsRepository.create(food);
    }

    async findAll() {
        return await this.foodsRepository.findAll();
    }

    async findById(id) {
        return await this.foodsRepository.findById(id);
    }

    async update(id, food) {
        await this.foodsRepository.update(id, food);
    }

    async delete(id) {
        await this.foodsRepository.delete(id);
    }
}