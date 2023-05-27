import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../reduxtoolkit/feature/videoSlice";


const Home = () => {
    let [name, setName] = useState('des');
    let dispatch = useDispatch();
    useSelector(state => state.video)
    useEffect(() => {
        dispatch(getVideos(name))
    }, [name])
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" value={name} onChange={(e) => (setName(e.target.value))} />
                <button type="submit">Submit</button>
            </form>
        </>);
}

export default Home;