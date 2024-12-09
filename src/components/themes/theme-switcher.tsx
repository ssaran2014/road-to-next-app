'use client';

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { LucideSun, LucideMoon } from "lucide-react";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <Button size="icon" onClick={toggleTheme} variant={"outline"}>
            <LucideSun 
                className="h-4 w-4 rotate-0 scale-100 transition-all
                dark:-rotate-90 dark:scale-0" />
            <LucideMoon 
                className="absolute h-4 w-4 rotate-90 scale-0 transition-transform
                dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle Theme</span>
        </Button>
    );
};

export { ThemeSwitcher };