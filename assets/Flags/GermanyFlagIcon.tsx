import { IconProps } from '@/types'

export const GermanyFlagIcon: React.FC<IconProps> = props => (
  <svg
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    viewBox="0 0 36 36"
    {...props}
  >
    <path
      d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4H0v4z"
      fill="#FFCD05"
    ></path>
    <path d="M0 14h36v9H0z" fill="#ED1F24"></path>
    <path d="M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4z" fill="#141414"></path>
  </svg>
)
