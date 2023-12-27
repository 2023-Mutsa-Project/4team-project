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
import React, { useEffect } from 'react'; 
import { Routes, Route, useLocation } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux';
import { authUser } from './store/thunkFunctions';
//import ProtectedRoutes from './authroutes/ProtectedRoutes';
//import NotAuthRoutes from './authroutes/NotAuthRoutes';

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

  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user?.isAuth);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isAuth) { //인증했을 경우에만 올바른 토큰인지 확인 요청
      dispatch(authUser());
    }
  }, {isAuth, pathname, dispatch})

  return (
    <div className="App">

      <ToastContainer 
        position='bottom-right'
        theme='light'
        pauseOnHover
        autoClose={1500}
      />

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

{/* 이 Route들의 경우, 로그인 된 사람들만 접근 가능 (아래는 예시)
        <Route element={<ProtectedRoutes isAuth={isAuth}/>}>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/discussion" element={<Discussion/>}/>
        </Route>

이 Route들의 경우, 로그인 안된 사람들만 접근 가능 (아래는 예시)
        <Route element={<NotAuthRoutes isAuth={isAuth}/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sign />} />
        </Route> */}

      </Routes>
    
    </div>
  );
}

export default App;
