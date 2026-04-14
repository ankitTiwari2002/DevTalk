import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import FeedCard from "./FeedCard";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photourl, setPhotourl] = useState(user.photourl);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about || "");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const saveProfile = async () => {
    setError("");

    // Comprehensive Frontend Validation
    if (!firstName?.trim() || !lastName?.trim()) {
      setError("First Name and Last Name are required.");
      return;
    }
    if (firstName.length < 4 || firstName.length > 50) {
      setError("First Name must be between 4 and 50 characters.");
      return;
    }
    if (age && (isNaN(age) || age < 18)) {
      setError("Age must be a valid number and at least 18.");
      return;
    }
    if (photourl) {
      try {
        new URL(photourl);
      } catch (err) {
        setError("Please enter a valid Photo URL starting with http:// or https://");
        return;
      }
    }

    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photourl,
          age,
          gender,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-slate-950 py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start justify-center">
          {/* Form Section */}
          <div className="w-full md:w-[450px] bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Edit Profile</h2>
              <p className="text-slate-400 text-sm mt-2 font-medium">Keep your professional identity up to date.</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-slate-800/50 text-white border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    placeholder="First Name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-slate-800/50 text-white border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Photo URL</label>
                <input
                  type="text"
                  value={photourl}
                  onChange={(e) => setPhotourl(e.target.value)}
                  className="w-full bg-slate-800/50 text-white border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                  placeholder="https://..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Age</label>
                  <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full bg-slate-800/50 text-white border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    placeholder="Age"
                  />
                </div>
                <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Gender</label>
                <div className="relative">
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full bg-slate-800/50 text-white border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">About</label>
                <textarea
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  className="w-full bg-slate-800/50 text-white border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none min-h-[100px] resize-none underline-none"
                  placeholder="Tell us about yourself..."
                />
              </div>

              {error && (
                <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-3 text-red-400 text-sm font-medium">
                  {error}
                </div>
              )}

              <button
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                onClick={saveProfile}
              >
                Save Changes
              </button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="w-full md:w-auto flex flex-col items-center">
            <div className="mb-6 self-start md:self-center">
              <h3 className="text-xl font-bold text-white tracking-tight">Live Preview</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">This is how others see you</p>
            </div>
            <FeedCard
              user={{ firstName, lastName, photourl, age, gender, about }}
              showButtons={false}
            />
          </div>
        </div>
        {showToast && (
          <div className="toast toast-top toast-center">
            <div className="alert alert-success bg-indigo-600 border-none rounded-2xl shadow-2xl">
              <span className="text-white font-bold text-sm">Profile synchronized successfully.</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default EditProfile;
