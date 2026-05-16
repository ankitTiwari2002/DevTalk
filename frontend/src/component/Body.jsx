import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import { createSocketConnection } from "../utils/socket";
import { addNotification } from "../utils/notificationSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    try {
      if (userData) return;
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.status == 401) {
        navigate("/login");
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (!userData?._id) return;

    const socket = createSocketConnection();
    
    // Announce to the server that we are online globally
    socket.emit("userConnected", { userId: userData._id });

    // Named handler to allow precise removal (no stacking on singleton)
    const handleNewNotification = () => {
      dispatch(addNotification());
    };

    socket.on("newNotification", handleNewNotification);

    return () => {
      socket.off("newNotification", handleNewNotification);
    };
  }, [userData?._id, dispatch]);

  return (
    <div>
      <NavBar />
      <Outlet />
      {!location.pathname.startsWith("/chat") && <Footer />}
    </div>
  );
};

export default Body;
