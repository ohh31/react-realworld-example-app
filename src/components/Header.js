import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="App-header">
      <nav class="navbar navbar-light">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            conduit
          </a>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              <a class="nav-link active" href="/">
                <Link to="/">Home </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/article">
                <i class="ion-compose"></i>&nbsp;New Article
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/setting">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Sign in
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/signup">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
