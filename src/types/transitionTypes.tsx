import { Dispatch, SetStateAction } from "react";

export interface setTransitionTypes {
    setTransition: Dispatch<SetStateAction<boolean | null>>;
}