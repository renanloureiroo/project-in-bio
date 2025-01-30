import { cn } from '@/lib/utils'

type TextareaProps = React.ComponentProps<'textarea'>

const Textarea = ({ className, ...rest }: TextareaProps) => (
  <textarea
    className={cn(
      `p-3 placeholder:text-content-placeholder text-content-body text-label
      bg-background-secondary rounded-xl border-none hover:ring-1
      hover:ring-border-secondary focus-visible:outline-none focus-visible:ring-1
      focus-visible:ring-border-tertiary transition-all duration-150 h-[9.25rem]
      resize-none`,
      className
    )}
    {...rest}
  />
)

export { Textarea }
