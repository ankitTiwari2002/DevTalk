import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";

const Request = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);

  const reviewRequest = async (status, _id) => {
    try {
      await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.log(err);
    }
  };
  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });
      dispatch(addRequest(res?.data?.data));
    } catch (err) {
      console.log(err.response.data);
    }
  };
  useEffect(() => {
    fetchRequest();
  }, []);
  if (!requests) return;

  if (requests.length === 0)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-400">
        <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-4 border border-slate-800 shadow-xl">
          <span className="text-3xl opacity-50">📬</span>
        </div>
        <h1 className="text-xl font-bold text-white mb-2">No Requests Found</h1>
        <p className="text-sm">Your inbox is clear! Check back later for new connections.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-10 tracking-tight flex items-center gap-3">
          Connection <span className="text-indigo-400">Requests</span>
          <span className="bg-indigo-600/20 text-indigo-400 text-xs py-1 px-3 rounded-full border border-indigo-500/30">
            {requests.length}
          </span>
        </h1>

        <div className="space-y-4">
          {requests.map((request) => {
            const { _id, firstName, lastName, photourl, age, gender, about } =
              request.fromUserId;

            return (
              <div
                key={_id}
                className="group flex flex-col sm:flex-row justify-between items-center p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center gap-6 w-full sm:w-auto">
                  <div className="relative">
                    <img
                      alt={firstName}
                      className="w-16 h-16 rounded-xl object-cover ring-2 ring-slate-800 group-hover:ring-indigo-500/50 transition-all shadow-lg"
                      src={photourl}
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-4 border-slate-900"></div>
                  </div>
                  <div className="text-left">
                    <h2 className="font-bold text-lg text-white">
                      {firstName} {lastName}
                    </h2>
                    <div className="flex items-center gap-2 text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                      <span>{gender}</span>
                      <span>•</span>
                      <span>{age} years old</span>
                    </div>
                    <p className="text-slate-400 text-sm line-clamp-1">{about}</p>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6 sm:mt-0 w-full sm:w-auto">
                  <button
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-red-900/20 hover:text-red-400 hover:border-red-500/30 text-sm font-bold transition-all"
                    onClick={() => reviewRequest("rejected", request._id)}
                  >
                    Reject
                  </button>
                  <button
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold transition-all shadow-lg shadow-indigo-500/20"
                    onClick={() => reviewRequest("accepted", request._id)}
                  >
                    Accept
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Request;
