'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Icon from 'components/elements/Icon'

import S from './styles.module.css'

interface Props {
  label: string
  sub_items: {
    label: string
    href: string
  }[]
  isActive: boolean
  isLast: boolean
}

export const LinkDropDown = ({ label, sub_items, isActive, isLast }: Props) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false)

  const pathname = usePathname()

  const getClassName = () => {
    return `hover:text-primary-200 text-primary-200 transition-all ${
      isActive ? 'text-primary-200' : 'text-white'
    }
    ${isLast && 'mr-8'}`
  }

  console.log(pathname.startsWith('/solucoes'))

  return (
    <div className="relative">
      <button
        className={`${S.LinkDropDown} flex items-center ${getClassName()}`}
        onClick={() => setIsOpenDropDown(!isOpenDropDown)}
      >
        {label}
        <span
          className={`ml-2 transition-all ${
            isOpenDropDown ? 'rotate-0' : 'rotate-180'
          }`}
        >
          <Icon name="MdKeyboardArrowUp" color={isActive && '#32aa82'} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all absolute -bottom-2 left-0 translate-y-full rounded-lg opacity-100 bg-grayscale-500 ${
          !isOpenDropDown && 'h-0 opacity-0'
        }`}
      >
        {sub_items.map(sub_item => (
          <Link
            key={sub_item.label}
            href={sub_item.href}
            className="block whitespace-nowrap pl-5 py-2 hover:pl-6 transition-all w-40 hover:bg-grayscale-400"
          >
            {sub_item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
