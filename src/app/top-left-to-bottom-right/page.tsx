"use client"
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import TopLeftContent from "@/components/top-left-to-bottom-right/TopLeftContent";
import BottomRightContent from "@/components/top-left-to-bottom-right/BottomRightContent";


const animationToBottomRight = {
    initial: {
        x: 1000,
        y: 1000,
        opacity: 0,
    },
    target: {
        x: 0,
        y: 0,
        opacity: 1,
    },
    exit: {
        x: -1000,
        y: -1000,
        opacity: 0,
    },
};

export default function TopLeftToBottomRight() {
    const [transition, setTransition] = useState<boolean | null>(null)

    return (
        <MotionConfig transition={{ duration: 3 }}>
            <motion.main
                className="flex min-h-screen flex-col items-center justify-center overflow-hidden"
                style={{ contain: 'paint' }} // This fixes the overflow caused by elements moving from top to bottom.
            >
                <AnimatePresence
                    mode='popLayout'
                    initial={false}
                >
                    {
                        !transition && (
                            <motion.div
                                key={'top-section'}
                                variants={animationToBottomRight}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <TopLeftContent setTransition={setTransition} />
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
                                variants={animationToBottomRight}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <BottomRightContent />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.main>
        </MotionConfig>
    )
}
