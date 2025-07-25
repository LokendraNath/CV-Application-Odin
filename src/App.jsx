import "./App.css";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] grid-cols-[400px_1fr]">
      <Header />
      <Nav />
      <Content />
    </div>
  );
}

export default App;
