import css from 'bootstrap/dist/css/bootstrap.min.css';

class navBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
          ${css}
          .navbar{
            color: white;
          }
          nav a {
              font-size: 18px;
              font-weight: 400;
              text-decoration: none;
              color: white;
          }
          nav ul li a {
              color: white;
          }
          
          nav ul li a:hover {
              font-weight: bold;
              transition: all .3s ease-in-out;
          }     
        </style>
        <nav class="navbar navbar-expand-lg p-2 fs-5">
        <div class="container-fluid">
            <a class="navbar-brand">
            Covinfo
            </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#global" >Global</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#indo">Indonesia</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#negara">Negara Lain</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        `;
    }
}

customElements.define("nav-bar", navBar);