import React, { Component } from 'react'
import {Table,Button} from "reactstrap"
export default class ProductList extends Component {
  
  render() {
    return (
      <div>
         <h3>{this.props.info.title}-{this.props.currentCategory}</h3>
         <Table>
  <thead>
    <tr>
   
      <th scope="col">#</th>
      <th scope="col">Product  Name</th>
      <th scope="col">Unit Price</th>
      <th scope="col">Quantity Per Unit</th>
      <th scope="col">Units In Stock</th>
      <th></th>

    </tr>
  </thead>
  <tbody>
  {
                this.props.products.categories.map(product=>(
                    <tr key={product.id}>

                      <th scope="row">{product.id}</th>
                      <td>{product.productName}</td>
                      <td>{product.unitPrice}</td>
                      <td>{product.quantityPerUnit}</td>
                      <td>{product.unitsInStock}</td>
                      <td><Button onClick={()=>this.props.addToCart(product)}color="info"> add</Button></td> 

                    </tr> 

                ))

            }
    
    </tbody>
</Table>
      </div>
    )
  }
}
