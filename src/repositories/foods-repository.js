export class FoodsRepository {
    static foods = [];

    static async create(food) {
        FoodsRepository.foods.push(food);
    }

    static async findAll() {
        return FoodsRepository.foods;
    }

    static async findById(id) {
        return FoodsRepository.foods.find(food => food.id === id);
    }

    static async update(id, food) {
        const index = FoodsRepository.foods.findIndex(food => food.id === id);
        FoodsRepository.foods[index] = food;
    }

    static async delete(id) {
        FoodsRepository.foods = FoodsRepository.foods.filter(food => food.id !== id);
    }
}