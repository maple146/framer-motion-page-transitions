"use client"
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import BottomContent from "@/components/btt/BottomContent";
import TopContent from "@/components/btt/TopContent";

const animationToTop = {
    initial: {
        y: -1000,
        opacity: 0,
    },
    target: {
        y: 0,
        opacity: 1,
    },
    exit: {
        y: 1000,
        opacity: 0,
    },
};

export default function BottomToTop() {
    const [transition, setTransition] = useState<boolean | null>(null)

    return (
        <MotionConfig transition={{ duration: 3 }}>
            <motion.main
                className="flex min-h-screen flex-col items-center justify-center overflow-hidden"
                style={{ contain: 'paint' }} // This fixes the overflow caused by elements moving from bottom to top.
            >
                <AnimatePresence
                    mode='popLayout'
                    initial={false}
                >
                    {
                        !transition && (
                            <motion.div
                                key={'bottom-section'}
                                variants={animationToTop}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <BottomContent setTransition={setTransition} />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
                <AnimatePresence
                    mode='popLayout'
                >
                    {
                        transition && (
                            <motion.div
                                key={'top-section'}
                                variants={animationToTop}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <TopContent />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.main>
        </MotionConfig>
    )
}
