import { useDispatch, useSelector } from "react-redux";
import CollcetionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
    const dispatch = useDispatch();
    const clearCollectionHere = () => {
        dispatch(clearCollection());
    }
    const collection = useSelector(state => state.collection.items)
    return (
        <div className='flex justify-between w-full flex-wrap gap-6 overflow-auto px-10'>
            <button onClick={() => {
                clearCollectionHere()
            }}>Clear Collection</button>
            {collection.map((elem, idx) => {
                return <div key={idx}>
                    <CollcetionCard item={elem} />
                </div>
            })}
        </div>
    )
}
export default CollectionPage;