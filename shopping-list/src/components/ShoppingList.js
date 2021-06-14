import React from "react";
import ShoppingListItem from "./ShoppingListItem";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

import "./ShoppingList.css";

const ShoppingList = (props) => {
  return (
    <div className="shopping-list">
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
        <div className ='shopping-list__header'>Shopping List! Click me!</div>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <ShoppingListItem/>
        <ShoppingListItem/>
        <ShoppingListItem/>
        <ShoppingListItem/>
        <ShoppingListItem/>
        <ShoppingListItem/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    </div>
  );
};

export default ShoppingList;
