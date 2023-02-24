import { QueryClient, QueryClientProvider } from "react-query";
import { Globalstyle } from "./Globalstyle";
import "./App.css";
import Router from "./router/Router";
function App() {

  return (
    <QueryClientProvider client={QueryClient}>
      <Globalstyle />
      <Router />
    </QueryClientProvider>
  )

}

export default App;
