import React from "react";

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productName:"",
            productPrice: ''
        }

    }
  render() {
    return (
      <form className="row mb-5 " onSubmit={(e) => {
        e.preventDefault();
        this.props.addItem(this.state.productName,Number(this.state.productPrice));
      }}>
        <div className="mb-3 col-5">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Item Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="productName"
            onChange={(e)=>{
                this.setState({productName: e.currentTarget.value})
            }}
            value = {this.state.productName}
          />
        </div>
        <div className="mb-3 col-5">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            name="productPrice"
            onChange={(e)=>{
                this.setState({productPrice: Number(e.currentTarget.value)})
            }}
            value = {this.state.productPrice}
            placeholder="0"
          />
        </div>
      
        <button
          type="submit"
          className="btn btn-sm btn-outline-success col-1 "
          disabled = {this.state.productName === '' && this.state.productPrice === 0}
        >
          Add Item
        </button>
      
      </form>
    );
  }
}

export default AddItem;
