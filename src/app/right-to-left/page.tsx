"use client"
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import RightContent from "@/components/right-to-left/RightContent";
import LeftContent from "@/components/right-to-left/LeftContent";

const animationToLeft = {
    initial: {
        x: -1000,
        opacity: 0,
    },
    target: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: 1000,
        opacity: 0,
    },
};

export default function RightToLeft() {
    const [transition, setTransition] = useState<boolean | null>(null)

    return (
        <MotionConfig transition={{ duration: 3 }}>
            <motion.main
                id='testing'
                className="flex min-h-screen flex-col items-center justify-center overflow-hidden"
                style={{ contain: 'paint' }} // This fixes the overflow caused by elements moving from right to left.
            >
                <AnimatePresence
                    mode='popLayout'
                    initial={false}
                >
                    {
                        !transition && (
                            <motion.div
                                key={'right-section'}
                                variants={animationToLeft}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <RightContent setTransition={setTransition} />
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
                                key={'left-section'}
                                variants={animationToLeft}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <LeftContent />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.main>
        </MotionConfig>
    )
}
