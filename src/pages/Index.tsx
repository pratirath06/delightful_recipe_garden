
import { useState, useEffect } from "react";
import { getAllRecipes, getFeaturedRecipes, Recipe } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";
import { Search, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [featuredRecipes, setFeaturedRecipes] = useState<Recipe[]>([]);
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  
  useEffect(() => {
    // Simulate API fetch with a small delay
    const timer = setTimeout(() => {
      setFeaturedRecipes(getFeaturedRecipes());
      setAllRecipes(getAllRecipes());
      setFilteredRecipes(getAllRecipes());
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    let results = allRecipes;
    
    // Filter by category
    if (activeCategory !== "All") {
      results = results.filter(recipe => 
        recipe.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      results = results.filter(recipe => 
        recipe.title.toLowerCase().includes(lowerCaseQuery) || 
        recipe.description.toLowerCase().includes(lowerCaseQuery) ||
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(lowerCaseQuery)
        )
      );
    }
    
    setFilteredRecipes(results);
  }, [searchQuery, allRecipes, activeCategory]);
  
  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Desserts"];
  
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };
  
  return (
    <div className="min-h-screen page-transition">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Fresh ingredients"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-white/20 backdrop-blur-sm rounded-full mb-4">
            Discover Delicious Recipes
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
            Culinary Canvas
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Explore our collection of simple yet elegant recipes for every occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search for recipes..."
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-md"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <Button size="icon" className="bg-white text-foreground hover:bg-white/90">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Recipes */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-medium">Featured Recipes</h2>
            <Link to="/recipes" className="text-sm flex items-center hover:text-primary transition-colors">
              View all <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRecipes.length > 0 ? (
              featuredRecipes.map((recipe, index) => (
                <RecipeCard 
                  key={recipe.id} 
                  recipe={recipe} 
                  priority={index < 4}
                />
              ))
            ) : (
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="recipe-card h-full animate-pulse">
                  <div className="aspect-[4/3] bg-muted rounded-t-lg"></div>
                  <div className="p-4 space-y-2">
                    <div className="w-20 h-5 bg-muted rounded-full"></div>
                    <div className="w-full h-7 bg-muted rounded"></div>
                    <div className="w-full h-10 bg-muted rounded"></div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      
      {/* Category Filters */}
      <section className="py-6 border-t border-b">
        <div className="container-custom">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className="rounded-full transition-all"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recipe Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-serif text-2xl md:text-3xl font-medium mb-8">
            {searchQuery 
              ? `Search Results for "${searchQuery}"` 
              : activeCategory === "All" 
                ? "All Recipes" 
                : `${activeCategory} Recipes`}
          </h2>
          
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No recipes found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">Join Our Culinary Community</h2>
            <p className="text-muted-foreground mb-6">
              Get weekly recipe inspiration, cooking tips, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="bg-background" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
