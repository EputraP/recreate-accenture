import "./App.scss";
import HeaderComponent from "./component/header/header";
import Home from "./component/home/home";

function App() {
  return (
    <div className="container-responsive">
      <header>
        <HeaderComponent />
      </header>
      <main>
        <Home />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
