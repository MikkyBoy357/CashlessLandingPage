import React from 'react'
import Image from 'next/image'
import { h1Styles } from '@/pages'

// Application intégrés de gestion d'événements : gérez toutes les entrées avec des Wristband NFC et des lecteurs longue portée

// Permettez à vos clients d’offrir des chèques-cadeaux numériques sans manipulation d'argent liquide
// Gestion du personnel
// Garantir un flux d'entrée fluide
// Obtenez un aperçu en temps réel du nombre exact de festivaliers sur le site

const Page4 = () => {
    return (
        <div className='flex flex-col bg-[#1F1D26] text-primary'>
            <div className='flex flex-col px-10 pt-16'>
                {/* <Image
                    className='mr-10 align-right self-end'
                    src="/cashless.svg"
                    alt="Cashless Logo"
                    width={200}
                    height={84}
                    priority
                /> */}
                <h1 className="mb-[20px] text-[60px] font-bold text" style={h1Styles}>Restaurants, magasins, <br />supermarket, station service +</h1>

            </div>
            <div className='flex flex-row h-screen bg-[#1F1D26]'>
                <div className="w-1/2 pl-4 bg-[rgb(31,29,38)]">
                    <div className="pl-20 pr-34 bg-[#1F1D26] h-screen flex">
                        <div className='flex-col'>

                            <div className='flex flex-row'>
                                <div className='mr-10 p-4 border-dashed border-2 border-black'>
                                    <Image
                                        className='mr-10'
                                        src="/ticket_white.svg"
                                        alt="Cashless Logo"
                                        width={150}
                                        height={84}
                                        priority
                                    />

                                </div>
                                <div className='text-xs'>
                                    <h1 className='mb-5 text-sm font-semibold'>Avantages et fonctionnalités des cartes de consommation décentralisées :</h1>
                                    <h1 className='text-sm font-semibold'>Avantages pour les entreprises :</h1>
                                    <li>1. Fidélisation des clients grâce au solde restant sur les cartes.</li>
                                    <li>2. Augmentation du chiffre d'affaires grâce à des clients plus fidèles et récurrents.</li>
                                    <li>3. Possibilité d'offrir des promotions exclusives et des programmes de fidélité.</li>
                                    <li>4. Contrôle des flux d'argent dans les restaurants ou commerces à grande superficie.</li>
                                    <li>5. Collecte de données marketing pour mieux comprendre les préférences des clients.</li>
                                    <li>6. Confidentialité et sécurité des informations assurées.</li>

                                    <h1 className='mt-5 text-sm font-semibold'>Fonctionnalités pour les clients :</h1>
                                    <li>1. Utilisation pratique et facile pour effectuer des paiements sans friction.</li>
                                    <li>2. Possibilité de conserver un solde restant sur la carte pour des achats futurs.</li>
                                    <li>3. Paiement rapide et facile, idéal pour les restaurants ou les stations-service.</li>
                                    <li>4. Accès à des promotions exclusives et des avantages de fidélité.</li>
                                    <li>5. Confiance dans la sécurité et la confidentialité des informations personnelles.</li>
                                </div>
                            </div>
                            <h1 className='mt-10 mb-10 ml-10'>{">> Carte de consommation (ou fidélité) "}</h1>
                            <div className='flex flex-row'>
                                <div className='flex flex-row mr-10 px-10 border-dashed border-2 border-black gap-10'>
                                    <Image
                                        className='mr-10'
                                        src="/cashless_card.svg"
                                        alt="Cashless Logo"
                                        width={150}
                                        height={84}
                                        priority
                                    />

                                </div>
                                <div>
                                    <h1 className='mb-5'>Application intégrés de gestion d'événements : gérez <br />toutes les entrées avec des Wristband NFC et des <br />lecteurs longue portée</h1>
                                    <li>Permettez à vos clients d'offrir des chèques-cadeaux numériques sans manipulation d'argent liquide</li>
                                    <li>Éliminer la fraude aux billets</li>
                                    <li>Garantir un dlux d'entrées fluide</li>
                                    <li>Obtenez un aperçu en temps réel du nombre exact de festivaliers <br />sur le site</li>
                                </div>
                            </div>
                            <h1 className='mt-10 mb-10 ml-10'>{">> Chèque cadeau"}</h1>


                        </div>

                    </div>
                </div>
                <div className="w-1/2 pl-4 bg-[rgb(31,29,38)] relative">
                    <div className="pl-5 pr-10 bg-[#1F1D26] h-screen flex">
                        <div className='flex-col'>

                            <div className='flex flex-row'>
                                <div className='mr-10 p-4 border-dashed border-2 border-black'>
                                    <Image
                                        className='mr-10'
                                        src="/pos.svg"
                                        alt="Cashless Logo"
                                        width={150}
                                        height={84}
                                        priority
                                    />

                                </div>
                                <div className=''>
                                    <h1 className='mb-5'>Dispositifs de paiement exclusifs à l'événement ou <br />à l'organisateur, configuration du système <br />hautement personnalisable</h1>
                                    <li>Chaque transaction est stockée sur les cartes, les terminaux et le serveur afin d'éviter la perte de données</li>
                                    <li>Large gamme de dispositifs de paiement (bracelets NFC, cartes NFC, plaques d'identité)</li>
                                    <li>Une transaction ne prend que 2 secondes</li>
                                    <li>Le fonctionnement semi-en ligne garantit un disponibilité à 100% quel que soit l'état du reseau</li>
                                    <li>Possibilité d'intégration avec votre POS ou sur notre offre POS</li>
                                </div>
                            </div>
                            <h1 className='mt-10 mb-10 ml-10'>{">> Cashless Payment (POS)"}</h1>
                            <div className='flex flex-row'>
                                <div className='flex flex-row mr-10 px-10 border-dashed border-2 border-black gap-10'>
                                    <Image
                                        className='mr-5'
                                        src="/cashless_card_black.svg"
                                        alt="Cashless Logo"
                                        width={150}
                                        height={84}
                                        priority
                                    />

                                </div>
                                <div>
                                    <h1 className='mb-5'>Déclinaison des cartes de consommation en cartes<br />d'accès</h1>
                                    <li>Offrez des accès VIP à vos clients</li>
                                    <li>Rationalisez le flux d'entrée vers des zones spécifiques</li>
                                    <li>Gestion du personnel</li>
                                    <li>Garantir un dlux d'entrées fluide</li>
                                    <li>Obtenez un aperçu en temps réel du nombre exact de clients lors d'évènement</li>
                                </div>
                            </div>
                            <h1 className='mt-10 mb-10 ml-10'>{">> Gestion des accès (Membre VIP ou Accès personnalisé)"}</h1>


                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

// Garantir un flux d'entrée fluide Obtenez un aperçu en temps réel du nombre exact de clients lors d’évènements

export default Page4