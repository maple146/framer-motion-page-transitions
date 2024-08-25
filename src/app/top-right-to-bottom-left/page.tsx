"use client"
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import TopRightContent from "@/components/top-right-to-bottom-left/TopRightContent";
import BottomLeftContent from "@/components/top-right-to-bottom-left/BottomLeftContent";


const animationToBottomLeft = {
    initial: {
        x: -1000,
        y: 1000,
        opacity: 0,
    },
    target: {
        x: 0,
        y: 0,
        opacity: 1,
    },
    exit: {
        x: 1000,
        y: -1000,
        opacity: 0,
    },
};

export default function TopRightToBottomLeft() {
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
                                key={'top-section'}
                                variants={animationToBottomLeft}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <TopRightContent setTransition={setTransition} />
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
                                key={'bottom-section'}
                                variants={animationToBottomLeft}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <BottomLeftContent />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.main>
        </MotionConfig>
    )
}
