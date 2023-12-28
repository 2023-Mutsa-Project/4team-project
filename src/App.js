import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookForum from "./routes/BookForum";
import BookForumDetail from "./routes/BookForumDetail";
import BookForumForm from "./routes/BookForumForm";
import BookSearch from "./routes/BookSearch";
import BookReview from "./routes/BookReview";
import BookReviewDetail from "./routes/BookReviewDetail";
import BookReviewForm from "./routes/BookReviewForm";
import Login from "./routes/Login";
import RegisterForm from "./routes/RegisterForm";
import Profile from "./routes/Profile";
import Home from "./routes/Home"
import { Index0 } from "./screens/Index/Index0.jsx";
import { Index1 } from "./ActivityPage/screens/Index/Index1.jsx";
import { Index2 } from "./TypetestPage/screens/Index/Index2.jsx";
import { Index3 } from "./QuizPage/screens/Index/Index3.jsx";
import { Index4 } from "./TypetestResultPage/screens/Index/Index4.jsx";
import { Index5 } from "./TypeTestResultPage-2/screens/Index/Index5.jsx";
import { Index6 } from "./EventPage/screens/Index/Index6.jsx";
import { Index7 } from "./EventDetailPage/screens/Index/Index7.jsx";
import { Index8 } from "./TypetestTestPage/screens/Index/Index8.jsx";
import { Index9 } from "./QuizQuestionPage/screens/Index/Index9.jsx";
import { Index10 } from "./QuizResultPage/screens/Index/Index10.jsx";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activity" element={<Index1 />} />
      <Route path="/typetest" element={<Index2 />} />
      <Route path="/quiz" element={<Index3 />} />
      <Route path="/typetest-result" element={<Index4 />} />
      <Route path="/typetest-result-2" element={<Index5 />} />
      <Route path="/event" element={<Index6 />} />
      <Route path="/eventdetail" element={<Index7 />} />
      <Route path="/typetest-test" element={<Index8 />} />
      <Route path="/quiz-questions" element={<Index9 />} />
      <Route path="/quiz-result" element={<Index10 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/review/post" element={<BookReviewForm />} /> 
      <Route path="/review" element={<BookReview />} />
      <Route path="/search" element={<BookSearch />} />
      <Route path="/review/:id" element={<BookReviewDetail />} />
      <Route path="/discussion" element={<BookForum />} />
      <Route path="/discussion/:id" element={<BookForumDetail />} />
      <Route path="/discussion/post" element={<BookForumForm />} />
      </Routes>
    </Router>
  );
}

export default App;
