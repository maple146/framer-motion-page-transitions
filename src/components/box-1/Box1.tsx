import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Dispatch, SetStateAction } from 'react';

interface Box1Type {
  title: string;
  transitionValue?: boolean;
  setTransition?: Dispatch<SetStateAction<boolean | undefined>>;
  enableButton?: boolean;
  buttonText?: string;
}

export default function Box1({
  title,
  enableButton,
  buttonText,
  transitionValue,
  setTransition,
}: Box1Type) {
  return (
    <Card className='h-[500px] w-[500px] flex flex-col justify-center items-center bg-light-yellow'>
      <h1 className='text-black mb-2'>{title}</h1>
      {enableButton && (
        <Button onClick={() => setTransition?.(!transitionValue)}>
          {buttonText}
        </Button>
      )}
    </Card>
  );
}
