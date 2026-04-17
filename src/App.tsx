import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    // Root app container, applies global font and resets padding/margin
    <div className="font-body p-0 m-0 min-h-screen">
      {/* Router wraps all routes for SPA navigation */}
      <Router>
        {/* AppRoutes handles all route definitions */}
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
