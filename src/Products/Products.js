import React, { Component } from 'react'
import nanoid from 'nanoid'
import './Products.css'
import './ProductCarousel.css'
import './Basket.css'


const BasketTable = (props) => {
  const rows = Object.values(props.basket).map(product => 
    <tr key={nanoid()}>
      <td className="remove">
        <button onClick={(e) => props.removeFromBasket(product.title, e)}>
          <i className="fas fa-times"></i>
        </button>
      </td>
      <td className="title">{product.title}</td>
      <td className="quantity">x{product.quantity}</td>
      <td className="total-price">£{Number.parseFloat(product.totalPrice).toFixed(2)}</td>
    </tr>  
  )
  return (
    <table className="basket-table">
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

const BasketOverlay = (props) => (
  <div className="basket-overlay">
    <button 
      className="back"
      onClick={props.close}>
      <i className="fas fa-times"></i>
    </button>
    <h1 className="total">Total: £{Number.parseFloat(props.totalPrice).toFixed(2)}</h1>
    <BasketTable basket={props.basket} 
      removeFromBasket={props.removeFromBasket}
    />
  </div>
)
const Footer = (props) => (
  <footer className="footer">
    <button className="basket" onClick={props.openBasket}>
      {props.basketSize} items 
      <i className="fas fa-shopping-cart"></i>
    </button>
    
    <button 
      className="add"
      onClick={props.addToBasket}>
      Add 
      <i className="fas fa-plus"></i>
    </button>
    
    <button className="next">
      <span className="retailer-logo">Asda</span>
      <i className="fas fa-chevron-right"></i>
    </button>
  </footer>
)

const Carousel = (props) => (
  <div className="carousel">
    <div className="product-image far-left-product">
      <img id="far-left-product-img" src={props.products[0].img} alt=""/>
    </div>
    <div className="product-image left-product">
      <img id="left-product-img" src={props.products[1].img} alt=""/>
    </div>
    <div className="product-image primary-product">
      <img id="primary-product-img" src={props.products[2].img} alt=""/>
    </div>
    <div className="product-image right-product">
      <img id="right-product-img" src={props.products[3].img} alt=""/>
    </div>
    <div className="product-image far-right-product">
      <img id="far-right-product-img" src={props.products[4].img} alt=""/>
    </div>
  </div> 
)

class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: this.props.products,
      basket: {}
    }

    this.handleMoveLeft = this.handleMoveLeft.bind(this);
    this.handleMoveRight = this.handleMoveRight.bind(this);
    this.handleAddToBasket = this.handleAddToBasket.bind(this);
    this.handleRemoveFromBasket = this.handleRemoveFromBasket.bind(this);
    this.handleOpenOverlay = this.handleOpenOverlay.bind(this);
    this.handleCloseOverlay = this.handleCloseOverlay.bind(this);
  }

  handleMoveLeft(){
    document.getElementsByClassName('carousel')[0].classList.add("move-left");
    setTimeout(() => {
      document.getElementsByClassName('carousel')[0].classList.remove("move-left");
      this.setState(state => ({
        products: rotateArrayLeft(state.products)
      }))
    },500)
  }

  handleMoveRight(){
    document.getElementsByClassName('carousel')[0].classList.add("move-right");
    setTimeout(() => {
      document.getElementsByClassName('carousel')[0].classList.remove("move-right");
      this.setState(state => ({
        products: rotateArrayRight(state.products)
      }))
    },500)
  }

  handleAddToBasket(){
    const updatedBasket = Object.assign({}, this.state.basket);
    const productTitle = this.state.products[2].title;
    const productPrice = Number(this.state.products[2].price.slice(1));
    

    if(updatedBasket[productTitle]){
      updatedBasket[productTitle].quantity += 1;
      updatedBasket[productTitle].totalPrice = 
        updatedBasket[productTitle].quantity * updatedBasket[productTitle].price;
    }
    else {
      updatedBasket[productTitle] = {
        quantity: 1,
        price: productPrice,
        totalPrice: productPrice,
        title: productTitle
      };
    }

    this.setState({basket: updatedBasket});
  }

  handleRemoveFromBasket(productTitle, e){
    const updatedBasket = Object.assign({}, this.state.basket);
    delete updatedBasket[productTitle];
    this.setState({basket: updatedBasket});
  }

  handleOpenOverlay(){
    document.getElementsByClassName('basket-overlay')[0].classList.add('active');
  }

  handleCloseOverlay(){
    document.getElementsByClassName('basket-overlay')[0].classList.remove('active');
  }


  render(){
    const primary = this.state.products[2] //Primary product will be 3rd in the carousel
    //const basketSize = Object.values(this.state.basket).length ? Object.values(this.state.basket).reduce(sum) : 0
    const basketArray = Object.values(this.state.basket)

    // if(basketArray.length > 0){
    //   const totalBasketItems = basketArray.map(e => e.quantity).reduce(sum)
    //   const totalBasketPrice = basketArray.map(e => e.totalPrice).reduce(sum)
    // } else {
    //   const totalBasketItems = 0
    //   const totalBasketPrice = 0
    // }
   
    const totalBasketItems = basketArray.length > 0 ? basketArray.map(e => e.quantity).reduce(sum) : 0
    const totalBasketPrice = basketArray.length > 0 ? basketArray.map(e => e.totalPrice).reduce(sum) : 0

    return (
      <div className="products-container">
        <div className="products">
          <header className="header">
            <button 
              className="back"
              onClick={this.props.prevStep} 
              >
                <i className="fas fa-arrow-left"></i>
            </button>
            <h1 className="title">{primary.title}</h1>
          </header>
          
          <main>
            <div className="product-carousel-container">
              <button onClick={this.handleMoveLeft} className="previous"><i className="fas fa-chevron-left"></i></button>
              <Carousel products={this.state.products} />
              <button onClick={this.handleMoveRight} className="next"><i className="fas fa-chevron-right"></i></button>
              {primary.offer && <div className="offer">{primary.offer}</div>}
            </div>
            <div className="price">{primary.price}</div>
          </main>
          
          <Footer 
            primary={primary}
            basketSize={totalBasketItems}
            addToBasket={this.handleAddToBasket}
            openBasket={this.handleOpenOverlay}
          />
          <BasketOverlay 
            close={this.handleCloseOverlay}
            totalPrice={totalBasketPrice}
            basket={this.state.basket} 
            removeFromBasket={this.handleRemoveFromBasket}
            />
        </div>
      </div>
    )
  }
}

function rotateArrayRight(arr) {
  arr.unshift(arr.pop());
  return arr;
}

function rotateArrayLeft(arr) {
  arr.push(arr.shift());
  return arr
}

function sum(a,b) { return a + b }

export default Products