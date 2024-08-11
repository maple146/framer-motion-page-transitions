"use client"
import { useState } from "react";
import { AnimatePresence, MotionConfig, Variants, motion } from 'framer-motion';
import LeftSideContent from "@/components/ltr/LeftSideContent";
import RightSideContent from "@/components/ltr/RightSideContent";

const animationsToRightSide = {
    initial: {
        x: 1000,
        opacity: 0,
    },
    target: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: -1000,
        opacity: 0,
    },
};

export default function LeftToRight() {
    const [transition, setTransition] = useState<boolean | null>(null)

    return (
        <MotionConfig transition={{ duration: 3 }}>
            <motion.main className="flex min-h-screen flex-col items-center justify-center overflow-hidden">
                <AnimatePresence
                    mode='popLayout'
                    initial={false}
                >
                    {
                        !transition && (
                            <motion.div
                                key={'left-side'}
                                variants={animationsToRightSide}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <LeftSideContent setTransition={setTransition} />
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
                                key={'right-side'}
                                variants={animationsToRightSide}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <RightSideContent />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.main>
        </MotionConfig>
    )
}
