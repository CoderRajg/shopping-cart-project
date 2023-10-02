import React from 'react'
import Item from './Item'

export default function Products(props) {
    
  return (
    props.productItem.length > 0 ?
    props.productItem.map(function(items,i){
        return <Item 
        item={items} 
        key={i} 
        incrementqty = {props.incrementqty} 
        index={i} 
        decreaseQty={props.decreaseQty} 
        remove={props.remove}/>
    })
    : <h1>Oops! No Product...Add Some Products</h1>
  )
}
