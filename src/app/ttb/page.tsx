"use client"
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import BottomContent from "@/components/ttb/BottomContent";
import TopContent from "@/components/ttb/TopContent";

const animationToBottom = {
    initial: {
        y: 1000,
        opacity: 0,
    },
    target: {
        y: 0,
        opacity: 1,
    },
    exit: {
        y: -1000,
        opacity: 0,
    },
};

export default function TopToBottom() {
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
                                key={'top-section'}
                                variants={animationToBottom}
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
                >
                    {
                        transition && (
                            <motion.div
                                key={'bottom-section'}
                                variants={animationToBottom}
                                initial='initial'
                                animate='target'
                                exit='exit'
                            >
                                <BottomContent />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.main>
        </MotionConfig>
    )
}
