A food item definition defines a food, and applies TFC style stats to it including decay, hunger, water, and nutrition. It is a file located under the subfolder food_items. It has the following properties:

ingredient: An Ingredient to which this food item definition applies to.
hunger: An integer (Default 4). Defines how much hunger this food restores. The player’s full hunger bar is equal to 20.
saturation: A number (Default 0.0). Defines how much saturation this food restores. Measured in the same units as hunger.
water: A number (Default 0.0). Defines how much water this food restores. The player’s full water bar is equal to 100.
decay_modifier: A number (Default 1.0). Defines how quickly this item decays. Higher values indicate faster decay, and thus shorter expiration times.
grain: A number (Default 0.0). Defines how much Grain nutrient this food adds.
fruit: A number (Default 0.0). Defines how much Fruit nutrient this food adds.
vegetables: A number (Default 0.0). Defines how much Vegetables nutrient this food adds.
protein: A number (Default 0.0). Defines how much Protein nutrient this food adds.
dairy: A number (Default 0.0). Defines how much Dairy nutrient this food adds.
Note: Typical values for nutrients are 0-2 for small items (fruits, vegetables), and 1-4 for larger items (breads, meats), and higher for meals. Note that nutrients should also scale with hunger: A 2 nutrient/4 hunger food is the same (nutritionally) as a 4 nutrient/8 hunger food.