import React, { Component } from 'react'
import './Products.css'
import './ProductCarousel.css'

const BasketOverlay = (props) => (
  <div className="basket-overlay">
    <button 
      className="back"
      onClick={props.close}>
        x</button>
    <h1>Total: £0.00</h1>
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
    if(updatedBasket[productTitle]){
      updatedBasket[productTitle] += 1;
    }
    else {
      updatedBasket[productTitle] = 1;
    }

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
    const basketSize = Object.values(this.state.basket).length ? Object.values(this.state.basket).reduce(sum) : 0
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
            basketSize={basketSize}
            addToBasket={this.handleAddToBasket}
            openBasket={this.handleOpenOverlay}
          />
          <BasketOverlay 
            close={this.handleCloseOverlay} />
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