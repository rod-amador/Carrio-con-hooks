import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

export const InputForm = (props) => {
  const { updateList } = props;
  const initialInputState = { product: "", cost: "" };

  const [eachEntry, setEachEntry] = useState(initialInputState);
  const { product, cost } = eachEntry;

  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };

  const handleFinalSubmit = (e) => {
    updateList(eachEntry);
  };

  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
          <h2>Product Inventary</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form>

            <FormGroup>
              <Label for="product">Producto</Label>
              <Input
                name="product"
                placeholder="Nombre del producto"
                onChange={handleInputChange}
                value={product}
              ></Input>
            </FormGroup>

            <FormGroup>
              <Label for="cost">Costo</Label>
              <Input
                name="cost"
                placeholder="$$$"
                onChange={handleInputChange}
                value={cost}
              ></Input>
            </FormGroup>

            <Button onClick={handleFinalSubmit}>Agregar Producto</Button>

          </Form>
        </Col>
      </Row>
    </div>
  );
};