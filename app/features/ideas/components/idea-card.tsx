import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { DotIcon, EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface IdeaCardProps {
  id: string;
  title: string;
  viewsCount: number;
  likesCount: number;
  postedAt: string;
  claimed?: boolean;
}

export function IdeaCard({
  id,
  title,
  viewsCount,
  likesCount,
  postedAt,
  claimed,
}: IdeaCardProps) {
  return (
    <Card>
      <CardHeader className="bg-transparent hover:bg-card/50 transition-colors">
        <Link to={`/ideas/${id}`}>
          <CardTitle className="text-xl">
            <span
              className={cn(
                claimed && "blur-[6px] transition-all",
                "break-words"
              )}
            >
              {title}
            </span>
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="flex items-center text-sm">
        <div className="flex items-center gap-1">
          <EyeIcon className="w-4 h-4" />
          <span>{viewsCount}</span>
        </div>
        <DotIcon className="w-4 h-4" />
        <span>{postedAt}</span>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button>
          <HeartIcon className="w-4 h-4" />
          <span>{likesCount}</span>
        </Button>
        {!claimed ? (
          <Button asChild>
            <Link to={`/ideas/${id}`}>Claim idea now &rarr;</Link>
          </Button>
        ) : (
          <Button variant="outline" className="cursor-not-allowed">
            <LockIcon className="size-4"></LockIcon> Claimed
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
