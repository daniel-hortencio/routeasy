import Image from 'next/image'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasWindow, setHasWindow] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  return (
    <div className="flex justify-center w-full pt-[50%] relative max-w-[1300px] mx-auto">
      <Image fill src="/images/pictures/max_res_default.png" alt="Thumbnail" />
      {hasWindow && (
        <ReactPlayer
          width="100%"
          height="100%"
          onPlay={() => setIsPlaying(true)}
          onEnded={() => setIsPlaying(false)}
          controls={true}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: isPlaying ? 1 : 0,
            transition: 'opacity 0.2s'
          }}
          url="https://www.youtube.com/watch?v=EXNNL0O3L10"
        />
      )}
    </div>
  )
}
