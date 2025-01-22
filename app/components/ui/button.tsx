import { cn } from '@/lib/utils'

type ButtonVariants = 'primary' | 'secondary' | 'ghost'

type ButtonProps = {
  children: React.ReactNode
  variant?: ButtonVariants
} & React.ComponentProps<'button'>

const buttonVariants: Record<ButtonVariants, ButtonProps['className']> = {
  primary: 'bg-accent-purple',
  secondary: 'bg-background-tertiary',
  ghost: 'bg-transparent border border-border-primary'
}

export const Button = ({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        `flex items-center justify-center gap-3 p-3 text-content-heading text-label
        rounded-xl whitespace-nowrap hover:opacity-95 disabled:opacity-70`,
        buttonVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
