import React, {useState, useEffect} from 'react'
import Header from "./Components/Header";
import Products from "./Components/Products";
import Footer from './Components/Footer';
import AddItem from './Components/AddItem';


function App() {
  const [product , setProduct] = useState([]);
  const [totalAmount , setTotalAmount] = useState(0);
  useEffect(() => {
    const products = [
      {
        name: "Iphonex",
        price: 9999,
        qty: 0
      },
      {
        name: "Redmi",
        price: 999,
        qty: 0
      },
      {
        name: "Moto",
        price: 99,
        qty: 0
      }
    ]
    setProduct(products)
  },[]);
  
  const incrementqty = function(index){
    let newProduct = [...product]
    let newTotalAmount = totalAmount;
    newProduct[index].qty++;
    newTotalAmount += newProduct[index].price;
    setTotalAmount(newTotalAmount);
    setProduct(newProduct);
  }
  
  const decreaseQty = function(index){
    let newTotalAmount = totalAmount;
    if(product[index].qty!=0){
    let newProduct = [...product]
     newProduct[index].qty--
     newTotalAmount -= newProduct[index].price; 
     setTotalAmount(newTotalAmount);
    setProduct(newProduct);
    }
  }
  const reset = function(){
    let newProduct = [...product];
    newProduct.map(function(products){
      products.qty = 0;
    })
    setProduct(newProduct);
    setTotalAmount(0);
  }
  const remove = function(index){
    let newProduct = [...product];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProduct[index].qty * newProduct[index].price
    newProduct.splice(index,1);
    setProduct(newProduct)
    setTotalAmount(newTotalAmount);
  }

  const addItem =  function(name,price){
    let newProduct = [...product];
    newProduct.push({
      price:price,
      name:name,
      qty:0
    })
    setProduct(newProduct)
  }



  return (
    <>
    <Header/>
    <main className="container mt-5">
    <AddItem addItem={addItem}/>
    <Products 
    productItem={product} 
    incrementqty = {incrementqty} 
    decreaseQty={decreaseQty}
    remove={remove}/>
    </main>
    <Footer totalAmount={totalAmount} reset={reset}/>
    </>
  );
}

export default App;
