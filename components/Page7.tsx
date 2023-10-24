import React from 'react'
import Image from 'next/image'
import { h1Styles } from '@/pages'

const Page7 = () => {
    return (
        <div className='flex flex-col px-20 pt-16 text-primary h-screen bg-[#1F1D26] relative justify-between'>
            <div className='flex flex-col justify-between'>
                {/* <Image
                    className='align-right self-end'
                    src="/cashless.svg"
                    alt="Cashless Logo"
                    width={200}
                    height={84}
                    priority
                /> */}
                <h1 className="mt-[30px] mb-[0px] text-[100px] font-bold text" style={h1Styles}>Expérience client</h1>



            </div>

            <div className='flex flex-wrap mt-20 justify-between gap-10 relative'>
                <div className='self-end'>
                    <Image
                        className='self-center'
                        src="/confiances/phone.png"
                        alt="Cashless Logo"
                        width={300}
                        height={84}
                        priority
                    />
                </div>

                <div className='flex flex-row mb-24'>
                    <Image
                        className='self-center'
                        src="/confiances/legs.svg"
                        alt="Cashless Logo"
                        width={280}
                        height={84}
                        priority
                    />
                    <Image
                        className='self-center'
                        src="/confiances/offrez.svg"
                        alt="Cashless Logo"
                        width={280}
                        height={84}
                        priority
                    />
                </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex p-20 border-dashed border-2 border-[#35343C] justify-center">
                    <Image
                        src="/confiances/payment_methods.svg"
                        alt="Cashless Logo"
                        width={200}
                        height={84}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default Page7