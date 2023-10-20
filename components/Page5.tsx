import React from 'react'
import Image from 'next/image'
import { h1Styles } from '@/pages'

const Page5 = () => {
    return (
        <div className='flex flex-col text-primary px-20 pt-16 h-screen bg-[#1F1D26] overflow-x-hidden'>
            <div className='flex flex-col'>
                <Image
                    className='align-right self-end'
                    src="/cashless.svg"
                    alt="Cashless Logo"
                    width={200}
                    height={84}
                    priority
                />
                <h1 className="mb-[20px] text-[60px] font-bold text" style={h1Styles}>Support soft & hardware</h1>

            </div>
            <div className='flex flex-row mt-20 justify-evenly'>

                {/* Holding Phone */}
                <div className="relative">
                    {/* The first div */}
                    <div className='rotate-custom bg-[#825CD3] w-[400px] h-[300px]'></div>


                    {/* The second div stacked on top */}
                    <div className="absolute top-0 left-0 h-32 w-[400px] z-10">
                        {/* Content of the second div */}
                        <Image
                            className='absolute top-[-50px] right-[-130px]'
                            src="/holding_phone.png"
                            alt="Cashless Logo"
                            width={390}
                            height={400}
                            priority
                        />
                    </div>

                </div>

                <div className="relative">
                    {/* The Wristband and Card */}
                    <div className='rotate-custom bg-[#EDCD5C] w-[250px] h-[300px]'></div>


                    {/* The second div stacked on top */}
                    <div className="absolute top-0 left-0 h-[300px] w-[170px] z-10">
                        {/* Content of the second div */}
                        <Image
                            className='absolute bottom-[-70px] right-[0px]'
                            src="/wristband.svg"
                            alt="Cashless Logo"
                            width={170}
                            height={400}
                            priority
                        />
                    </div>
                    <div className="absolute top-0 left-0 h-[300px] w-[250px] z-10">
                        {/* Content of the second div */}
                        <Image
                            className='absolute top-[20px] right-[-25px]'
                            src="/cashless_card.svg"
                            alt="Cashless Logo"
                            width={200}
                            height={400}
                            priority
                        />
                    </div>

                </div>

                {/* POS Phone */}
                <div className="relative">
                    {/* The first div */}
                    <div className='rotate-custom bg-[#35343C] w-[350px] h-[300px]'></div>


                    {/* The second div stacked on top */}
                    <div className="absolute top-0 left-0 h-32 w-[800px] z-10">
                        {/* Content of the second div */}
                        <Image
                            className='absolute top-[-75px] left-[-100px]'
                            src="/pos_phone.png"
                            alt="Cashless Logo"
                            width={450}
                            height={450}
                            priority
                        />
                    </div>

                </div>
            </div>
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
    )
}

export default Page5