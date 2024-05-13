import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'rounded-sm',
    'duration-default',
    'justify-center',
    'items-center',
    'gap-2',
    'disabled:cursor-not-allowed',
    'h-fit'
  ],
  {
    variants: {
      variant: {
        primary: [
          'font-medium',
          'text-white',
          'bg-gradient-to-r',
          'from-blue-700',
          'to-blue-600',
          'hover:brightness-125',
          'flex',
          'font-normal',
          'py-2',
          'px-6',
          'w-full'
        ],
        secondary: [
          'font-medium',
          'text-white',
          'bg-gradient-to-r',
          'from-yellow-600',
          'to-yellow-500',
          'hover:brightness-110',
          'flex',
          'font-normal',
          'py-2',
          'px-6',
          'w-full'
        ],
        tertiary: [
          'font-medium',
          'text-white',
          'bg-gradient-to-r',
          'from-green-600',
          'to-green-500',
          'hover:brightness-125',
          'flex',
          'font-normal',
          'py-2',
          'px-6',
          'w-full'
        ],
        outlineWhite: [
          'font-medium',
          'border',
          'border-slate-50',
          'bg-transparent',
          'text-slate-50',
          'hover:text-slate-700',
          'hover:bg-slate-50',
          'flex',
          'font-normal',
          'py-2',
          'px-6',
          'w-full'
        ],
        outlineBlue: [
          'font-medium',
          'border',
          'border-blue-600',
          'bg-transparent',
          'text-blue-600',
          'hover:text-blue-50',
          'hover:bg-blue-600',
          'flex',
          'font-normal',
          'py-2',
          'px-6',
          'w-full'
        ],
        outlineDark: [
          'font-medium',
          'border',
          'border-slate-700',
          'bg-transparent',
          'text-slate-600',
          'hover:text-slate-50',
          'hover:bg-slate-600',
          'flex',
          'font-normal',
          'py-2',
          'px-6',
          'w-full'
        ],
        ghostWhite: [
          'font-medium',
          'bg-transparent',
          'text-slate-50',
          'hover:text-slate-700',
          'hover:bg-slate-50',
          'flex',
          'font-normal',
          'py-2',
          'px-6',
          'w-full'
        ],
        ghostDark: [
          'font-medium',
          'bg-transparent',
          'text-slate-700',
          'hover:bg-slate-700',
          'hover:text-slate-50',
          'flex',
          'font-normal',
          'py-2',
          'px-6',
          'w-full'
        ],
        link: [
          'text-blue-600',
          'bg-transparent',
          'hover:underline',
          'py-0',
          'px-0',
          'font-light',
          'inline'
        ]
      },
      size: {
        small: ['text-sm'],
        medium: ['text-base'],
        large: ['text-lg']
      },
      container: {
        fluid: ['lg:w-full'],
        fixed: ['lg:w-fit']
      },
      disabled: {
        true: ['opacity-70', 'cursor-not-allowed', 'pointer-events-none'],
        false: []
      }
    },
    compoundVariants: [
      {
        variant: 'link',
        container: 'fixed'
      }
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      container: 'fixed'
    }
  }
)
