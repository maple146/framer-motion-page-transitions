"use client"
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import Box1 from "@/components/box-1/Box1";
import Box2 from "@/components/box-2/Box2";

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
    const [transition, setTransition] = useState<boolean | undefined>(false)

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
                                <Box1
                                    title='Left section content'
                                    enableButton
                                    buttonText='Go to right section'
                                    transitionValue={transition}
                                    setTransition={setTransition}
                                />
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
                                <Box2 title='Right section content' />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.main>
        </MotionConfig>
    )
}
