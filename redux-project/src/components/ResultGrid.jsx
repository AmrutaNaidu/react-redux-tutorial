import { useEffect } from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaAPI";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setResults } from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
    const dispatch = useDispatch();
    const {query, activeTab, results, loading, error} = useSelector((store) => store.search);
    useEffect(() => {
        if (!query) return
        let data = [];
        const getData = async() => {
            try {
                dispatch(setLoading());
                if (activeTab == 'photos') {
                let response = await fetchPhotos(query)
                data = response.results.map((item) => ({
                    id: item.id,
                    type: 'photos',
                    title: item.alt_description,
                    thumbnail: item.urls.small,
                    src: item.urls.full,
                    url: item.links.html
                }))
                } else if (activeTab == 'videos') {
                    let response = await fetchVideos(query)
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'videos',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url: item.url
                    }))
                }
                dispatch(setResults(data)); 
            } catch(err) {
                dispatch(setError(err.message));
            }
        }
        getData()
    }, [query, activeTab])
    if (error) return <h1>Error {error}</h1>
    if (loading) return <h1>Loading ...</h1>
    return (
        <div className='flex justify-between w-full flex-wrap gap-6 overflow-auto px-10'>
            {results.map((item, idx) => {
                return <div key={idx}>
                <ResultCard item={item}/>
                </div>
            })}
        </div>
    )
}
export default ResultGrid;