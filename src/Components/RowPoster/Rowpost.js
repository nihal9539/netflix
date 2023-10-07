import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './Rowpost.css'
import axios from '../../axios'
import {API_KEY, IMAGE_URL } from '../constants/constants'
function Rowpost(props) {
  const [movies, setmovies] = useState([])
  const [urlid,seturlid] = useState('')
  
  useEffect(() => {
  
    axios.get(props.url).then((response)=>{
      // console.log(respose.data);
      setmovies(response.data.results)
     
    })
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data);
      if (response.data.results.length !==0) {
        seturlid(response.data.results[0])
      }else{
        console.log("No Trailer");
      }
    })
  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        
          
        <div className="posters">
 {movies.map((obj)=>
           
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallPoster':'poster'} alt='poster' src={`${IMAGE_URL+obj.backdrop_path}`} />
            // <img className='poster' alt='poster' src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/money_heist_new_poster_drop.jpg" />
          )}
     </div>
    
    {urlid && <Youtube videoId={urlid.key} opts={opts}  />}
    </div>
    
  )
}

export default Rowpost
