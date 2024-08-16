"use client"
import { useState } from "react";
import { AnimatePresence, MotionConfig, Variants, motion } from 'framer-motion';
import RightSideContent from "@/components/rtl/RightSideContent";
import LeftSideContent from "@/components/rtl/LeftSideContent";

type Transition = true | false | null;

const animationRTL: Variants = {
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

export default function RightToLeft() {
    const [transition, setTransition] = useState<boolean | null>(null)

    return (
        <MotionConfig transition={{ duration: 3 }}>
            <motion.main
                id='testing'
                className="flex min-h-screen flex-col items-center justify-center overflow-hidden"
                style={{ contain: 'paint' }}
            >
                <AnimatePresence
                    mode='popLayout'
                    initial={false}
                    custom={transition}
                >
                    {
                        !transition && (
                            <motion.div
                                key={'right-side'}
                                variants={animationRTL}
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
                    custom={transition}
                >
                    {
                        transition && (
                            <motion.div
                                key={'left-side'}
                                variants={animationRTL}
                                custom={transition}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <LeftSideContent setTransition={setTransition} />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.main>
        </MotionConfig>
    )
}
