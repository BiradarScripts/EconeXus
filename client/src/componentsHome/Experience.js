import React from 'react'
import exeperience from './assets/experience.mp4'

export default function Experience() {
  return (
    <div className="experience">
        <div className="texts">
            <video src={exeperience} autoPlay loop muted />
        </div>
    </div>
  )
}
