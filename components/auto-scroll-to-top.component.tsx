'use client'

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const AutoScrollToTop = () => {

    const path = usePathname();

    useEffect(() => {

        if (window.location.hash) return;

        window.scrollTo({ top: 0, behavior: "instant" })

    }, [path])

    return <span></span>;
}

export default AutoScrollToTop;