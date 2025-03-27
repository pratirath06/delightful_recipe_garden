
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Clock, Users, ChefHat, ChevronLeft, Printer, Share2 } from "lucide-react";
import { getRecipeBySlug, Recipe } from "@/data/recipes";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

export default function RecipePage() {
  const { slug } = useParams<{ slug: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    if (slug) {
      // Simulate API fetch with a small delay
      setLoading(true);
      const timer = setTimeout(() => {
        const foundRecipe = getRecipeBySlug(slug);
        if (foundRecipe) {
          setRecipe(foundRecipe);
          document.title = `${foundRecipe.title} | Culinary Canvas`;
        } else {
          navigate("/not-found");
        }
        setLoading(false);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [slug, navigate]);
  
  const handlePrintClick = () => {
    window.print();
  };
  
  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe?.title,
        text: recipe?.description,
        url: window.location.href,
      }).catch(err => console.error('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        toast({
          title: "Link copied!",
          description: "Recipe link copied to clipboard",
        });
      });
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }
  
  if (!recipe) {
    return null;
  }
  
  return (
    <div className="min-h-screen pt-20 page-transition">
      <div className="container-custom py-8">
        <Button 
          variant="ghost" 
          className="flex items-center mb-6 hover:bg-secondary/50" 
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Recipe Image & Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                {recipe.category}
              </span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold">
                {recipe.title}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl">
                {recipe.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Time</p>
                  <p className="font-medium">{recipe.totalTime} min</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Servings</p>
                  <p className="font-medium">{recipe.servings}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Difficulty</p>
                  <p className="font-medium">{recipe.difficulty}</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={recipe.image} 
                alt={recipe.title}
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" size="sm" onClick={handlePrintClick}>
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
              <Button variant="outline" size="sm" onClick={handleShareClick}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
            
            {/* Nutrition Facts */}
            {recipe.nutritionFacts && (
              <div className="p-5 border rounded-lg bg-card">
                <h3 className="font-serif font-medium text-lg mb-3">Nutrition Facts (per serving)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {recipe.nutritionFacts.calories && (
                    <div>
                      <p className="text-muted-foreground text-sm">Calories</p>
                      <p className="font-medium">{recipe.nutritionFacts.calories}</p>
                    </div>
                  )}
                  {recipe.nutritionFacts.protein && (
                    <div>
                      <p className="text-muted-foreground text-sm">Protein</p>
                      <p className="font-medium">{recipe.nutritionFacts.protein}g</p>
                    </div>
                  )}
                  {recipe.nutritionFacts.carbs && (
                    <div>
                      <p className="text-muted-foreground text-sm">Carbs</p>
                      <p className="font-medium">{recipe.nutritionFacts.carbs}g</p>
                    </div>
                  )}
                  {recipe.nutritionFacts.fat && (
                    <div>
                      <p className="text-muted-foreground text-sm">Fat</p>
                      <p className="font-medium">{recipe.nutritionFacts.fat}g</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Right Column - Ingredients & Instructions */}
          <div className="space-y-8">
            <div className="sticky top-24">
              <ScrollArea className="h-[calc(100vh-150px)]">
                <div className="pr-4 space-y-8">
                  {/* Ingredients */}
                  <div className="space-y-4">
                    <h2 className="font-serif text-2xl font-medium border-b pb-2">Ingredients</h2>
                    <ul className="space-y-2">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Instructions */}
                  <div className="space-y-4">
                    <h2 className="font-serif text-2xl font-medium border-b pb-2">Instructions</h2>
                    <ol className="space-y-4">
                      {recipe.instructions.map((instruction, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="bg-secondary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                            {index + 1}
                          </span>
                          <span>{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  
                  {/* Tips */}
                  {recipe.tips && recipe.tips.length > 0 && (
                    <div className="space-y-4">
                      <h2 className="font-serif text-2xl font-medium border-b pb-2">Chef's Tips</h2>
                      <ul className="space-y-2">
                        {recipe.tips.map((tip, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
