import { IconProps } from '@/types'
import React from 'react'

export const Video: React.FC<IconProps> = props => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 1.5V12.9V15.9V46.5H46.5V15.9V12.9V1.5H1.5ZM43.5 11.7L36.3 4.5H43.5V11.7ZM15.9 12.9L7.5 4.3H12.9L21.3 12.7H15.9V12.9ZM25.5 12.9L17.1 4.3H22.3L30.7 12.7H25.5V12.9ZM35.1 12.9L26.7 4.5H31.9L40.3 12.9H35.1ZM4.3 5.5L11.5 12.7H4.3V5.5ZM43.5 43.5H4.3V15.9H43.3V43.5H43.5ZM16.7 21.5V37.9L32.9 29.7L16.7 21.5ZM19.7 26.3L26.3 29.5L19.7 32.9V26.3Z"
        fill="#EAB308"
      />
    </svg>
  )
}
