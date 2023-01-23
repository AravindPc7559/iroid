import React, { useRef, useState } from 'react'
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai'

const Video = () => {
    const vidRef=useRef();
    const [videoStatus, setVideoStatus] = useState(false);
    const [poster, setPoster] = useState(true);

    const handlePlay = () => {
        setPoster(false);
        setVideoStatus(true);
        vidRef.current.play()
    }

    const handlePause = () => {
        setPoster(true);
        setVideoStatus(false);
        vidRef.current.pause()
    }

  return (
    <div className='w-full h-auto relative'>
        <div className={`w-full h-[200px] md:min-h-[600px]  ${poster && 'bg-black'} bg-black` }>
            {
                !poster &&
                <video
                className="h-[200px] md:h-[600px] w-full"
                // controls
                width="100%"
                ref={vidRef}
                autoPlay
                onPlay={true}
                src="/assets/videos/video.mp4"
             >PLAY</video>
            }
        </div>        
 <button className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' onClick={videoStatus ? handlePause : handlePlay}>
    {
        videoStatus ? 
        <AiFillPauseCircle className='text-6xl text-red-800'  />
        :
        <AiFillPlayCircle className='text-6xl text-red-800' />
        }
 </button>
    </div>
  )
}

export default Video