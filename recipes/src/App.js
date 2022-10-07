import Menu from './components/Menu'
import data from './data/recipes.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipes</h1>
      </header>
      <Menu recipes={data} />
    </div>
  );
}

export default App;
