import { BrowserRouter, Routes, Route } from "react-router-dom";

import DisabledTabs from "./Components/Navbar";

import { SignUpPage } from "./Components/SignUpPage";
import { LogInPage } from "./Components/LoginPage";
import Users from "./Components/Users";
import UsersContext from "./Module/UsersModule";
// import { AuthContext } from "./Module/AuthProvider.jsx";
import { RequireAuth } from "./Components/RequireAuth";
function App() {
  return (
    <>
      {" "}
      <UsersContext>
        <BrowserRouter>
          <DisabledTabs />
          <Routes>
            <Route index element={<SignUpPage />} />

            <Route path="login" element={<LogInPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route element={<RequireAuth />}>
              <Route path="users" element={<Users />} />
            </Route>
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </UsersContext>
    </>
  );
}

export default App;
