import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";
import { FaHeart, FaTimes } from "react-icons/fa";

const FeedCard = ({ user, showButtons = true }) => {
  const { _id, photourl, firstName, gender, age, about, lastName } = user;
  const dispatch = useDispatch();

  const handleButton = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeed(userId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-slate-800 border border-slate-700 text-slate-100 rounded-2xl shadow-2xl overflow-hidden max-w-sm w-full mx-auto transition-all duration-300 hover:shadow-indigo-500/10 hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img 
          src={photourl} 
          alt={firstName} 
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-baseline mb-2">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            {firstName} {lastName}
          </h2>
          <span className="text-indigo-400 font-semibold">{age} yrs</span>
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-700 text-slate-300 capitalize mb-4">
          {gender}
        </div>

        {/* About Section */}
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 italic">
          "{about}"
        </p>
      </div>

      {/* Actions Section */}
      {showButtons && (
        <div className="flex justify-center gap-4 p-6 pt-0">
          <button
            className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-red-900/40 text-slate-300 hover:text-red-400 font-bold py-3 px-4 rounded-xl transition-all duration-200 border border-slate-600 hover:border-red-500/50"
            onClick={() => handleButton("ignored", _id)}
          >
            <FaTimes className="text-lg" />
            <span>Pass</span>
          </button>
          <button
            className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-all duration-200 transform hover:scale-105"
            onClick={() => handleButton("intrested", _id)}
          >
            <FaHeart className="text-lg" />
            <span>Connect</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedCard;
