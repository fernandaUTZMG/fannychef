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
        if (entry.isIntersecting) tryPlay()
        else video.pause()
      },
      { threshold: 0.2 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [src, failed])

  if (failed || !src) {
    return poster ? (
      <img src={poster} alt={alt} className={className} loading="lazy" />
    ) : null
  }

  return (
    <>
      {poster ? (
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          className={`${className} pointer-events-none`}
          loading="eager"
        />
      ) : null}
      <video
        ref={videoRef}
        src={src}
        className={`${className} transition-opacity duration-500 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        poster={poster}
        onError={() => setFailed(true)}
        onPlaying={() => setReady(true)}
        onLoadedData={(event) => {
          const video = event.currentTarget
          if (video.videoWidth === 0) {
            setFailed(true)
            return
          }
          const playPromise = video.play()
          if (playPromise) playPromise.catch(() => undefined)
        }}
      />
    </>
  )
}
