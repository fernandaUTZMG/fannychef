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
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setFailed(false)
    setReady(false)
  }, [src])

  useEffect(() => {
    const video = videoRef.current
    if (!video || failed) return

    const tryPlay = () => {
      const playPromise = video.play()
      if (playPromise) playPromise.catch(() => undefined)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        if (entry.isIntersecting) {
          tryPlay()
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 },
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
        className={`${className} z-[1] bg-transparent transition-opacity duration-300 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        poster={poster}
        onError={() => setFailed(true)}
        onLoadedData={(event) => {
          const video = event.currentTarget
          if (video.videoWidth === 0) {
            setFailed(true)
            return
          }
          setReady(true)
          const playPromise = video.play()
          if (playPromise) playPromise.catch(() => undefined)
        }}
        onPlaying={() => setReady(true)}
        onCanPlay={() => {
          const video = videoRef.current
          if (!video) return
          if (video.videoWidth > 0) setReady(true)
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  )
}
