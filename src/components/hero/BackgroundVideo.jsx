import { useRef, useEffect } from 'react'
import './BackgroundVideo.css'

export default function BackgroundVideo() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(() => {
        video.muted = true
        video.play().catch(() => {})
      })
    }
  }, [])

  return (
    <div className="video-bg">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="video-bg__video"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-bg__overlay" />
    </div>
  )
}
