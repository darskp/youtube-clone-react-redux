import SideList from "./sideList";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Tablist from "./Tablist";
import CardList from "./CardList";
import { getVideos } from "../../reduxtoolkit/feature/videoSlice";
import { useEffect } from "react";
// import { youtubeResponse } from "../../data/app.data";
const AppcontentArea = () => {
    let isOpen = useSelector(state => state.toggle.isToggle);

    const sideBarWidth = isOpen ? '60px' : '225px';
    let youtubeResponse = useSelector(state => state.video.videoList)
    let youtubeResponseErr = useSelector(state => state.video.error)

    let nextPageToken = useSelector(state => state.video.nextPageToken)
let dispatch=useDispatch();

    let handlescroll=()=>{
    const{clientHeight,scrollHeight,scrollTop}=document.documentElement;
    if(scrollTop+clientHeight>=scrollHeight-10){
        dispatch(getVideos(nextPageToken))}
    }

useEffect(() => {
  window.addEventListener("scroll",handlescroll)
  return () => {
    window.removeEventListener('scroll',handlescroll)
  }
}, [dispatch,youtubeResponse, nextPageToken])

    return (
        <>
            <Box component="main" sx={{
                display: 'flex',
                mt: 10,
                width: '100%',
                overflow: 'hidden'
            }}>

                <Box component="div"
                    sx={{
                        flexBasis: sideBarWidth,
                        flexGrow: 0,
                        flexShrink: 0,
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        position: 'sticky',
                        top: 0,
                        height: 'auto',
                    }}
                >
                    <SideList />
                </Box>

                <Box component="div" sx={{ display: "flex", flexDirection: "column", flexGrow: 1, }}>
                    <Box sx={{ mb: 1, width: `calc(100vw - ${sideBarWidth})` }}>
                        <Tablist />

                    </Box>
                    <Box component="div"
                        sx={{
                            flexGrow: 1,
                            p: 1,
                            mt: 1,
                            overflowY: 'auto',
                            overflowX: 'hidden',
                            width: `calc(100vw - ${sideBarWidth})`,
                        }} >
                            {youtubeResponseErr ? youtubeResponseErr : 
                        <CardList items={youtubeResponse} />
                            }
                    </Box>
                </Box>
            </Box>
        </>);
}

export default AppcontentArea;




// import { useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setVideos } from "../../reduxtoolkit/feature/videoSlice";

// const AppcontentArea = () => {
//     let isOpen = useSelector((state) => state.toggle.isToggle);
//     const sideBarWidth = isOpen ? "60px" : "225px";
//     const videoList = useSelector((state) => state.video.videoList);
//     const nextPageToken = useSelector((state) => state.video.nextPageToken);
//     const dispatch = useDispatch();
//     const scrollContainerRef = useRef(null);

//     const handleScroll = () => {
//         const { scrollTop, clientHeight, scrollHeight } = scrollContainerRef.current;
//         if (scrollTop + clientHeight >= scrollHeight - 10) {
//             dispatch(setVideos(nextPageToken));
//         }
//     };

//     useEffect(() => {
//         const scrollContainer = scrollContainerRef.current;
//         scrollContainer.addEventListener("scroll", handleScroll);
//         return () => {
//             scrollContainer.removeEventListener("scroll", handleScroll);
//         };
//     }, [videoList, nextPageToken]);

//     return (
//         <>
//             <div ref={scrollContainerRef} style={{ height: "100%", overflowY: "auto" }}>
//                 {/* Rest of your component code */}
//             </div>
//         </>
//     );
// };

// export default AppcontentArea;
