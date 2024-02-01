import { Router } from "./Router";
import { UserProvider } from "./contexts/user";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
