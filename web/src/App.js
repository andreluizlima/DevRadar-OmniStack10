import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

//Componente: Bloco isolado de HTML, CSS e JS, que não interfere no resto da aplicação.
//Propriedade: Informações que um componente PAI passa para o componente filho.
//Estado: Informações mantidas pelo componente (lembrar da imutabilidade, sempre recria a const)

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Sign-Up</strong>
        <form>

          <div className="input-block">
            <label htmlFor="github_username">Git Username</label>
            <input type="text" name="github_username" id="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Techs</label>
            <input type="text" name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" name="longitude" id="longitude" required/>
            </div>
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name="latitude" id="latitude" required/>
            </div>

          </div>

          <button type="submit">Submit</button>
        </form>
      </aside>
      
      <main>
        <ul>
        <li className = "dev-item">
            <header>
              <img src="https://scontent.fbfh1-2.fna.fbcdn.net/v/t1.0-9/82535732_2514864655288786_9100995254516973568_n.jpg?_nc_cat=107&_nc_ohc=o4CMeJmlw1gAX86eOS8&_nc_ht=scontent.fbfh1-2.fna&oh=8465736f0ff0f7fe19c80a5692b47c44&oe=5E948B24" alt="André Luiz Lima"/>
              <div className="user-info">
                <strong>André Luiz Lima</strong>
                <span>Flutter, Java, Java EE, React, Node.js</span>
              </div>
            </header>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <a href="https://github.com/andreluizlima">Acessar perfil no GitHub</a>
          </li>

          <li className = "dev-item">
            <header>
              <img src="https://scontent.fbfh1-2.fna.fbcdn.net/v/t1.0-9/82535732_2514864655288786_9100995254516973568_n.jpg?_nc_cat=107&_nc_ohc=o4CMeJmlw1gAX86eOS8&_nc_ht=scontent.fbfh1-2.fna&oh=8465736f0ff0f7fe19c80a5692b47c44&oe=5E948B24" alt="André Luiz Lima"/>
              <div className="user-info">
                <strong>André Luiz Lima</strong>
                <span>Flutter, Java, Java EE, React, Node.js</span>
              </div>
            </header>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <a href="https://github.com/andreluizlima">Acessar perfil no GitHub</a>
          </li>

          <li className = "dev-item">
            <header>
              <img src="https://scontent.fbfh1-2.fna.fbcdn.net/v/t1.0-9/82535732_2514864655288786_9100995254516973568_n.jpg?_nc_cat=107&_nc_ohc=o4CMeJmlw1gAX86eOS8&_nc_ht=scontent.fbfh1-2.fna&oh=8465736f0ff0f7fe19c80a5692b47c44&oe=5E948B24" alt="André Luiz Lima"/>
              <div className="user-info">
                <strong>André Luiz Lima</strong>
                <span>Flutter, Java, Java EE, React, Node.js</span>
              </div>
            </header>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <a href="https://github.com/andreluizlima">Acessar perfil no GitHub</a>
          </li>

          <li className = "dev-item">
            <header>
              <img src="https://scontent.fbfh1-2.fna.fbcdn.net/v/t1.0-9/82535732_2514864655288786_9100995254516973568_n.jpg?_nc_cat=107&_nc_ohc=o4CMeJmlw1gAX86eOS8&_nc_ht=scontent.fbfh1-2.fna&oh=8465736f0ff0f7fe19c80a5692b47c44&oe=5E948B24" alt="André Luiz Lima"/>
              <div className="user-info">
                <strong>André Luiz Lima</strong>
                <span>Flutter, Java, Java EE, React, Node.js</span>
              </div>
            </header>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <a href="https://github.com/andreluizlima">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
