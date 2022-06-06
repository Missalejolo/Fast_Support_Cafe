import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="inicio" element={<App />}>
        <Route path="desfragmentaciondisco" element={<Desfragmentaciondisco />}>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);