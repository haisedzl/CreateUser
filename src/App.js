import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ShowUser from "./Component/ShowUser";
import AddUser from "./Component/AddUser";
import EditUser from "./Component/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ShowUser />} />
          <Route path="add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
