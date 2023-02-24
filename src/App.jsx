import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import  Globalstyle  from "./Globalstyle";
import Router from "./router/Router";
const queryClient = new QueryClient();
const App =()=> {
  return (
    <QueryClientProvider client={queryClient}>
      <Globalstyle />
      <Router />
    </QueryClientProvider>
  )

}

export default App;
