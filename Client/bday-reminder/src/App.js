import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-title">BIRTHDAY REMINDER APP</div>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-3 rounded-start person-image">
            <img src="..." class="img-fluid rounded-start" alt="#image"></img>
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <h5 class="card-title">#Name1</h5>
              <p class="card-text text-muted">#d.o.b1</p>
              <p class="card-text">#description1.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div class="row g-0">
          <div class="col-md-3 rounded-start person-image">
            <img src="..." class="img-fluid rounded-start" alt="#image"></img>
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <h5 class="card-title">#Name2</h5>
              <p class="card-text text-muted">#d.o.b2</p>
              <p class="card-text">#description2.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div class="row g-0">
          <div class="col-md-3 rounded-start person-image">
            <img src="..." class="img-fluid rounded-start" alt="#image"></img>
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <h5 class="card-title">#Name2</h5>
              <p class="card-text text-muted">#d.o.b2</p>
              <p class="card-text">#description2.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div class="row g-0">
          <div class="col-md-3 rounded-start person-image">
            <img src="..." class="img-fluid rounded-start" alt="#image"></img>
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <h5 class="card-title">#Name2</h5>
              <p class="card-text text-muted">#d.o.b2</p>
              <p class="card-text">#description2.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
