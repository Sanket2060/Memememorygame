import { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import './App.css'
import Singlememe from './components/Singlememe';
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
  const [lastMeme,setLastMeme]=useState();
  const [presentMeme,setPresentMeme]=useState();
  const [shuffle1,setShuffle1]=useState([]);
  const [shuffle2,setShuffle2]=useState([]);

  const shuffle = (array) => { 
    return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value); 
}; 

  const SetLastMemeFunct=(Lastmeme)=>{
      setLastMeme(Lastmeme)

  }
  const setPresentMemeFunct=(Presentmemeid)=>{
    setLastMeme(presentMeme);
    setPresentMeme(Presentmemeid);
  }

  useEffect(()=>{
    if (presentMeme==lastMeme){
      
    }
  },[presentMeme])
  


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
    
  return (
    <>
      
      <div className=' w-full h-[100vh] text-white font-Rubik flex flex-col justify-center items-center '>
        <header className='bg-black h-20 px-8 py-3 flex justify-between w-full mb-28 fixed top-0'>
          <div className="heading text-5xl">Memes</div>
          <a   href="https://github.com/Sanket2060/Memememorygame" target='_blank' ><div className="githubicon pt-3"><FaGithub  size={32} /></div> </a>
        </header>
        <div className="game flex w-[95vw] h-[110vw]  border border-blue-700 flex-wrap  justify-center items-center">
          {
           shuffle1?shuffle1.map((obj)=>{
                //  console.log("id:",obj.id);
              // console.log("obj",obj);
              // console.log('memeName',obj.memeName);
            return  <Singlememe 
            image={`${obj.memeImage}`} 
            audio={`${obj.memeSound}`} 
            id={`${obj.id}`} 
            SetLastMemeFunct={SetLastMemeFunct} 
            SetPresentMemeFunct={setPresentMemeFunct}
            />
            }):null
          }



          {
            shuffle2?shuffle2.map((obj)=>{
              // console.log("id:",obj.id);
              // console.log("obj",obj);
              // console.log('memeName',obj.memeName);
             return <Singlememe 
              image={`${obj.memeImage}`} 
              audio={`${obj.memeSound}`} 
              id={`${obj.id}`} 
              SetLastMemeFunct={SetLastMemeFunct} 
              SetPresentMemeFunct={setPresentMemeFunct} 
              />
            }):null

          }

        </div>
      </div>
    </>
  )
}

export default App
