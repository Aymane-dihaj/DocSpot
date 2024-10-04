import React from 'react'
import { Button } from './button'
import Image from 'next/image'

interface BtnProps{
    isLoading: boolean,
    className?: string,
    children: React.ReactNode,
}

const SubmitButton = ({isLoading, className, children} : BtnProps) => {
  return (
    <Button type='submit' disabled={isLoading} className={className ?? 'shad-primary-btn w-full'}>
        {
            isLoading ? (
                <div className='flex items-center gap-4'>
                    <Image src={'/assets/icons/loader.svg'} width={20} height={20} alt='loading' className='animate-spin'/>
                </div>
            ) : children
        }
    </Button>
  )
}

export default SubmitButton
