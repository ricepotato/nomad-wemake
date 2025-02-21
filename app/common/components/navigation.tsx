import { Link } from "react-router";
import { Separator } from "./ui/separator";

export default function Navigation () {
    return (
        <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
            <div>
                <Link className="font-bold tracking-tighter text-lg" to="/">wemake</Link>
            </div>
            
        </nav>
    )
}