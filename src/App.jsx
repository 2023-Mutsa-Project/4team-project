// import React from 'react';
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// // // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Index0 from "./screens/Index/Index.jsx";
// import Index1 from "./ActivityPage/screens/Index/Index1.jsx";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route index element={<Index0 />} path="/main" />
//     <Route element={<Index1 />} path="/activity" />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

// function App() {
//     return <RouterProvider router={router} />;
// }

//참고 코드
// const routeDefinitions = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/main" element={Index0} />
//         <Route path="/activity" element={Index1} />
//         {/* 다른 라우트 설정 추가 */}
//       </Routes>
//     </Router>
//   );
// };

//chatGPT 코드
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    //<BrowserRouter>
      <Router>
        <Routes>
          <Route path="/" element={<Index0 />} />
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
        </Routes>
      </Router>
    //</BrowserRouter>
  );
}

export default App;
