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

    // If the file never becomes playable, keep the poster forever.
    const timeout = window.setTimeout(() => {
      setReady((isReady) => {
        if (!isReady) setFailed(true)
        return isReady
      })
    }, 4000)

    return () => window.clearTimeout(timeout)
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
          loading="lazy"
        />
      ) : null}
      <video
        ref={videoRef}
        src={src}
        className={`${className} z-[1] transition-opacity duration-500 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        poster={poster}
        onError={() => setFailed(true)}
        onPlaying={(event) => {
          const video = event.currentTarget
          if (video.videoWidth > 0) setReady(true)
        }}
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
