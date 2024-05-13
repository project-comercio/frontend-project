import { User } from '@/types/Academy/users'

export interface UserDetailsProps {
  copy: {
    items: {
      label: string
      href: string
    }[]
    buttonLogout: {
      label: string
    }
  }
  user: User
}
