import React from 'react'
import Image from 'next/image'
import { h1Styles } from '@/pages'

const Page8 = () => {
    return (
        <div className='flex flex-col px-20 pt-16 h-screen bg-[#1F1D26] relative'>
            <div className='flex flex-col'>
                <Image
                    className='align-right self-end'
                    src="/cashless.svg"
                    alt="Cashless Logo"
                    width={200}
                    height={84}
                    priority
                />
                <h1 className="mt-[30px] mb-[0px] text-[100px] font-bold text" style={h1Styles}>Ils nous font confiance</h1>
                <Image
                    src="/keep_smile.svg"
                    alt="Cashless Logo"
                    width={120}
                    height={84}
                    priority
                />

                <div className='flex flex-wrap mt-20 justify-center gap-10'>
                    <div className='flex h-32 w-64 bg-black justify-center'>
                        <Image
                            className='self-center'
                            src="/confiances/ouidah_lounge.svg"
                            alt="Cashless Logo"
                            width={150}
                            height={84}
                            priority
                        />
                    </div>
                    <div className='flex h-32 w-64 bg-white justify-center'>
                        <Image
                            className='self-center'
                            src="/confiances/codebar.svg"
                            alt="Cashless Logo"
                            width={120}
                            height={84}
                            priority
                        />
                    </div>
                    <div className='flex h-32 w-64 bg-white justify-center'>
                        <Image
                            className='self-center'
                            src="/confiances/epitech.svg"
                            alt="Cashless Logo"
                            width={150}
                            height={84}
                            priority
                        />
                    </div>
                    <div className='flex h-32 w-64 bg-green-400 justify-center'>
                        <Image
                            className='self-center'
                            src="/confiances/chambres.svg"
                            alt="Cashless Logo"
                            width={150}
                            height={84}
                            priority
                        />
                    </div>
                    <div className='flex h-32 w-64 bg-white justify-center'>
                        <Image
                            className='self-center'
                            src="/confiances/kids_centurion.svg"
                            alt="Cashless Logo"
                            width={200}
                            height={84}
                            priority
                        />
                    </div>
                    <div className='flex h-32 w-64 bg-purple-700 justify-center'>
                        <Image
                            className='self-center'
                            src="/confiances/eden.svg"
                            alt="Cashless Logo"
                            width={150}
                            height={84}
                            priority
                        />
                    </div>
                    <div className='h-32 w-64 bg-[#ED905C]'></div>
                    <div className='flex h-32 w-64 bg-white justify-center'>
                        <Image
                            className='self-center'
                            src="/confiances/agro_business.svg"
                            alt="Cashless Logo"
                            width={120}
                            height={84}
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

export default Page8