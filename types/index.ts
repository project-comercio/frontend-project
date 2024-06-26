import React from "react";
import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import type { FunctionComponent } from 'react'
import type { SwiperRef, SwiperSlideProps } from 'swiper/react'
import type { SwiperModule } from 'swiper/types'

export interface getInterface {
  request?: Request
  params: Params
}

export interface ImageProps {
  image: {
    src: string
    url: string
    width?: number
    height?: number
  }
}

export interface ButtonProps {
  button: {
    label: string
    url: string
  }
}

export interface DoughnutProps {
  chartData: any
  className?: string
}

export interface LineChartProps {
  chartData: any
  chartOptions: any
}

export interface RadarChartProps {
  chartData: any
  chartOptions: any
}

export interface PopupProps {
  children: React.ReactNode
  title: string
  description?: string
  showState: boolean
  setShowState(arg: boolean): void
  handleSubmit?: () => void
}

export interface TopicProps {
  page: string
  image: string
  title: string
  description: string
  url: string
}

export interface MarketingCourseProps {
  id: number
  title: string
  description: string
  price: number
}

export interface UserProps {
  id: string
  uuid: string
  email: string
  password: string
  firstname: string
  lastname: string
  username: string
  followers: number
  following: number
  picture: string
  backgroundImage: string
  likes: string[]
  viewTrending: boolean
}

export interface AnchorProps {
  href: string
  label: string
}

export interface DateProps {
  days: string
  hours: string
  minutes: string
  seconds: string
}

export interface SwiperProps {
  Swiper: FunctionComponent<React.RefAttributes<SwiperRef> & SwiperProps>
  SwiperSlide: FunctionComponent<SwiperSlideProps>
  Navigation: SwiperModule
  Pagination: SwiperModule
}

export interface PostProps {
  id: string
  creatorId: string
  creatorName: string
  creatorPhoto: string
  date?: Date
  content: string
  images: string[]
  comments?: number
  likes?: number
  shares?: number
}

export interface UserContextProps {
  cookiesData: any
  getSessionInfo(): void
  userData: UserProps
  getUserInfo(): void
}

export interface CompanyDataProps {
  logo: string
  companyName: string
  companyDescription: string
  posts: number
  followers: number
}

export interface CommentProps {
  id: string
  postId: string
  content: string
  creatorId: string
  creatorImage: string
  creatorName: string
  image?: string[]
  createdAt?: Date
}

export interface ContainerProps {
  className?: string
  children: React.ReactNode
}

export interface IconProps {
  className?: string
  width?: number | string
  height?: number | string
  fill?: string
  stroke?: string
}

export interface ButtonCopy {
  button: {
    label?: string
    href?: string
  }
}