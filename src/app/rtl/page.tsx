"use client"
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import RightSideContent from "@/components/rtl/RightSideContent";
import LeftSideContent from "@/components/rtl/LeftSideContent";

const animationsToLeftSide = {
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
                                key={'right-side'}
                                variants={animationsToLeftSide}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <RightSideContent setTransition={setTransition} />
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
                                key={'left-side'}
                                variants={animationsToLeftSide}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <LeftSideContent />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.main>
        </MotionConfig>
    )
}
