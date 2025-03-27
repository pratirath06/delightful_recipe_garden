
import { Link } from "react-router-dom";
import { ChefHat, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-card">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <ChefHat className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-serif text-lg font-bold">Culinary Canvas</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Discover simple, delicious recipes that inspire creativity in the kitchen
              and bring joy to your table.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-serif font-medium text-base">Explore</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/category/breakfast" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Breakfast</Link>
              <Link to="/category/lunch" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Lunch</Link>
              <Link to="/category/dinner" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dinner</Link>
              <Link to="/category/desserts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Desserts</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-serif font-medium text-base">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for weekly recipe inspiration.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Culinary Canvas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
