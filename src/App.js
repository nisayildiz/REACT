import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react"
import Navi from'./Navi';
import CategoryList from"./CategoryList";
import ProductList from"./ProductList";
import{Container,Row,Col} from "reactstrap"
export default class App extends Component{
  state={currentCategory:"",products:[],cart:[]};

  componentDidMount(){
    this.getProducts();
}
  changeCategory=(category)=>{
    this.setState({currentCategory:category.categoryName})
    console.log(category);
    this.getProducts(category.id);

  };
  getProducts=(categoryId)=>{
    let url="http/localhost:3000/products";
    if(categoryId){
      url+="?categoryId="+categoryId;

    }
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({products:data}));;

}
addToCart=(product)=>{
  let newCart=this.state.cart;
  var  addedItem=newCart.find(c=>c.product.id===product.id);
  if(addedItem){
    addedItem.quantity+=1;
  }else{
    newCart.push({product:product,quantity:1});

  }
 
 this.setState({cart:newCart});
}

   
  render(){
   let productInfo={title:"Product List"}
   let categoryInfo={title:"Category  List"}
    return (
      <div >
  
        <Container>
  
          
            <Navi cart={this.state.cart}/>
  
       
  
          <Row>
            
           
          </Row>
          <Col x="3">
            <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}/> 
          </Col>
          <Col x="9">
            <ProductList 
            products={this.state.products}
            addToCart={this.adddToCart}
            currentCategory={this.state.currentCategory} info={productInfo}/>
          </Col>
  
  
  
         
        </Container>
      
      
      </div>
    );

  }
} 



