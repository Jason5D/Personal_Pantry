import Header from './Header.js';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import FilterableProductTable from './FilterableProductTable.js';
import {PRODUCTS} from './data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <FilterableProductTable products={PRODUCTS}/>
      <Footer />
    </div>
  );
}

export default App;
