import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import type { FunctionComponent } from "react";
import type { SwiperRef, SwiperSlideProps } from "swiper/react";
import type { SwiperModule } from "swiper/types";

export interface getInterface {
  request?: Request;
  params: Params;
}

export interface ImageProps {
  image: {
    src: string;
    url: string;
    width?: number;
    height?: number;
  };
}

export interface ButtonProps {
  button: {
    label: string;
    url: string;
  };
}

export interface DoughnutProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  chartData: any;
}

export interface LineChartProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  chartData: any;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  chartOptions: any;
}

export interface RadarChartProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  chartData: any;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  chartOptions: any;
}

export interface PopupProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  showState: boolean;
  setShowState(): void;
  handleSubmit?: () => void;
}

export interface TopicProps {
  page: string;
  image: string;
  title: string;
  description: string;
  url: string;
}

export interface MarketingCourseProps {
  id: number;
  title: string;
  description: string;
  price: number;
}

export interface UserProps {
  id: string;
  uuid: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  username: string;
  followers: number;
  following: number;
  picture: string;
  backgroundImage: string;
  viewTrending: boolean;
}

export interface AnchorProps {
  href: string;
  label: string;
}

export interface DateProps {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export interface SwiperProps {
  Swiper: FunctionComponent<React.RefAttributes<SwiperRef> & SwiperProps>;
  SwiperSlide: FunctionComponent<SwiperSlideProps>;
  Navigation: SwiperModule;
  Pagination: SwiperModule;
}