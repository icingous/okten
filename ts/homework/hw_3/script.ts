{
  type Product = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
  };

  type Cart = {
    id: number;
    userId: number;
    products?: Product[];
    total: number;
    discountedTotal: number;
    totalProducts: number;
    totalQuantity: number;
  };

  type Recipe = {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: string;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string;
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string;
  };

  const queryData = <T>(url: string): Promise<T> => {
    return fetch(url)
      .then((res) => {
        const { ok } = res;

        if (ok) {
          return res.json();
        }

        return null;
      })
      .then((res) => {
        const values = Object.values(res);

        return values[0] as T;
      });
  };

  document.addEventListener('DOMContentLoaded', async () => {
    const carts = await queryData<Cart[]>('https://dummyjson.com/carts');
    console.log(carts);
    const recipes = await queryData<Recipe[]>('https://dummyjson.com/recipes');
    console.log(recipes);
  });
}
