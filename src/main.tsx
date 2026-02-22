import ReactDOM from "react-dom/client";
import { AuthProvider } from "./contexts/AuthContext";
import { QueryProvider } from "./setupQueries";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AuthProvider>
    <QueryProvider>
      <App />
    </QueryProvider>
  </AuthProvider>
);
