'use client'
import { useState } from 'react'
import { AnimatePresence, MotionConfig, Variants, motion } from 'framer-motion'
import Box1 from '@/components/box-1/Box1'
import Box2 from '@/components/box-2/Box2'

type Transition = true | false | null

const diagonalBackAndForthAnimation: Variants = {
  initial: (transition: Transition) => ({
    x: transition ? -1000 : 1000,
    y: transition ? 1000 : -1000,
    opacity: 0,
  }),
  target: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: (transition: Transition) => ({
    x: transition ? 1000 : -1000,
    y: transition ? -1000 : 1000,
    opacity: 0,
  }),
}

export default function DiagonalBackAndForth() {
  const [transition, setTransition] = useState<boolean | undefined>(false)

  return (
    <MotionConfig transition={{ duration: 3 }}>
      <motion.main
        className='flex min-h-screen flex-col items-center justify-center overflow-hidden'
        style={{ contain: 'paint' }} // This fixes the overflow caused by elements moving from bottom to top.
      >
        <AnimatePresence mode='popLayout' initial={false} custom={transition}>
          {!transition && (
            <motion.div
              key={'top-right-section'}
              variants={diagonalBackAndForthAnimation}
              initial='initial'
              animate='target'
              exit='exit'
            >
              <Box1
                title='Top right section content'
                enableButton
                buttonText='Go to bottom left section'
                transitionValue={transition}
                setTransition={setTransition}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode='popLayout' custom={transition}>
          {transition && (
            <motion.div
              key={'bottom-left-section'}
              variants={diagonalBackAndForthAnimation}
              custom={transition}
              initial='initial'
              animate='target'
              exit='exit'
            >
              <Box2
                title='Bottom left section content'
                enableButton
                buttonText='Go to top right section'
                transitionValue={transition}
                setTransition={setTransition}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.main>
    </MotionConfig>
  )
}
