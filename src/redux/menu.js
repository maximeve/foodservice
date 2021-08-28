import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: {
      asian: [
        {
          description: "Chicken broth, eggs, ginger, green onions",
          name: "Egg Wonton Mix Soup",
          price: "5€",
          picture:
            "https://149370792.v2.pressablecdn.com/wp-content/uploads/2020/11/Wonton-Egg-Drop-Soup-Recipe-9.jpeg",
        },
        {
          description: "Rice, Green pepper",
          name: "Vegetable Fried Rice",
          price: "6€",
          picture:
            "https://149370792.v2.pressablecdn.com/wp-content/uploads/2020/11/Wonton-Egg-Drop-Soup-Recipe-9.jpeg",
        },
        {
          description: "Pork, seasoning, noodles",
          name: "Roast Pork Ho Fun",
          price: "8€",
          picture:
            "https://149370792.v2.pressablecdn.com/wp-content/uploads/2020/11/Wonton-Egg-Drop-Soup-Recipe-9.jpeg",
        },
        {
          description: "Beef, bean sprouts",
          name: "Beef with Bean Sprouts",
          price: "5€",
          picture:
            "https://149370792.v2.pressablecdn.com/wp-content/uploads/2020/11/Wonton-Egg-Drop-Soup-Recipe-9.jpeg",
        },
        {
          description: "Shrimp, black beans",
          name: "Shrimp with Black Bean Sauce",
          price: "7€",
          picture:
            "https://149370792.v2.pressablecdn.com/wp-content/uploads/2020/11/Wonton-Egg-Drop-Soup-Recipe-9.jpeg",
        },
        {
          description: "Red pepper, green pepper",
          name: "Steamed Mixed Vegetables",
          price: "4€",
          picture:
            "https://149370792.v2.pressablecdn.com/wp-content/uploads/2020/11/Wonton-Egg-Drop-Soup-Recipe-9.jpeg",
        },
      ],
      italian: [
        {
          description: "Mozzarella, dough",
          name: "Mozzarella Sticks (6 Pcs)",
          price: "5€",
          picture:
            "https://149370792.v2.pressablecdn.com/wp-content/uploads/2020/11/Wonton-Egg-Drop-Soup-Recipe-9.jpeg",
        },
        {
          description: "Garlic, dough",
          name: "Garlic Bread with Cheese",
          price: "6€",
          picture:
            "https://149370792.v2.pressablecdn.com/wp-content/uploads/2020/11/Wonton-Egg-Drop-Soup-Recipe-9.jpeg",
        },
        {
          description: "Pepperoni, cheese, tomato sauce",
          name: "Sicilian Pizza",
          price: "12€",
          picture:
            "https://149370792.v2.pressablecdn.com/wp-content/uploads/2020/11/Wonton-Egg-Drop-Soup-Recipe-9.jpeg",
        },
        {
          description: "Pineapple, dough",
          name: "awaiian Special Pizza",
          price: "11€",
          picture:
            "https://149370792.v2.pressablecdn.com/wp-content/uploads/2020/11/Wonton-Egg-Drop-Soup-Recipe-9.jpeg",
        },
        {
          description:
            "Red onions, chicken, fresh parsley, olive oil and no sauce",
          name: "Bruschetta Pizza Pie",
          price: "12€",
          picture:
            "https://149370792.v2.pressablecdn.com/wp-content/uploads/2020/11/Wonton-Egg-Drop-Soup-Recipe-9.jpeg",
        },
        {
          description: "Chicken, bacon, ranch and tomatoes",
          name: "Chicken Florentina Pizza",
          price: "14€",
          picture:
            "https://149370792.v2.pressablecdn.com/wp-content/uploads/2020/11/Wonton-Egg-Drop-Soup-Recipe-9.jpeg",
        },
      ],
    },
  },
  reducers: {
  },
});

// Action creators are generated for each case reducer function
export const { addcart, removecart } = menuSlice.actions;

export default menuSlice.reducer;
