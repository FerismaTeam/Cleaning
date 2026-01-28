"use client";

import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

const Counter: React.FC<{ end: number; suffix?: string }> = ({
    end,
    suffix = "",
}) => {
    
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const countUp = new CountUp(ref.current!, end, {
                        duration: 2,
                        suffix,
                    });
                    countUp.start();
                    observer.disconnect();
                }
            },
            { threshold: 0.6 },
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [end]);

    return <span ref={ref}>0</span>;
};

export default Counter;
