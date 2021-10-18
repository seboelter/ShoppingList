import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import "./ShoppingList.css";


const ShoppingForm = (props) => {

    const handleClick = (e) =>
    {
        console.log(e.target)
    }

  return (
    <div className="shopping-list">
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Shopping List Item</Form.Label>
                <Form.Control type="text" placeholder="Item Name" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" placeholder="#" />
            </Form.Group>

        <Button 
            variant="primary" 
            type="submit"
            onSubmit={handleClick}>
            Submit
        </Button>
        </Form>
    </div>
  );
};

export default ShoppingForm;
