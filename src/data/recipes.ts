
export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  cookTime: number;
  prepTime: number;
  totalTime: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  featured: boolean;
  ingredients: string[];
  instructions: string[];
  nutritionFacts?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
  };
  tips?: string[];
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Avocado & Poached Egg Toast",
    slug: "avocado-poached-egg-toast",
    description: "A simple yet delicious breakfast option featuring creamy avocado and perfectly poached eggs on toasted sourdough bread.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    cookTime: 10,
    prepTime: 5,
    totalTime: 15,
    servings: 2,
    difficulty: "Easy",
    category: "Breakfast",
    featured: true,
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "2 large eggs",
      "1 tbsp white vinegar",
      "Salt and black pepper to taste",
      "Red pepper flakes (optional)",
      "1 tbsp fresh lemon juice",
      "1 tbsp extra virgin olive oil",
      "Fresh herbs (chives, cilantro or parsley)"
    ],
    instructions: [
      "Fill a medium pot with water (about 3 inches deep) and bring to a simmer. Add vinegar.",
      "While water is heating, toast the sourdough bread until golden and crisp.",
      "In a bowl, mash the avocado with lemon juice, salt, and pepper.",
      "When water is simmering, create a gentle whirlpool and crack an egg into the center. Cook for 3 minutes for a runny yolk.",
      "Remove the poached egg with a slotted spoon and place on a paper towel to drain excess water. Repeat with the second egg.",
      "Spread the mashed avocado evenly on the toast slices.",
      "Top each toast with a poached egg, drizzle with olive oil, and season with salt, pepper, and red pepper flakes if desired.",
      "Garnish with fresh herbs and serve immediately."
    ],
    nutritionFacts: {
      calories: 420,
      protein: 15,
      carbs: 35,
      fat: 25
    },
    tips: [
      "For the perfect poach, use the freshest eggs possible.",
      "Add a teaspoon of vinegar to the poaching water to help the egg whites coagulate.",
      "Toast can be substituted with any bread of your choice.",
      "For extra flavor, add a sprinkle of feta cheese or a drizzle of hot sauce."
    ]
  },
  {
    id: "2",
    title: "Classic Beef Bourguignon",
    slug: "classic-beef-bourguignon",
    description: "A traditional French stew made with tender beef, red wine, mushrooms, and aromatic vegetables. Perfect for a cozy dinner.",
    image: "https://images.unsplash.com/photo-1608877907149-a5c32d147d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    cookTime: 180,
    prepTime: 30,
    totalTime: 210,
    servings: 6,
    difficulty: "Medium",
    category: "Dinner",
    featured: true,
    ingredients: [
      "3 lbs beef chuck, cut into 2-inch cubes",
      "8 oz bacon, diced",
      "2 large carrots, sliced",
      "1 large onion, diced",
      "2 cloves garlic, minced",
      "2 cups red wine (Burgundy preferred)",
      "2 cups beef stock",
      "1 tbsp tomato paste",
      "1 tsp thyme leaves",
      "1 bay leaf",
      "8 oz pearl onions, peeled",
      "8 oz mushrooms, quartered",
      "2 tbsp all-purpose flour",
      "2 tbsp butter",
      "Fresh parsley for garnish",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat the oven to 325°F (165°C).",
      "Season the beef with salt and pepper. In a large Dutch oven, cook the bacon over medium heat until crisp. Remove with a slotted spoon and set aside.",
      "In batches, brown the beef in the bacon fat on all sides. Remove and set aside.",
      "Add carrots and diced onion to the pot and cook until softened, about 5 minutes. Add garlic and cook for 1 minute more.",
      "Return the beef and bacon to the pot. Add the wine, beef stock, tomato paste, thyme, and bay leaf. Bring to a simmer.",
      "Cover and transfer to the oven. Cook for 2.5 to 3 hours, or until the beef is very tender.",
      "While the stew is cooking, prepare the mushrooms and pearl onions. In a skillet, sauté the mushrooms in butter until browned. Set aside.",
      "In the same skillet, add the pearl onions and cook until browned. Set aside.",
      "When the beef is tender, remove the pot from the oven. Place on stovetop over medium heat.",
      "In a small bowl, mash 2 tablespoons of butter with the flour to form a paste. Stir this into the stew to thicken the sauce.",
      "Add the mushrooms and pearl onions to the stew. Simmer for an additional 10-15 minutes.",
      "Adjust seasoning with salt and pepper. Remove bay leaf and garnish with chopped parsley before serving."
    ],
    nutritionFacts: {
      calories: 580,
      protein: 42,
      carbs: 15,
      fat: 30
    },
    tips: [
      "Use a good quality red wine that you would enjoy drinking.",
      "The stew can be made a day ahead as the flavors improve overnight.",
      "Serve with mashed potatoes, crusty bread, or buttered noodles.",
      "Freeze portions for up to 3 months for a quick meal option."
    ]
  },
  {
    id: "3",
    title: "Lemon Blueberry Pancakes",
    slug: "lemon-blueberry-pancakes",
    description: "Fluffy pancakes studded with fresh blueberries and brightened with lemon zest. A perfect weekend breakfast treat.",
    image: "https://images.unsplash.com/photo-1589019643679-9de69d57e9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    cookTime: 15,
    prepTime: 10,
    totalTime: 25,
    servings: 4,
    difficulty: "Easy",
    category: "Breakfast",
    featured: false,
    ingredients: [
      "2 cups all-purpose flour",
      "2 tbsp sugar",
      "1 tbsp baking powder",
      "1/2 tsp salt",
      "2 large eggs",
      "1 3/4 cups milk",
      "1/4 cup melted butter, plus more for cooking",
      "1 tsp vanilla extract",
      "Zest of 1 lemon",
      "1 cup fresh blueberries",
      "Maple syrup for serving",
      "Powdered sugar for dusting (optional)"
    ],
    instructions: [
      "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
      "In another bowl, beat the eggs, then add milk, melted butter, vanilla extract, and lemon zest. Mix well.",
      "Pour the wet ingredients into the dry ingredients and stir just until combined. Do not overmix; a few lumps are okay.",
      "Gently fold in the blueberries.",
      "Heat a griddle or large non-stick skillet over medium heat. Add a small amount of butter to coat the surface.",
      "Pour 1/4 cup of batter for each pancake onto the griddle. Cook until bubbles form on the surface and the edges look set, about 2-3 minutes.",
      "Flip and cook for another 1-2 minutes, until golden brown on both sides.",
      "Repeat with remaining batter, adding more butter to the griddle as needed.",
      "Serve warm with maple syrup and a dusting of powdered sugar if desired."
    ],
    nutritionFacts: {
      calories: 380,
      protein: 10,
      carbs: 54,
      fat: 14
    },
    tips: [
      "For extra fluffy pancakes, let the batter rest for 5 minutes before cooking.",
      "Fresh blueberries are best, but frozen can work too (no need to thaw).",
      "To keep pancakes warm while cooking batches, place in a 200°F oven on a baking sheet.",
      "Add a dollop of lemon-flavored yogurt for an extra tangy topping."
    ]
  },
  {
    id: "4",
    title: "Mediterranean Quinoa Salad",
    slug: "mediterranean-quinoa-salad",
    description: "A vibrant and nutritious salad featuring protein-rich quinoa, fresh vegetables, feta cheese, and a lemony dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    cookTime: 15,
    prepTime: 15,
    totalTime: 30,
    servings: 6,
    difficulty: "Easy",
    category: "Lunch",
    featured: true,
    ingredients: [
      "1 cup quinoa, rinsed",
      "2 cups water or vegetable broth",
      "1 English cucumber, diced",
      "1 pint cherry tomatoes, halved",
      "1 red bell pepper, diced",
      "1/2 red onion, finely chopped",
      "1/2 cup kalamata olives, pitted and halved",
      "1/2 cup feta cheese, crumbled",
      "1/4 cup fresh parsley, chopped",
      "1/4 cup fresh mint, chopped",
      "3 tbsp extra virgin olive oil",
      "2 tbsp fresh lemon juice",
      "1 clove garlic, minced",
      "1 tsp dried oregano",
      "Salt and pepper to taste"
    ],
    instructions: [
      "In a medium saucepan, combine quinoa and water or broth. Bring to a boil, then reduce heat to low, cover, and simmer for 15 minutes until liquid is absorbed.",
      "Remove from heat and let stand, covered, for 5 minutes. Fluff with a fork and transfer to a large bowl to cool.",
      "While quinoa is cooling, prepare the dressing by whisking together olive oil, lemon juice, garlic, oregano, salt, and pepper in a small bowl.",
      "Add cucumber, tomatoes, bell pepper, red onion, olives, parsley, and mint to the cooled quinoa.",
      "Pour the dressing over the salad and toss gently to combine.",
      "Fold in the feta cheese just before serving.",
      "Taste and adjust seasoning if necessary.",
      "Serve immediately or refrigerate for up to 2 days."
    ],
    nutritionFacts: {
      calories: 280,
      protein: 8,
      carbs: 32,
      fat: 14
    },
    tips: [
      "For best flavor, let the salad sit for at least 30 minutes before serving to allow the flavors to meld.",
      "Add grilled chicken or chickpeas for extra protein.",
      "This salad is great for meal prep and can be stored in the refrigerator for up to 3 days.",
      "For a vegan version, omit the feta cheese or substitute with a plant-based alternative."
    ]
  },
  {
    id: "5",
    title: "Chocolate Lava Cake",
    slug: "chocolate-lava-cake",
    description: "Decadent individual chocolate cakes with a gooey, molten chocolate center. A showstopping dessert that's surprisingly simple to make.",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    cookTime: 14,
    prepTime: 15,
    totalTime: 29,
    servings: 4,
    difficulty: "Medium",
    category: "Desserts",
    featured: true,
    ingredients: [
      "8 oz dark chocolate (70% cocoa), chopped",
      "10 tbsp unsalted butter",
      "3 large eggs",
      "3 large egg yolks",
      "1/4 cup granulated sugar",
      "1 tsp vanilla extract",
      "Pinch of salt",
      "2 tbsp all-purpose flour",
      "Butter and cocoa powder for ramekins",
      "Powdered sugar for dusting",
      "Vanilla ice cream for serving (optional)",
      "Fresh berries for garnish (optional)"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C). Butter four 6-ounce ramekins and dust with cocoa powder, tapping out excess.",
      "In a heatproof bowl set over a pan of simmering water (don't let the bowl touch the water), melt the chocolate and butter together, stirring occasionally until smooth. Remove from heat and let cool slightly.",
      "In a medium bowl, beat the eggs, egg yolks, sugar, vanilla, and salt with an electric mixer on high speed until thick and pale yellow, about 3 minutes.",
      "Gently fold the melted chocolate mixture into the egg mixture.",
      "Sift the flour over the batter and fold in gently just until combined.",
      "Divide the batter evenly among the prepared ramekins.",
      "Place the ramekins on a baking sheet and bake for 12-14 minutes until the sides are firm but the centers are still soft.",
      "Remove from oven and let stand for 1 minute.",
      "Run a knife around the edge of each cake, then invert onto serving plates.",
      "Dust with powdered sugar and serve immediately with vanilla ice cream and fresh berries if desired."
    ],
    nutritionFacts: {
      calories: 520,
      protein: 8,
      carbs: 42,
      fat: 38
    },
    tips: [
      "For best results, use high-quality dark chocolate.",
      "The cakes can be prepared ahead of time and refrigerated, then baked just before serving.",
      "Baking time is crucial - too long and you'll lose the molten center.",
      "For a flavor variation, add a teaspoon of espresso powder or orange zest to the batter."
    ]
  },
  {
    id: "6",
    title: "Thai Coconut Curry Soup",
    slug: "thai-coconut-curry-soup",
    description: "A fragrant and flavorful soup with tender chicken, vegetables, and aromatic herbs in a spicy coconut broth.",
    image: "https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    cookTime: 25,
    prepTime: 15,
    totalTime: 40,
    servings: 4,
    difficulty: "Medium",
    category: "Dinner",
    featured: false,
    ingredients: [
      "2 tbsp vegetable oil",
      "1 lb boneless, skinless chicken thighs, sliced",
      "1 onion, thinly sliced",
      "2 cloves garlic, minced",
      "1 tbsp fresh ginger, grated",
      "2-3 tbsp red curry paste (adjust to taste)",
      "4 cups chicken broth",
      "2 cans (14 oz each) coconut milk",
      "2 tbsp fish sauce",
      "1 tbsp brown sugar",
      "1 red bell pepper, sliced",
      "1 cup mushrooms, sliced",
      "1 cup snow peas, trimmed",
      "Juice of 1 lime",
      "Fresh cilantro, chopped",
      "Fresh basil leaves, torn",
      "Red chili slices for garnish (optional)",
      "Lime wedges for serving"
    ],
    instructions: [
      "Heat oil in a large pot over medium-high heat. Add chicken and cook until browned, about 5 minutes. Remove and set aside.",
      "In the same pot, add onion, garlic, and ginger. Sauté until fragrant, about 2 minutes.",
      "Add curry paste and cook for 1 minute, stirring constantly.",
      "Pour in chicken broth and coconut milk. Stir to combine.",
      "Add fish sauce and brown sugar. Bring to a simmer.",
      "Return the chicken to the pot and add bell pepper and mushrooms. Simmer for 10 minutes.",
      "Add snow peas and cook for an additional 3 minutes.",
      "Remove from heat and stir in lime juice.",
      "Taste and adjust seasoning if needed.",
      "Serve hot, garnished with cilantro, basil, and chili slices if desired. Serve with lime wedges on the side."
    ],
    nutritionFacts: {
      calories: 450,
      protein: 28,
      carbs: 15,
      fat: 32
    },
    tips: [
      "For a vegetarian version, substitute the chicken with tofu and use vegetable broth.",
      "Adjust the amount of curry paste to control the spice level.",
      "This soup can be made ahead and reheated - the flavors often improve the next day.",
      "For a thicker broth, reduce the amount of chicken broth by 1 cup."
    ]
  }
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find(recipe => recipe.slug === slug);
}

export function getFeaturedRecipes(): Recipe[] {
  return recipes.filter(recipe => recipe.featured);
}

export function getRecipesByCategory(category: string): Recipe[] {
  return recipes.filter(recipe => recipe.category.toLowerCase() === category.toLowerCase());
}

export function getAllRecipes(): Recipe[] {
  return recipes;
}
