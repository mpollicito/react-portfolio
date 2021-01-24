import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#"><em>Matthew Pollicito</em></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home/About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="portfolio.html">Portfolio</a><span class="sr-only">(current)</span>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="contact.html">Contact Info</a>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default App;
