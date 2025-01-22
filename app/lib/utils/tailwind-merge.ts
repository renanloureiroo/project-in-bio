import { ClassValue, clsx } from 'clsx'

import { twMerge } from 'tailwind-merge'

/**
 * @description Função de utilidade para mesclar classes de Tailwind CSS
 * @param inputs
 * @returns string
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(...inputs))
