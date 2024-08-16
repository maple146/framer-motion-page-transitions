"use client"
import { useState } from "react";
import { AnimatePresence, MotionConfig, Variants, motion } from 'framer-motion';
import TopContent from "@/components/vertical-back-and-forth/TopContent";
import BottomContent from "@/components/vertical-back-and-forth/BottomContent";

type Transition = true | false | null;

const verticalBackAndForthAnimation: Variants = {
    initial: (transition: Transition) => ({
        y: transition ? 1000 : -1000,
        opacity: 0,
    }),
    target: {
        y: 0,
        opacity: 1,
    },
    exit: (transition: Transition) => ({
        y: transition ? -1000 : 1000,
        opacity: 0,
    }),
};

export default function VerticalBackAndForth() {
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
                    custom={transition}
                >
                    {
                        !transition && (
                            <motion.div
                                key={'top-section'}
                                variants={verticalBackAndForthAnimation}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <TopContent setTransition={setTransition} />
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
                                key={'bottom-section'}
                                variants={verticalBackAndForthAnimation}
                                custom={transition}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <BottomContent setTransition={setTransition} />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.main>
        </MotionConfig>
    )
}
