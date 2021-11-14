// import books from "./components/booksapi";

// import ChapDisplay from './components/ChapDisplay';
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { GlobalStyle } from "./style/styles";
import { Annotations } from "./pages/Annotations";
import { AuthProvider } from "./components/context/authContext";
import { AuthRoute, PrivateRoute } from "./utils/AuthRoute";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/' element={<AuthRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route exact path='/' element={<PrivateRoute />}>
          <Route path="/annotations" element={ <Annotations /> } />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
