import React, { useRef } from 'react'

function Singlememe({image,audio,setLastMemeFunc,setPresentMemeFunc,id}) {
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
      setPresentMemeFunc(value);

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
    <img src={`${image}`} className='h-full w-auto max-w-[100%] invisible' ref={memeRef}  />
  </div>
  )
}

export default Singlememe