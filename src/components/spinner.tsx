import { LucideLoaderCircle } from "lucide-react";

const Spinner = () => {
    return (
        <div 
            role="status"
            className="flex-1 flex flex-col justify-center self-center"
        >
            <LucideLoaderCircle className="h-12 w-12 animate-spin"/>
        </div>
    );
};

export { Spinner };