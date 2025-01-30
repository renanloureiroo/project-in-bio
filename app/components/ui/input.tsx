import { cn } from '@/lib/utils'

type FormItemProps = {
  children: React.ReactNode
} & React.ComponentProps<'div'>

const FormItem = ({ children, className, ...rest }: FormItemProps) => {
  return (
    <div className={cn('flex flex-col gap-[6px]', className)} {...rest}>
      {children}
    </div>
  )
}

type LabelProps = {
  children: React.ReactNode
} & React.ComponentProps<'label'>

const Label = ({ children, className, ...rest }: LabelProps) => {
  return (
    <label
      className={cn('text-label text-content-heading', className)}
      {...rest}
    >
      {children}
    </label>
  )
}

type InputProps = React.ComponentProps<'input'> & {
  label?: string
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <input
        className="p-3 placeholder:text-content-placeholder text-content-body text-label
          bg-background-secondary rounded-xl hover:ring-1 hover:ring-border-secondary
          focus-visible:outline-none focus-visible:ring-1
          focus-visible:ring-border-tertiary transition-all duration-150"
        {...props}
      />
    </div>
  )
}

export { FormItem, Label, Input }
export type { FormItemProps, LabelProps, InputProps }
