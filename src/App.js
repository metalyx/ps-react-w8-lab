import './App.css';
import ProductForm from './components/ProductForm';
import GlobalContextProvider from './contexts/GlobalContextProvider';
import ProductList from './components/ProductList';

function App() {
    return (
        <div className='App'>
            <GlobalContextProvider>
                <ProductForm />
                <ProductList />
            </GlobalContextProvider>
        </div>
    );
}

export default App;
