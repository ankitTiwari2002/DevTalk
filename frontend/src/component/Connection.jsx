import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import { Link } from "react-router-dom";

const Connection = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.Connection);
  const fetchConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connection", {
        withCredentials: true,
      });
      dispatch(addConnection(res?.data?.data));
    } catch (err) {
      console.log(err.response.data);
    }
  };
  useEffect(() => {
    fetchConnection();
  }, []);
  if (!connections) return;
  if (connections.length === 0)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-400">
        <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-4 border border-slate-800 shadow-xl">
          <span className="text-3xl opacity-50">🤝</span>
        </div>
        <h1 className="text-xl font-bold text-white mb-2">No Connections Found</h1>
        <p className="text-sm">Start swiping to build your network!</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-4 text-slate-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-10 tracking-tight flex items-center gap-3">
          Your <span className="text-indigo-400">Network</span>
          <span className="bg-indigo-600/20 text-indigo-400 text-xs py-1 px-3 rounded-full border border-indigo-500/30 font-bold">
            {connections.length} Professional{connections.length !== 1 ? 's' : ''}
          </span>
        </h1>

        <div className="grid gap-4">
          {connections.map((connection) => {
            const { _id, firstName, lastName, photourl, age, gender, about } =
              connection;

            return (
              <div
                key={_id}
                className="group flex flex-col sm:flex-row justify-between items-center p-6 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center gap-6 w-full">
                  <div className="relative">
                    <img
                      alt={firstName}
                      className="w-16 h-16 rounded-2xl object-cover ring-2 ring-slate-800 group-hover:ring-indigo-500/50 transition-all shadow-lg"
                      src={photourl}
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-4 border-slate-900"></div>
                  </div>
                  <div className="text-left flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="font-bold text-lg text-white">
                        {firstName} {lastName}
                      </h2>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{gender}</span>
                    </div>
                    <p className="text-slate-400 text-sm italic line-clamp-1">"{about}"</p>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-0 w-full sm:w-auto">
                  <Link to={"/chat/" + _id} className="block w-full">
                    <button className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-indigo-400 font-bold text-sm transition-all border border-slate-700 hover:border-indigo-500/30 shadow-lg">
                      Open Chat
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Connection;
