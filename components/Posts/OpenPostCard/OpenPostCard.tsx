import PostPopup from '@/components/Popups/PostPopup'
import React from 'react'

interface OpenPostCardProps {
  showState: boolean
  setShowState(arg: boolean): void
}

const OpenPostCard = ({showState, setShowState}: OpenPostCardProps) => {
  return (
    <PostPopup showState={showState} setShowState={setShowState} title=''>
      teste
    </PostPopup>
  )
}

export default OpenPostCard