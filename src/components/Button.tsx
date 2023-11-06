import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'ring-offset-background focus-visible:ring-ring rounded-full shadow-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-primary bg-white',
        primary: 'bg-primary hover:bg-primary/90 text-primary-foreground '
      },
      size: {
        default: 'px-8 py-3',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps extends VariantProps<typeof buttonVariants>, React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant })} {...props}>
      {children}
    </button>
  )
}
