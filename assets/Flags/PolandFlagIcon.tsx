import { IconProps } from '@/types'

export const PolandFlagIcon: React.FC<IconProps> = props => (
  <svg
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    viewBox="0 0 36 36"
    {...props}
  >
    <path d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4z" fill="#EEE"></path>
    <path
      d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-9H0v9z"
      fill="#DC143C"
    ></path>
  </svg>
)
