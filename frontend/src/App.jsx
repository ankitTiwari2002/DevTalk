import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./component/Body";
import Login from "./component/Login";
import Profile from "./component/Profile";
import Feed from "./component/Feed";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Connection from "./component/Connection.jsx";
import Request from "./component/Request.jsx";
import RefundPolicy from "./component/RefundPolicy.jsx";
import Premium from "./component/Premium.jsx";
import TermsAndConditions from "./component/TermsAndConditions.jsx";
import PrivacyPolicy from "./component/PrivacyPolicy.jsx";
import ContactUs from "./component/ContactUs.jsx";
import HelpAndSupport from "./component/HelpAndSupport.jsx";
import FAQs from "./component/FAQs.jsx";
import Chat from "./component/Chat.jsx";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connection" element={<Connection />} />
              <Route path="/chat/:targetUserId" element={<Chat />} />
              <Route path="/request" element={<Request />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/help" element={<HelpAndSupport />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
