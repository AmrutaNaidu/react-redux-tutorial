import { useDispatch } from "react-redux";
import { removeCollection } from "../redux/features/collectionSlice";

const CollcetionCard = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromCollection = (item) => {
    dispatch(removeCollection(item));
  };

  return (
    <div className="w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden">
      <a href={item.url} target="_blank">
        {item.type == "photos" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type == "videos" ? (
          <video
            className="h-full w-full object-cover object-center"
            src={item.src}
            autoPlay
            loop
            muted
          ></video>
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white"
      >
        <h2 className="text-lg font-semibold capitalize h-14 overflow-hidden">
          {item.title}
        </h2>
        <button
          onClick={() => {
            removeFromCollection(item);
          }}
          className="bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default CollcetionCard;
