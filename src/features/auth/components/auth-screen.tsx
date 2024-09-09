"use client";

import { SignInFlow } from '@/features/types';
import React, { useState } from 'react'
import SignInCard from './sign-in-card';
import SignUpCard from './sign-up-card';

export default function AuthScreen() {
    const [state,setState]= useState<SignInFlow>("sign-in")
  return (
    <div className='w-full flex items-center justify-center bg-[#5C3B58] h-full'>
        <div className="md:h-auto md:w-[420px] ">

            {state=="sign-in" && <SignInCard  setState={setState}/>}
            {state=="sign-up" && <SignUpCard   setState={setState} />}
        </div>

    </div>

  )
}
