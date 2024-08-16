"use client"
import { useState } from "react";
import { AnimatePresence, MotionConfig, Variants, motion } from 'framer-motion';
import RightContent from "@/components/horizontal-back-and-forth/RightContent";
import LeftContent from "@/components/horizontal-back-and-forth/LeftContent";

type Transition = true | false | null;

const horizontalBackAndForthAnimation: Variants = {
    initial: (transition: Transition) => ({
        x: transition ? -1000 : 1000,
        opacity: 0,
    }),
    target: {
        x: 0,
        opacity: 1,
    },
    exit: (transition: Transition) => ({
        x: transition ? 1000 : -1000,
        opacity: 0,
    }),
};

export default function HorizontalBackAndForth() {
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
                    custom={transition}
                >
                    {
                        !transition && (
                            <motion.div
                                key={'right-section'}
                                variants={horizontalBackAndForthAnimation}
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
                    custom={transition}
                >
                    {
                        transition && (
                            <motion.div
                                key={'left-section'}
                                variants={horizontalBackAndForthAnimation}
                                custom={transition}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <LeftContent setTransition={setTransition} />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.main>
        </MotionConfig>
    )
}
