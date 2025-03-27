
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background page-transition">
      <div className="container-custom max-w-md text-center py-16 px-4">
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! We couldn't find the recipe you're looking for.
        </p>
        <Link to="/">
          <Button className="px-8">Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
