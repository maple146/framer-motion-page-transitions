import { setTransitionTypes } from "@/types/transitionTypes";

export default function LeftSideContent({ setTransition }: setTransitionTypes) {
    function handleChange() {
        setTransition(false)
    }

    return (
        <div className="bg-slate-800 h-[500px] w-[500px] flex flex-col justify-center items-center">
            <h1 className="text-white mb-2">Left side content</h1>
            <button
                className="text-white bg-orange-500 p-4"
                onClick={() => handleChange()}
            >
                Go to Right Side
            </button>
        </div>
    )
}
