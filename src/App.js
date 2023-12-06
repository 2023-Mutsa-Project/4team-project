import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import BookForum from './routes/BookForum';
import BookForumForm from './routes/BookForumForm';
import BookSearch from './routes/BookSearch';
import BookReview from './routes/BookReview';
import BookReviewForm from './routes/BookReviewForm';
import Login from './routes/Login';
import RegisterForm from './routes/RegisterForm';
import Profile from './routes/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <RegisterForm />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/review/post">
          <BookReviewForm />
        </Route>
        <Route path="/review">
          <BookSearch />
        </Route>
        <Route path="/review/:id">
          <BookReview />
        </Route>
        <Route path="/discussion">
          <BookForum />
        </Route>
        <Route path="/discussion/post">
          <BookForumForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
