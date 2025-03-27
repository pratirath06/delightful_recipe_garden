
import { Link } from "react-router-dom";
import { Clock, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";
import { Recipe } from "@/data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
  priority?: boolean;
}

export default function RecipeCard({ recipe, className, priority = false }: RecipeCardProps) {
  return (
    <Link 
      to={`/recipe/${recipe.slug}`} 
      className={cn(
        "recipe-card h-full group animate-fade-in hover-scale block",
        className
      )}
    >
      <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
        />
      </div>
      
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
            {recipe.category}
          </span>
          <div className="flex items-center gap-1 text-muted-foreground text-xs">
            <Clock className="w-3 h-3" />
            <span>{recipe.cookTime} min</span>
          </div>
        </div>
        
        <h3 className="font-serif font-medium text-lg line-clamp-1">
          {recipe.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2">
          {recipe.description}
        </p>
        
        <div className="pt-2 flex items-center gap-2 text-xs">
          <Utensils className="w-3 h-3 text-muted-foreground" />
          <span className="text-muted-foreground">
            {recipe.difficulty}
          </span>
        </div>
      </div>
    </Link>
  );
}
