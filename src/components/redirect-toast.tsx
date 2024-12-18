"use client";

import { usePathname } from "next/navigation";
import { deleteCookie, getCookieByKey } from "@/actions/cookies";
import { useEffect } from "react";
import { toast } from "sonner";

const RedirectToast = () => {
    const pathname = usePathname();
    useEffect(() => {
        const showCookieToast = async () => {
            const message = await getCookieByKey("toast");

            if (message) {
                toast.success(message);
                deleteCookie("toast");
            }
        }
        showCookieToast();
    }, [pathname]);
    return null;
};

export { RedirectToast };