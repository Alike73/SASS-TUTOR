import './App.css';
import { Stack } from './shared/ui/Stack/Stack';

function App() {
  return (
    <div className="App">
      <Stack justify='justifyCenter' align='alignStart' wrap='flexWrap' max>
        <div style={{width: '150px', height: '150px', backgroundColor: 'red', margin: '5px'}}></div>
        <div style={{width: '150px', height: '150px', backgroundColor: 'blue', margin: '5px'}}></div>
        <div style={{width: '150px', height: '150px', backgroundColor: 'green', margin: '5px'}}></div>
      </Stack>

      <Stack justify='justifyBetween' align='alignStart' wrap='flexWrap' direction='directionColumn'>
        <div style={{width: '150px', height: '150px', backgroundColor: 'red', margin: '5px'}}></div>
        <div style={{width: '150px', height: '150px', backgroundColor: 'blue', margin: '5px'}}></div>
        <div style={{width: '150px', height: '150px', backgroundColor: 'green', margin: '5px'}}></div>
      </Stack>
    </div>
  );
}

export default App;
