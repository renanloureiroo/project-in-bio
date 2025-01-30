import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'
import { DynamicIcon, IconName } from 'lucide-react/dynamic'

type LinkButtonProps = {
  icon: IconName
} & ComponentProps<'a'>

const LinkButton = ({ icon, className, ...rest }: LinkButtonProps) => {
  return (
    <a
      target="_blank"
      {...rest}
      className={cn(
        `size-12 p-3 rounded-xl bg-background-quaternary hover:brightness-125
        transition-all duration-150`,
        className
      )}
    >
      {icon && (
        <DynamicIcon name={icon} className="size-6 stroke-content-heading" />
      )}
    </a>
  )
}

export { LinkButton }
export type { LinkButtonProps }
