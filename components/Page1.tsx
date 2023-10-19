import React from 'react'
import Image from 'next/image'
import { h1Styles } from '@/pages'

const Page1 = () => {
    return (
        <div className='flex flex-col h-screen bg-[#1F1D26] justify-center'>
            <div className='ml-32 flex flex-col h-screen justify-center'>
                <Image
                    src="/cashless.svg"
                    alt="Cashless Logo"
                    width={280}
                    height={84}
                    priority
                />
                <h1 className="text-[160px] font-bold" >Card</h1>
                <h1 className="mt-[-40px] text-[160px] font-bold" style={h1Styles}>Presentation</h1>
                <h1>Example Heading</h1>
                <div className="absolute bottom-10 right-10">
                    <Image
                        src="/cashless.svg"
                        alt="Cashless Logo"
                        className="dark:invert"
                        width={120}
                        height={84}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default Page1