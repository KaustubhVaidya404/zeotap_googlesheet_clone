import Hero from "./pages/hero";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Hero />
    </Provider>
  );
}

export default App;
