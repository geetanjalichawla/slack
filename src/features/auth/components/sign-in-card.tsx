import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { SignInFlow } from '@/features/types'
import { Separator } from '@radix-ui/react-separator'
import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
interface SignInCardProps {
    setState: React.Dispatch<React.SetStateAction<SignInFlow>>
}
function SignInCard({setState}: SignInCardProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Card className='h-full w-full p-8'>
            <CardHeader className='px-0 pt-0'>
                Login to Continue
            </CardHeader>
            <CardDescription>
                Use your email or another service to continue
            </CardDescription>

            <CardContent className='space-y-5 px-0 pb-0 '>
                <form className='space-y-2.5'>
                    <Input
                        disabled={false}
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="Email"
                        type='email'
                        required
                    />

                    <Input
                        disabled={false}
                        value={password}
                        onChange = {(e) => { setPassword(e.target.value) }}
                        placeholder="Password"
                        type='password'
                        required
                    />
                    <Button className='w-full' size={'lg'} type='submit' disabled={false}>Continue</Button>
                </form>
                <Separator />

                <div className="flex flex-col space-y-2">
                    <Button
                        disabled={false}
                        onClick={() => { }}
                        variant={'outline'}
                        size={'lg'}
                        className='w-full relative'
                    >
                        <FcGoogle className='size-5 absolute  top-2.5 left-2.5' />
                        Continue with Google
                    </Button>

                    <Button
                        disabled={false}
                        onClick={() => { }}
                        variant={'outline'}
                        size={'lg'}
                        className='w-full relative'
                    >
                        <FaGithub className='size-5 absolute  top-2.5 left-2.5' />
                        Continue with Github
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Don&apos;t have an account? <Button onClick={() => setState('sign-up')} className='text-sm font-medium text-sky-500 p-0 m-0' variant={'link'} size={'sm'}>Sign Up</Button>
                </p>
            </CardContent>
        </Card>
    )
}

export default SignInCard