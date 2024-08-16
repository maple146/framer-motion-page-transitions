import { setTransitionTypes } from "@/types/transitionTypes";

export default function RightSideContent({ setTransition }: setTransitionTypes) {
    function handleChange() {
        setTransition(true)
    }

    return (
        <div className="bg-slate-700 h-[500px] w-[500px] flex flex-col justify-center items-center">
            <h1 className="text-white mb-2">Right side content</h1>
            <button
                className="text-white bg-orange-500 p-4"
                onClick={() => handleChange()}
            >
                Go to Left Side
            </button>
        </div>

    )
}
