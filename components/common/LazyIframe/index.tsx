'use client'
import React, { useEffect, useRef } from 'react'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { CustomLoader } from '@/utils/customLoader'

import { CustomImage } from '../CustomImage'
import { LazyIframeProps } from './types'

const LazyIframe: React.FC<LazyIframeProps> = ({
  url,
  className = '',
  title,
  isShorts = false,
  disableControls = false
}) => {
  const containerRef = useRef()
  const lockRef = useRef(false)
  const isIntersecting = useIntersectionObserver(
    {
      root: null,
      rootMargin: '1200px 0px 1200px 0px',
      threshold: 0.5
    },
    containerRef
  )

  useEffect(() => {
    lockRef.current = false
  }, [url])

  if (isIntersecting && !lockRef.current) {
    lockRef.current = true
  }

  const getYouTubeId = url => {
    return url.replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7'
    )
  }

  const getThumbnail = url => {
    const youTubeID = getYouTubeId(url)
    const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`
    return bgUrl
  }

  return (
    <div
      className={`relative w-full ${
        isShorts ? 'aspect-[9/16]' : 'aspect-video'
      }`}
      ref={containerRef}
    >
      {lockRef.current && (
        <>
          <div className="absolute left-0 top-0 mx-auto h-full w-full">
            <CustomImage
              className={`${className} scale-[0.998] ${
                isShorts ? 'object-cover' : ''
              }`}
              alt={title}
              height={isShorts ? 1920 : 720}
              loader={CustomLoader}
              priority={true}
              src={getThumbnail(url)}
              width={isShorts ? 1080 : 1280}
            />
          </div>
          <iframe
            src={`https://www.youtube.com/embed/${getYouTubeId(url)}?rel=0&${
              disableControls ? 'controls=0' : ''
            }`}
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            className={`absolute left-0 top-0 h-full w-full ${className}`}
            title={title}
          />
        </>
      )}
    </div>
  )
}

export default LazyIframe
