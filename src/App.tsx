import Home from "./components/client/home";
import LowerMenu from "./components/shared/clientLowerMenu";
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <Home></Home>
      <LowerMenu></LowerMenu>
    </div>
  );
}
export default App;
