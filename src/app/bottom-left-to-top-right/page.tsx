"use client"
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import BottomLeftContent from "@/components/bottom-left-to-top-right/BottomLeftContent";
import TopRightContent from "@/components/bottom-left-to-top-right/TopRightContent";

const animationToTopRight = {
    initial: {
        x: 1000,
        y: -1000,
        opacity: 0,
    },
    target: {
        x: 0,
        y: 0,
        opacity: 1,
    },
    exit: {
        x: -1000,
        y: 1000,
        opacity: 0,
    },
};

export default function BottomLeftToTopRight() {
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
                                variants={animationToTopRight}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <BottomLeftContent setTransition={setTransition} />
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
                                variants={animationToTopRight}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <TopRightContent />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.main>
        </MotionConfig>
    )
}
