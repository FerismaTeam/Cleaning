'use client'

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const AutoScrollToTop = () => {

    const path = usePathname();

    useEffect(() => {

        window.scrollTo({ top: 0, behavior: "instant" })

    }, [path])

    return null;
}

export default AutoScrollToTop;