import React, { useRef } from 'react'

function Singlememe({image,audio,setLastMemeFunc,SetPresentMemeFunc,id},forRefs) {
  const memeRef=useRef();
  const audioRef=useRef();
  const showImage=()=>{
    audioRef.current.playbackRate=1.75;
    memeRef.current.classList.remove('invisible');
    audioRef.current.play();
    setTimeout(() => {
      memeRef.current.classList.add('invisible');
      audioRef.current.pause();
    }, 500);
  }

    const memeClicked=(value)=>{
      SetPresentMemeFunc(value);

    } 
  return (
   <div className="square bg-black w-[22vw] border border-black  h-[22vw] m-3 hover:cursor-pointer" onClick={()=>{
    showImage();
    memeClicked(id);
   }
  }
  //  style={{
  //   backgroundImage:`url(${image})`,
  //   // maxWidth:'100%',
  //   backgroundSize:'cover',
  //   backgroundRepeat:'no-repeat'

  // }}
  >
    <audio src={`${audio}`} ref={audioRef} ></audio>
    <div className="imagewrap w-fit h-fit" ref={forRefs}>
    <img src={`${image}`} className='h-full w-auto max-w-[100%] invisible' ref={memeRef}   />
    </div>
  </div>
  )
}

export default React.forwardRef(Singlememe)