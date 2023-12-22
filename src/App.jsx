import { useEffect, useRef, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import './App.css'
import Singlememe from './components/SingleMeme';
import {BhupendraJogi,
  JaatPaatMai,
  JustlookingLikeAWow,
  MaHariBahadur,
  ThalaForAReason,
  PuneetSuperstar} from './images/images'

  import {Bhupendrajogi,
    Jaatpaatmai,
    Lookinglikeawow,
    Maharibahadur,
    Puneetsuperstar,
    Thalaforareason} from './audio/audio.js'

function App() {
  const forRefs = Array.from({ length: 12 }, () => useRef(null));
  const [lastMeme,setLastMeme]=useState({image:'haha.jpeg',myIndex:1245});
  const [presentMeme,setPresentMeme]=useState({image:'sad.jpeg',myIndex:7894});
  const [shuffle1,setShuffle1]=useState([]);
  const [shuffle2,setShuffle2]=useState([]);
  const [highScore,setHighScore]=useState('Not set');
  const [count,setCount]=useState(-1);

  const shuffle = (array) => { 
    return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value); 
}; 

  const SetLastMemeFunc=(Lastmeme)=>{
      setLastMeme(Lastmeme)

  }
  const setPresentMemeFunc=(meme)=>{
    setLastMeme(presentMeme);
    setPresentMeme(meme);
  }

  useEffect(()=>{
    const memes=[
      {
        id:0,
        memeName:"Puneet superstar",
        memeImage:`${PuneetSuperstar}`,
        memeSound:`${Puneetsuperstar}`
      },
      {
        id:1,
        memeName:"Jaatpaatmai",
        memeImage:`${JaatPaatMai}`,
        memeSound:`${Jaatpaatmai}`
      },
      {
        id:2,
        memeName:"Thalaforareason",
        memeImage:`${ThalaForAReason}`,
        memeSound:`${Thalaforareason}`
      },
      {
        id:3,
        memeName:"Maharibahadur",
        memeImage:`${MaHariBahadur}`,
        memeSound:`${Maharibahadur}`
      },
      {
        id:4,
        memeName:"Bhupendra Jogi",
        memeImage:`${BhupendraJogi}`,
        memeSound:`${Bhupendrajogi}`
      },
      {
        id:5,
        memeName:"Just looking like a wow",
        memeImage:`${JustlookingLikeAWow}`,
        memeSound:`${Lookinglikeawow}`
      }
        ]
          console.log('shuffle memes:',shuffle(memes));
          setShuffle1(shuffle(memes));
          setShuffle2(shuffle(memes));
  
  },[])

  useEffect(()=>{
    if (presentMeme.image==lastMeme.image && presentMeme.myIndex!=lastMeme.myIndex){
        console.log("Inside equal condition");
        forRefs[presentMeme.myIndex].current.classList.remove('invisible');
        forRefs[presentMeme.myIndex].current.classList.add('pointer-events-none');
        forRefs[lastMeme.myIndex].current.classList.remove('invisible');
        forRefs[lastMeme.myIndex].current.classList.add('pointer-events-none');
    }

  },[presentMeme,lastMeme])
  useEffect(()=>{
      setCount((count)=>count+1);
  },[presentMeme])
 
  // useEffect(()=>{
  //   if ((presentMeme.myIndex>5 && (presentMeme-6)==lastMeme.myIndex) || (lastMeme.myIndex>5 && (lastMeme-6)==presentMeme.myIndex)){
  //       console.log("Inside equal condition");
  //       forRefs[presentMeme.myIndex].current.classList.remove('invisible');
  //       forRefs[presentMeme.myIndex].current.classList.add('pointer-events-none');
  //       forRefs[lastMeme.myIndex].current.classList.remove('invisible');
  //       forRefs[lastMeme.myIndex].current.classList.add('pointer-events-none');
  //   }
  // },[presentMeme,lastMeme])


  useEffect(()=>{
    console.log('Last meme and present meme:',lastMeme,presentMeme)
  },[presentMeme,lastMeme])
  // useEffect(()=>{
  //   console.log('Present meme:',presentMeme)
  // },[presentMeme,lastMeme])
  return (
    <>
      
      <div className=' w-full h-[100vh] text-white font-Rubik flex flex-col justify-center items-center '>
        <header className='bg-black h-20 px-8 py-3 flex justify-between w-full mb-28 fixed top-0'>
          <div className="heading text-5xl">Memes</div>
          <a   href="https://github.com/Sanket2060/Memememorygame" target='_blank' ><div className="githubicon pt-3"><FaGithub  size={32} /></div> </a>
        </header>
        <div className="game flex w-[95vw] h-[110vw]  border border-blue-700 flex-wrap  justify-center items-center mb-5">
          {
           shuffle1?shuffle1.map((obj,index)=>{

                //  console.log("id:",obj.id);
              // console.log("obj",obj);
              // console.log('memeName',obj.memeName);
            return  <Singlememe 
            image={`${obj.memeImage}`} 
            audio={`${obj.memeSound}`} 
            id={`${obj.id}`} 
            SetLastMemeFunc={SetLastMemeFunc} 
            SetPresentMemeFunc={setPresentMemeFunc}
            ref={forRefs[index]} 
            key={index}
            myIndex={index}
            />
            }):null
          }



          {
            shuffle2?shuffle2.map((obj,index)=>{
               const newindex=index+6;
              // console.log("id:",obj.id);
              // console.log("obj",obj);
              // console.log('memeName',obj.memeName);
             return <Singlememe 
              image={`${obj.memeImage}`} 
              audio={`${obj.memeSound}`} 
              id={`${obj.id}`} 
              SetLastMemeFunc={SetLastMemeFunc} 
              SetPresentMemeFunc={setPresentMemeFunc} 
              ref={forRefs[newindex]} 
               key={index}
              myIndex={newindex}
              />
            }):null

          }

        </div>
        <div className="scorecard bg-black flex justify-around text-2xl px-4 w-full py-4">
          {/* <div className="highscore">HighScore:{highScore}</div> */}
          <div className="count">Count:{count}</div>
        </div>
      </div>
    </>
  )
}

export default App
