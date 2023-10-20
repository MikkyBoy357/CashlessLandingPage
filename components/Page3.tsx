import { h1Styles } from '@/pages'
import React from 'react'
import Image from 'next/image'

const Page3 = () => {
    return (
        <div className='flex flex-row h-screen bg-[#1F1D26] text-primary'>
            <div className="w-6/10 pl-4 bg-[rgb(31,29,38)]">
                <div className="pl-20 pr-34 bg-[#1F1D26] h-screen flex items-center">
                    <div className='flex-col'>

                        <h1 className="mb-[-20px] text-[120px] font-bold" style={h1Styles}>Festivals</h1>
                        <div className='flex flex-row'>
                            <div className='mr-10 p-4 border-dashed border-2 border-black'>
                                <Image
                                    className='mr-10'
                                    src="/ticket_white.svg"
                                    alt="Cashless Logo"
                                    width={100}
                                    height={84}
                                    priority
                                />

                            </div>
                            <div className=''>
                                <h1 className='mb-5'>Gestion des tickets et des produits</h1>
                                <li>Ventes en ligne et physiques (QR Code par mail et SMS)</li>
                                <li>Accréditation billetterie professionnelle</li>
                                <li>Marketing, gestion de contenu</li>
                                <li>Gestion des stocks d'articles (bracelets)</li>
                                <li>Rapports et statistiques détaillés</li>
                            </div>
                        </div>
                        <h1 className='mt-10 mb-10 ml-10'>{">> Billeterie"}</h1>
                        <div className='flex flex-row'>
                            <div className='flex flex-row mr-10 px-10 border-dashed border-2 border-black gap-10'>
                                <Image
                                    className=''
                                    src="/wristband.svg"
                                    alt="Cashless Logo"
                                    width={100}
                                    height={84}
                                    priority
                                />
                                <Image
                                    className='mr-10'
                                    src="/cashless_card.svg"
                                    alt="Cashless Logo"
                                    width={100}
                                    height={84}
                                    priority
                                />

                            </div>
                            <div>
                                <h1 className='mb-5'>Application intégrés de gestion d'événements : gérez <br />toutes les entrées avec des Wristband NFC et des <br />lecteurs longue portée</h1>
                                <li>Rationalisez le flux d'entrées vers des zones spécifiques</li>
                                <li>Éliminer la fraude aux billets</li>
                                <li>Gestion du personnel</li>
                                <li>Garantir un dlux d'entrées fluide</li>
                                <li>Obtenez un aperçu en temps réel du nombre exact de festivaliers sur le site</li>
                            </div>
                        </div>
                        <h1 className='mt-10 mb-10 ml-10'>{">> Gestion des accès"}</h1>


                    </div>

                </div>
            </div>
            <div className="w-4/10 bg-white">
                <div className="pr-[64px] pt-[64px] bg-[#1F1D26] h-screen flex justify-end">
                    <div className='flex-col'>

                        <div className='mb-[0px] justify-end items-end'>
                            <Image
                                src="/cashless.svg"
                                alt="Cashless Logo"
                                width={200}
                                height={84}
                                priority
                            />
                        </div>
                        <h1 className="mb-[-20px] text-[120px] font-bold" style={h1Styles}>Festivals</h1>
                        <div className='flex flex-row'>
                            <div className='h-[180px] mr-10 p-4 border-dashed border-2 border-black'>
                                <Image
                                    className='mr-10'
                                    src="/pos.svg"
                                    alt="Cashless Logo"
                                    width={100}
                                    height={100}
                                    priority
                                />

                            </div>
                            <div>
                                <h1 className='mb-5'>Dispositifs de paiement exclusifs à l'événement ou <br />à l'organisateur, configuration du système <br />hautement personnalisable</h1>
                                <li>Chaque transaction est stockée sur les cartes, les terminaux et le serveur afin d'éviter la perte de données</li>
                                <li>Large gamme de dispositifs de paiement (bracelets NFC, cartes NFC, plaques d'identité)</li>
                                <li>Une transaction ne prend que 2 secondes</li>
                                <li>Le fonctionnement semi-en ligne garantit un disponibilité à 100% quel que soit l'état du reseau</li>
                                <li>Solutions integrées des gestions d'événements</li>
                            </div>
                        </div>
                        <h1 className='mt-10 mb-10 ml-10'>{">> Cashless Payment"}</h1>
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

export default Page3