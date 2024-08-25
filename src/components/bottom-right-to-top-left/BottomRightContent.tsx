import { setTransitionTypes } from "@/types/transitionTypes";

export default function BottomRightContent({ setTransition }: setTransitionTypes) {
    return (
        <div className="bg-slate-800 h-[500px] w-[500px] flex flex-col justify-center items-center">
            <h1 className="text-white mb-2">Bottom right section content</h1>
            <button
                className="text-white bg-orange-500 p-4"
                onClick={
                    () => setTransition(true)
                }
            >
                Go to top left section
            </button>
        </div>
    )
}
