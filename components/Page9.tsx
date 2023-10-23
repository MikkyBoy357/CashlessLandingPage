import React from 'react'
import Image from 'next/image'
import { h1Styles } from '@/pages'

const Page9 = () => {
    return (
        <div className='flex flex-col px-20 pt-16 text-primary h-screen bg-[#1F1D26] relative'>
            <div className='flex flex-col'>
                <Image
                    className='align-right self-end'
                    src="/cashless.svg"
                    alt="Cashless Logo"
                    width={200}
                    height={84}
                    priority
                />
                <h1 className="mt-[30px] mb-[30px] text-[120px] font-bold text" style={h1Styles}>Contact</h1>
                <h1 className='font-bold text-[#7B7A84] text-[90px]'>+229 62 60 63 33</h1>
                <h1 className='font-bold text-[#7B7A84] text-[90px]'>batchomartin2015@gmail.com</h1>

            </div>

            <div className="absolute bottom-10 right-10">
                <Image
                    src="/keep_smile.svg"
                    alt="Cashless Logo"
                    width={120}
                    height={84}
                    priority
                />
            </div>
        </div>
    )
}

export default Page9