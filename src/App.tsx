import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {superAppStore}  from "./store";
import { Provider } from "react-redux";
// Lazy load Site1 and Site2
const Site1 = lazy(() => import("../apps/site1/src/App/"));
const Site2 = lazy(() => import("../apps/site2/src/App"));

function App() {
  return (
    <Provider store={superAppStore}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/site1">Go to Site 1</Link>
            </li>
            <li>
              <Link to="/site2">Go to Site 2</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/site1/*" element={<Site1 />} />
            <Route path="/site2/*" element={<Site2 />} />
            <Route path="/" element={<h2>Welcome to Super Site</h2>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
