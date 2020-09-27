import React from "react";
import { Row, Col, Table } from "reactstrap";

export const OutputList = props => {
  const { list } = props;
  return (

    <div className="mt-4">
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Producto</th>
                <th>Costo</th>
                <th>IVA</th>
                <th>Total</th>

              </tr>
            </thead>
            <tbody>
              <TableData list={list} />
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

const TableData = props => {
  const { list } = props;
  var count = 0;
  const finalArray = list.sort((a, b) => b.cost - a.cost);

  
  return Object.keys(finalArray).map((i, o) => {
    const { product, cost } = finalArray[i];
    count = count + 1;
    
    return (
      <tr key={count.toString(10)}>
        <th scope="row">{count.toString(10)}</th>
        <td>{product}</td>
        <td>{cost}</td>
        <td>{(cost*0.16).toFixed(0)}</td>
        <td>{(cost*1.16).toFixed(0)}</td>
      </tr>
    );
  });
};