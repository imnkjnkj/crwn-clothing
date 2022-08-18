import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route, Outlet } from "react-router-dom";
function App() {
  const Shop = () => {
    return <h1>hello</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Shop />} />
        <Route path="/sign-in" element={<Shop />} />

      </Route>

      {/* /home/shop */}
    </Routes>
  );
}

export default App;