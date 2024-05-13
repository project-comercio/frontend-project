'use client'

import { createElement } from 'react'

import { getButtonElementType } from '@/utils/getButtonElementType'

import { Spin } from '../Spin'
import { ButtonProps } from './types'
import { buttonVariants } from './variance'

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size,
  container,
  className,
  children,
  isLoading,
  disabled,
  icon,
  ...props
}) => {
  const spin = <Spin />

  return createElement(
    getButtonElementType({ ...props }),
    {
      className: buttonVariants({
        variant,
        size,
        container,
        disabled,
        className
      }),
      // @ts-expect-error disabled works as well.
      disabled: isLoading || disabled,
      ...props
    },
    <>
      {icon ? <>{isLoading ? spin : icon}</> : null}
      {children}
      {isLoading && !icon ? spin : null}
    </>
  )
}
