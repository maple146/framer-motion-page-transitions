"use client"
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import LeftContent from "@/components/left-to-right/LeftContent";
import RightContent from "@/components/left-to-right/RightContent";

const animationToRight = {
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
                                key={'left-section'}
                                variants={animationToRight}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <LeftContent setTransition={setTransition} />
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
                                key={'right-section'}
                                variants={animationToRight}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <RightContent />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.main>
        </MotionConfig>
    )
}
