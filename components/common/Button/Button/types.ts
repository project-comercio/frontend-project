import { VariantProps } from 'class-variance-authority'
import { AnchorHTMLAttributes, PropsWithChildren } from 'react'

import { buttonVariants } from './variance'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  as?: keyof JSX.IntrinsicElements
  href?: string
  icon?: JSX.Element
  isLoading?: boolean
  onClick?: () => void
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target']
}

export interface WrapperProps
  extends PropsWithChildren,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {}
