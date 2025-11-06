import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Formula1 from "./Formula1";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Formula1 selectedPhoto="enrico" />
    </>
  );
}

export default App;
