import React from 'react'
import type { HeadComponentProps } from './types'
import Head from 'next/head'

const HeadComponent = ({title, description, keywords, opengraph}: HeadComponentProps) => {
  return (
    <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:image" content={opengraph} />
  </Head>
  )
}

export default HeadComponent