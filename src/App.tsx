import './Assets/Styles/index.css';
import Aside from './Modules/Aside/Aside';
import Products from './Pages/Products/Products';

function App() {
  return (
    <>
      <Aside />
      <div className='relative ml-p26 flex items-center h-screen pr-4'>
        <Products />
      </div>
    </>
  );
}

export default App;
