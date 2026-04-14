import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const photourl =
    user?.photourl ||
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="navbar bg-slate-900 text-slate-100 shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b border-slate-800">
      <div className="flex-1 px-4">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="DevTalk Logo" className="w-8 h-8 rounded-lg shadow-sm" />
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            DevTalk
          </span>
        </Link>
      </div>
      <div className="flex-none gap-2">
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={photourl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-800 text-slate-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl border border-slate-700 font-medium"
            >
              <li>Welcome, {user?.firstName}</li>
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/connection">Connections</Link>
              </li>
              <li>
                <Link to="/request">Requests</Link>
              </li>
              <li>
                <Link to="/premium">Premium</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
