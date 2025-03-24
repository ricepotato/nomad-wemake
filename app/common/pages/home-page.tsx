import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { ProductCard } from "~/features/products/components/product-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { PostCard } from "~/features/community/components/post-card";
import { DotIcon, EyeIcon, HeartIcon } from "lucide-react";
import { IdeaCard } from "~/features/ideas/components/idea-card";

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id="productId"
            name="Product Name"
            description="Product Description"
            commentsCount={12}
            viewsCount={12}
            upvotesCount={120}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The latest discussions from our community
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        <PostCard
          id="postId"
          title="Discussion Title"
          author="ricepotato"
          authorAvatarUrl="https://github.com/ricepotato.png"
          category="Productivity"
          postedAt="12 hours ago"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Ideas GPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find Ideas for your next project
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <IdeaCard
            id="ideaId"
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus ex suscipit aliquid incidunt provident vel eius, sequi magnam officiis beatae dignissimos atque. Fugit maiores cum, vel sapiente veniam eaque dicta!"
            viewsCount={123}
            likesCount={123}
            postedAt="12 hours ago"
            claimed={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
