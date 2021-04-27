// import { Provider } from "react-redux";
// import store from "./redux/store/store";
import Routes from "../src/routes/routes";
import Wrapper from "./components/wrapper.component";

function App() {
  return (
    //  <Provider store={store}>
    <Wrapper child={<Routes />} />
    //</Provider>
  );
}

export default App;
