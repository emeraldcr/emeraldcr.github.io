// components/Menu.js
import React from 'react'
import Link from 'next/link'

const Menu = () => {
    return (
        <nav className="flex items-center justify-center  p-20">
            <ul className="flex space-x-6">
                <li>
                    <Link href="/" className="font-mono font-bold text-lg border-b border-gray-300 hover:text-gray-600 dark:text-white dark:border-neutral-800/30 dark:hover:text-neutral-400">
                        Home

                    </Link>
                </li>
                <li>
                    <Link href="/tour" className="font-mono font-bold text-lg border-b border-gray-300 hover:text-gray-600 dark:text-white dark:border-neutral-800/30 dark:hover:text-neutral-400">
                        Tour

                    </Link>
                </li>
                <li>
                    <Link href="/reserva" className="font-mono font-bold text-lg border-b border-gray-300 hover:text-gray-600 dark:text-white dark:border-neutral-800/30 dark:hover:text-neutral-400">
                        Reserva

                    </Link>
                </li>
                <li>
                    <Link href="/contacto" className="font-mono font-bold text-lg border-b border-gray-300 hover:text-gray-600 dark:text-white dark:border-neutral-800/30 dark:hover:text-neutral-400">
                        Contacto

                    </Link>
                </li>
                <li>
                    <Link href="/mapa" className="font-mono font-bold text-lg border-b border-gray-300 hover:text-gray-600 dark:text-white dark:border-neutral-800/30 dark:hover:text-neutral-400">

                        Mapa

                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
