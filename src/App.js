import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

     <div className="head">
        <img src="https://img.icons8.com/ios/50/000000/test-account.png" alt="foto" className="imgProfile"/>
        <h1>Lorem Ipnum</h1>
      </div>

      <div className="desc">
        <h2>Descrizione</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quisquam cumque laudantium magni quidem laborum facere tempore sint labore numquam, nemo explicabo aperiam voluptatem eveniet. Repellendus necessitatibus iusto laborum cupiditate.</p>
      </div>


      <div className="expLangHob">
        <div className="exp">
          <h2>Esperienze Lavorative</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quisquam cumque laudantium magni quidem laborum facere tempore sint labore numquam, nemo explicabo aperiam voluptatem eveniet. Repellendus necessitatibus iusto laborum cupiditate.</p>
        </div>
      
        <div className="lang">
          <h2>Lingue</h2>
          <p>Sicuramente non latino, inglese: ottimo, francese: ottimo, italiano: ottimo.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quisquam cumque laudantium magni quidem laborum facere tempore sint labore numquam, nemo explicabo aperiam voluptatem eveniet. Repellendus necessitatibus iusto laborum cupiditate.
          </p>
        </div>

        <div className="hob">
          <h2>Hobby</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quisquam cumque laudantium magni quidem laborum facere tempore sint labore numquam, nemo explicabo aperiam voluptatem eveniet. Repellendus necessitatibus iusto laborum cupiditate.</p>
        </div>
      </div>

    <form className="contForm">
      <div className="cont">
        <h2>Contattami</h2>
        
          
          <label for="obj">Oggetto</label>
          <input type="text" name="obj" placeholder="Es: Contratto di lavoro"/>
          <label for="mes">Messaggio</label>
          <textarea name="mes" placeholder="Inserisci qui il testo"></textarea>
        </div>
      </form>
      
      
        <div className="email">
          LoremIps@hotmail.it
        </div>
      
    </div>

  );
}

export default App;
