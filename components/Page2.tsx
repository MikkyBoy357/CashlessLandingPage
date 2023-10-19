import React from 'react'
import Image from 'next/image'
import { h1Styles } from '@/pages'

const Page2 = () => {
    return (
        <div className="flex justify-center">
            <div className="w-1/2 pl-4 bg-[#1F1D26]">
                <div className="pl-32 pr-64 bg-[#1F1D26] h-screen flex items-center justify-center">
                    <div className='flex-col'>
                        <h1 className="mb-[-40px] text-[120px] font-bold" style={h1Styles}>Cashless</h1>
                        <h1 className='mb-10'>
                            Découvrez Cashless Card : une carte de paiement décentralisée innovante utilisant la technologie NFC pour des transactions rapides et sécurisées. Cette solution est spécialement conçue pour répondre aux besoins de plusieurs secteurs tels que les restaurants, les festivals, les grandes surfaces et les stations-service.
                        </h1>
                        <h1>
                            Elle permet aux clients de payer rapidement et facilement avec une seule carte auprès d'un commerçant spécifique. Cashless Card offre une intégration aisée grâce à son application mobile marchand, dashboard web et API flexible (en cours de développement). Simplifiez vos paiements et bénéficiez d'une expérience utilisateur transparente et sécurisée dans divers secteurs avec Cashless Card dès aujourd'hui !
                        </h1>

                    </div>

                </div>
            </div>
            <div className="w-1/2">
                <div className="pl-32 pr-10 pt-20 bg-[#1F1D26] h-screen flex justify-center">
                    <div className='flex-col'>
                        <h1 className="mb-[-40px] text-[120px] font-bold" style={h1Styles}>Festivals</h1>
                        <h1 className="mb-[0px] text-[60px] font-bold" style={h1Styles}>Restaurants, <br />magasins, <br />supermarket, station service +</h1>
                        <h1 className="mb-[0px] text-[45px] font-bold" style={h1Styles}>Support soft & hardware</h1>
                        <h1 className="mb-[0px] text-[60px] font-bold" style={h1Styles}>Expérience client</h1>
                        <Image
                            src="/advantage.svg"
                            alt="Cashless Logo"
                            width={200}
                            height={84}
                            priority
                        />
                        <Image
                            src="/cashless_box.svg"
                            alt="Cashless Logo"
                            width={200}
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

export default Page2