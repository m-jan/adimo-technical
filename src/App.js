import React, { Component } from 'react';
import './App.css';
import Banner from './Banner/Banner'
import Retailers from './Retailers/Retailers';
import Products from './Products/Products';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: PRODUCTS 
    }

    this.navigateFromBannerToRetailers = this.navigateFromBannerToRetailers.bind(this)
    this.navigateFromRetailersToBanner = this.navigateFromRetailersToBanner.bind(this)
    
    this.navigateFromRetailersToProducts = this.navigateFromRetailersToProducts.bind(this)
    this.navigateFromProductsToRetailers = this.navigateFromProductsToRetailers.bind(this)
  }

  navigateFromBannerToRetailers(){
    document.getElementsByClassName('retailers')[0].classList.add('active');
  }

  navigateFromRetailersToBanner(){
    document.getElementsByClassName('retailers')[0].classList.remove('active');
  }

  navigateFromRetailersToProducts(){
    document.getElementsByClassName('products-container')[0].classList.add('active');
  }

  navigateFromProductsToRetailers(){
    document.getElementsByClassName('products-container')[0].classList.remove('active');
  }


  render() {
    return (
    <div className="mpu">
      <Banner 
        nextStep={this.navigateFromBannerToRetailers} />
      
      <Retailers 
        prevStep={this.navigateFromRetailersToBanner} 
        nextStep={this.navigateFromRetailersToProducts} 
        />
      
      <Products 
        prevStep={this.navigateFromProductsToRetailers}
        products={this.state.products} />
    </div>
    );
  }
}

const PRODUCTS = [
  {'title': 'KitKat 2 Finger Cookies & Cream Chocolate Biscuit Bar, 16 Pack 16x20g',
   'price': '£2.50',
   'img': 'https://ui.assets-asda.com/g/v5/536/593/7613035536593_280_IDShot_3.jpeg',
   'offer': ''
  },
  {'title': 'KitKat 2 Finger Lemon Drizzle Chocolate Biscuit Bar, 9 Pack 9x20.7',
   'price': '£1.00',
   'img': 'https://ui.assets-asda.com/g/v5/187/824/7613036187824_280_IDShot_3.jpeg',
   'offer': 'Save £0.99'
  },
  {'title': 'KitKat 2 Finger Dark Chocolate Biscuit Bar, 9 Pack 9x20.7',
   'price': '£1.00',
   'img': 'https://ui.assets-asda.com/g/v5/099/387/7613036099387_280_IDShot_3.jpeg',
   'offer': 'Save £0.99'
  },
  {'title': 'KitKat 2 Finger Cookies & Cream Chocolate Biscuit Bar, 16 Pack 16x20g',
  'price': '£2.50',
  'img': 'https://ui.assets-asda.com/g/v5/536/593/7613035536593_280_IDShot_3.jpeg',
  'offer': ''
  },
  {'title': 'KitKat 2 Finger Lemon Drizzle Chocolate Biscuit Bar, 9 Pack 9x20.7',
    'price': '£1.00',
    'img': 'https://ui.assets-asda.com/g/v5/187/824/7613036187824_280_IDShot_3.jpeg',
    'offer': 'Save £0.99'
  }
]



export default App;
