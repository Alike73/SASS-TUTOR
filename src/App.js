import Blog from './shared/ui/Blog/Blog';
import { Stack } from './shared/ui/Stack/Stack';

function App() {
  return (
    <div className="App">
      <Stack justify='justifyCenter' align='alignStart' wrap='flexWrap' max>
        <div className='square_1' style={{width: '150px', height: '150px', backgroundColor: 'red', margin: '5px'}}>
          😀
        </div>
        <div className='square_2' style={{width: '150px', height: '150px', backgroundColor: 'blue', margin: '5px'}}>
          😄
        </div>
        <div className='square_3' style={{width: '150px', height: '150px', backgroundColor: 'green', margin: '5px'}}>
          😁
        </div>
      </Stack>

      <Stack justify='justifyBetween' align='alignStart' wrap='flexWrap' direction='directionColumn'>
        <div className='square_4' style={{width: '150px', height: '150px', backgroundColor: 'red', margin: '5px'}}>
          😆
        </div>
        <div className='square_5' style={{width: '150px', height: '150px', backgroundColor: 'blue', margin: '5px'}}>
          🤣
        </div>
        <div className='square_6' style={{width: '150px', height: '150px', backgroundColor: 'green', margin: '5px'}}>
          😅
        </div>
      </Stack>

      <Blog />
    </div>
  );
}

export default App;
