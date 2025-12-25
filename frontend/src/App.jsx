import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {
  return (
    <div data-theme="cupcake">
      {/* Adding react router to app */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/notes/:id" element={<NoteDetailPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
