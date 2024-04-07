"use client"

import { CldUploadButton } from 'next-cloudinary';
import React from 'react';

interface UploadPhotoProps {
  setFile(arg: string): void
  file: string
  children: React.ReactNode
  className?: string
}

const UploadPhoto = ({ setFile, file, children, className }: UploadPhotoProps) => {

  const handleUpload = async (e: any) => {
    try {
      setFile(e.info.secure_url)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <CldUploadButton options={{ maxFiles: 1 }} onUpload={handleUpload} uploadPreset='m3k11e7o'>
        <div className='select-photo-cloudinary'>
          {children}
        </div>
      </CldUploadButton>
    </div>
  )
}

export default UploadPhoto