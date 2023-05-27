import { useParams } from "react-router-dom";

const Video = () => {
   let{id}= useParams()
    return ( <>
        <h1>Video - {id}</h1>
    </> );
}
 
export default Video;