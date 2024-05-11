import { IconProps } from '@/types'

export const ItalyFlagIcon: React.FC<IconProps> = props => (
  <svg
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    viewBox="0 0 36 36"
    {...props}
  >
    <path
      d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"
      fill="#CE2B37"
    ></path>
    <path d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z" fill="#009246"></path>
    <path d="M12 5h12v26H12z" fill="#EEE"></path>
  </svg>
)
