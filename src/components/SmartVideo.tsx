import { useEffect, useRef, useState } from 'react'

type SmartVideoProps = {
  src: string
  poster?: string
  className?: string
  alt?: string
}

export function SmartVideo({ src, poster, className = '', alt = '' }: SmartVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video || failed) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        if (entry.isIntersecting) {
          const playPromise = video.play()
          if (playPromise) playPromise.catch(() => undefined)
        } else {
          video.pause()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [src, failed])

  if (failed || !src) {
    return (
      <img
        src={poster}
        alt={alt}
        className={className}
        loading="lazy"
      />
    )
  }

  return (
    <>
      {poster && (
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          className={`${className} pointer-events-none`}
          loading="lazy"
        />
      )}
      <video
        ref={videoRef}
        className={`${className} z-[1]`}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        onError={() => setFailed(true)}
        onLoadedData={(event) => {
          const video = event.currentTarget
          if (video.videoWidth === 0) setFailed(true)
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  )
}
