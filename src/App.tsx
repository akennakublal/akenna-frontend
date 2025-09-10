import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="p-0 m-0">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
