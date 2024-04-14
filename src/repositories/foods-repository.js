import { Food } from "../model/food.js";

export class FoodsRepository {
    async create(foodData) {
      try {
        const newFood = new Food(foodData);
        const savedFood = await newFood.save();
        return savedFood;
      } catch (error) {
        throw error;
      }
    }
  
    async findAll() {
      try {
        const allFoods = await Food.find();
        return allFoods;
      } catch (error) {
        throw error;
      }
    }
  
    async findById(id) {
      try {
        const food = await Food.findById(id);
        return food;
      } catch (error) {
        throw error;
      }
    }
  
    async update(id, foodData) {
      try {
        const updatedFood = await Food.findByIdAndUpdate(id, foodData, { new: true });
        return updatedFood;
      } catch (error) {
        throw error;
      }
    }
  
    async delete(id) {
      try {
        await Food.findByIdAndDelete(id);
      } catch (error) {
        throw error;
      }
    }
  }
  