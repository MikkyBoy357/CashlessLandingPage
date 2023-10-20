import React from 'react'
import Image from 'next/image'
import { h1Styles } from '@/pages'

const Page6 = () => {
    return (
        <div className='flex flex-col px-20 pt-16 h-screen text-primary bg-[#1F1D26] relative'>
            <div className='flex flex-col'>
                <Image
                    className='align-right self-end'
                    src="/cashless.svg"
                    alt="Cashless Logo"
                    width={200}
                    height={84}
                    priority
                />

                <div className='flex flex-wrap mt-20 justify-around gap-10'>
                    <div className='flex h-32 w-64 justify-center'>
                        <Image
                            className='self-center'
                            src="/cashless_box.svg"
                            alt="Cashless Logo"
                            width={250}
                            height={84}
                            priority
                        />
                    </div>
                    <div>
                        <div className='flex flex-col justify-start'>
                            <div className='flex mb-3 rounded-lg border border-white h-8 w-16 px-10 py-1 bg-[#ED5CAA] justify-center'>
                                1
                            </div>
                            <div className="w-96"><span className="text-white text-xl font-bold font-['Poppins'] uppercase leading-normal tracking-widest">Augmentation des revenus et </span><span className="text-green-400 text-xl font-bold font-['Poppins'] uppercase leading-normal tracking-widest">réduction des files d'attente </span><span className="text-white text-xl font-bold font-['Poppins'] uppercase leading-normal tracking-widest">grâce à des transactions plus rapides</span></div>
                        </div>
                        <div className='mt-16 flex flex-col justify-start'>
                            <div className='flex mb-3 rounded-lg border border-white h-8 w-16 px-10 py-1 bg-teal-300 justify-center'>
                                2
                            </div>
                            <div className="w-96 h-24"><span className="text-white text-xl font-bold font-['Poppins'] uppercase leading-normal tracking-widest">Les visiteurs ont tendance à dépenser plus de </span><span className="text-white text-4xl font-black font-['Poppins'] uppercase leading-10 tracking-widest">15 à</span><span className="text-white text-xl font-black font-['Poppins'] uppercase leading-normal tracking-widest"> </span><span className="text-green-400 text-4xl font-black font-['Poppins'] uppercase leading-10 tracking-widest">30 %</span></div>
                        </div>
                        <div className='mt-16 flex flex-col justify-start'>
                            <div className='flex mb-3 rounded-lg border border-white h-8 w-16 px-10 py-1 justify-center'>
                                3
                            </div>
                            <div className="w-96"><span className="text-white text-xl font-bold font-['Poppins'] uppercase leading-normal tracking-widest">Un environnement de paiement transparent, fournit des </span><span className="text-green-400 text-xl font-bold font-['Poppins'] uppercase leading-normal tracking-widest">revenus supplémentaires</span><span className="text-white text-xl font-bold font-['Poppins'] uppercase leading-normal tracking-widest"> à l'organisateur</span></div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='mt-16 flex flex-col justify-start'>
                            <div className='flex mb-3 rounded-lg border bg-violet-500 h-8 w-16 px-10 py-1 justify-center'>
                                4
                            </div>
                            <div className="w-96 h-24"><span className="text-white text-xl font-bold font-['Poppins'] uppercase leading-normal tracking-widest">Dispositifs de paiement hautement sécurisés, environnement de données </span><span className="text-green-400 text-xl font-bold font-['Poppins'] uppercase leading-normal tracking-widest">post et pré-contrôlé</span></div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="absolute bottom-0 left-0">
                <Image
                    src="/handbands.svg"
                    alt="Cashless Logo"
                    className="dark:invert"
                    width={600}
                    height={84}
                    priority
                />
            </div>
        </div>
    )
}

export default Page6