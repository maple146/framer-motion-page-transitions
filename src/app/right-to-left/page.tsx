"use client"
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import Box2 from "@/components/box-2/Box2";
import Box1 from "@/components/box-1/Box1";

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
    const [transition, setTransition] = useState<boolean | undefined>(false)

    return (
        <MotionConfig transition={{ duration: 3 }}>
            <motion.main
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
                                <Box2
                                    title='Right section content'
                                    enableButton
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
                                key={'left-section'}
                                variants={animationToLeft}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <Box1 title='Left section content' />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.main>
        </MotionConfig>
    )
}
