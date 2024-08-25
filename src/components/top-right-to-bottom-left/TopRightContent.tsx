import { setTransitionTypes } from "@/types/transitionTypes";

export default function TopRightContent({ setTransition }: setTransitionTypes) {
    return (
        <div className="bg-slate-800 h-[500px] w-[500px] flex flex-col justify-center items-center">
            <h1 className="text-white mb-2">Top right section content</h1>
            <button
                className="text-white bg-orange-500 p-4"
                onClick={
                    () => setTransition(true)
                }
            >
                Go to bottom left section
            </button>
        </div>
    )
}
