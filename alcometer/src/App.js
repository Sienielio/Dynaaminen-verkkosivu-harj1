import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const [weight, setWeight] = useState(0)
  const [gender, setGender] = useState('male')
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [result, setResult] = useState(0)


  function calculate(e) {
    e.preventDefault();
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);
    
    

    
  }


  return (
    <>
    <h3>Veren alkoholipitoisuuden laskeminen</h3>
    <form onSubmit={calculate}>
      <div>
        <label>Paino: </label>
        <input name='weight' type='number' step='1' value={weight} onChange={e => setWeight(e.target.value)}  />
      </div>
      <div>
        <label>Tölkkejä: </label>
        <input name='bottles' type='number' step='1' value={bottles} onChange={e => setBottles(e.target.value)}  />
      </div>
      <div>
        <label>Aika (h) </label>
        <input name='weight' type='number' step='1' value={time} onChange={e => setTime(e.target.value)}  />
      </div>
      <div>
          <label>Sukupuoli: </label>
          <input type='radio' name='gender' value='male' defaultChecked onChange={e => setGender(e.target.value)} /><label>Mies</label>
          <input type='radio' name='gender' value='female' onChange={e => setGender(e.target.value)} /><label>Nainen</label>
        </div>
        <div>
          <output>{result}</output>
        </div>
        <button>Laske</button>
    </form>
    </>
  );
}

export default App;
