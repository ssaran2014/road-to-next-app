"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { LucideLoaderCircle } from "lucide-react";

type SubmitButtonProps = {
    label: string;
};

const SubmitButton = ({label}: SubmitButtonProps) => {
    const { pending } = useFormStatus();

    return(
        <Button disabled={pending} type="submit">
        {
            pending && (
            <LucideLoaderCircle className="mr-2 h-4 w-4 animate-spin" />
        )}
        { label }
    </Button>
    );
};

export { SubmitButton };