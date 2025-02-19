import { Dispatch, SetStateAction } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface Box2Types {
    title: string,
    transitionValue?: boolean;
    setTransition?: Dispatch<SetStateAction<boolean | undefined>>,
    enableButton?: boolean
}

export default function Box2({ title, transitionValue, setTransition, enableButton }: Box2Types) {
    return (
        <Card className="h-[500px] w-[500px] flex flex-col justify-center items-center bg-bittersweet">
            <h1 className="text-black mb-2">{title}</h1>
            {
                enableButton && (
                    <Button
                        variant='secondary'
                        onClick={() => setTransition?.(!transitionValue)}
                    >
                        Go to left section
                    </Button>
                )
            }
        </Card>
    )
}
