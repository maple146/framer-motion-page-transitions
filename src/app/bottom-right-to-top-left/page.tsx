"use client"
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import BottomRightContent from "@/components/bottom-right-to-top-left/BottomRightContent";
import TopLeftContent from "@/components/bottom-right-to-top-left/TopLeftContent";

const animationToTopLeft = {
    initial: {
        x: -1000,
        y: -1000,
        opacity: 0,
    },
    target: {
        x: 0,
        y: 0,
        opacity: 1,
    },
    exit: {
        x: 1000,
        y: 1000,
        opacity: 0,
    },
};

export default function BottomRightToTopLeft() {
    const [transition, setTransition] = useState<boolean | null>(null)

    return (
        <MotionConfig transition={{ duration: 3 }}>
            <motion.main
                className="flex min-h-screen flex-col items-center justify-center overflow-hidden"
                style={{ contain: 'paint' }} // This fixes the overflow caused by elements moving from bottom right to top left.
            >
                <AnimatePresence
                    mode='popLayout'
                    initial={false}
                >
                    {
                        !transition && (
                            <motion.div
                                key={'bottom-section'}
                                variants={animationToTopLeft}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <BottomRightContent setTransition={setTransition} />
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
                                variants={animationToTopLeft}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <TopLeftContent />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.main>
        </MotionConfig>
    )
}
