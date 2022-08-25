import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../config/api-config";

export const fetchRandomRecipes = createAsyncThunk(
  "recipe/fetchRandomRecipes",
  async () => {
    const response = await fetch(
      `${BASE_URL}/recipes/random${API_KEY}&tags=vegetarian&number=10`
    );
    const result = response.json();

    return result;
  }
);

export const fetchRecipesInfo = createAsyncThunk(
  "recipe/fetchRecipesInfo",
  async (id) => {
    const response = await fetch(
      `${BASE_URL}/recipes/${id}/information${API_KEY}&includeNutrition=false`
    );
    const result = response.json();
    return result;
  }
);

export const fetchInstructions = createAsyncThunk(
  "recipe/fetchInstructions",
  async (id) => {
    const response = await fetch(
      `${BASE_URL}/recipes/${id}/analyzedInstructions${API_KEY}`
    );
    const result = response.json();
    return result;
  }
);

export const searchRecipes = createAsyncThunk(
  "recipe/searchRecipes",
  async (text) => {
    const response = await fetch(
      `${BASE_URL}/recipes/random${API_KEY}&tags=${text}&number=10`
    );
    const result = response.json();

    return result;
  }
);

export const fetchCuisine = createAsyncThunk(
  "recipe/fetchCuisine",
  async (cuisine) => {
    const response = await fetch(
      `${BASE_URL}/recipes/complexSearch${API_KEY}&cuisine=${cuisine}&number=10`
    );
    const result = response.json();

    return result;
  }
);

const initialState = {
  recipesList: [],
  isLoading: false,
  ingredients: [],
  title: "",
  image: "",
  steps: [],
  isClicked: false,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.isClicked = !state.isClicked;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRandomRecipes.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchRandomRecipes.fulfilled, (state, action) => {
      state.isLoading = false;

      state.recipesList = action.payload.recipes;
    });

    builder.addCase(fetchRecipesInfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRecipesInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.ingredients = action.payload.extendedIngredients;
      state.title = action.payload.title;
      state.image = action.payload.image;
    });

    builder.addCase(fetchInstructions.fulfilled, (state, action) => {
      state.steps = action.payload[0].steps;
    });
    builder.addCase(searchRecipes.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(searchRecipes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recipesList = action.payload.recipes;
    });

    builder.addCase(fetchCuisine.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchCuisine.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recipesList = action.payload.results;
    });
  },
});

export const recipeAction = recipeSlice.actions;

export default recipeSlice;
