import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Content from "./component/Content/Content";
import Dialogs from "./component/Dialogs/Dialogs";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Friend from "./component/Friend/Friend";
import Profile from "./component/Profile/Profile";
import Setting from "./component/Setting/Setting";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main">
          <Navbar state={props.state.navBar} />

          <Routes>
            <Route
              path="/dialogs/*"
              element={<Dialogs state={props.state.messagesPage} />}
            />
            <Route
              path="/profile"
              element={<Profile state={props.state.profilePage} />}
            />
            <Route path="/setting" element={<Setting />} />
            <Route
              path="/photo"
              element={<Friend state={props.state.navBar} />}
            />
            <Route path="/friends" element={<Content />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
