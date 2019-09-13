import React from 'react';
import { MDBTable, MDBTableBody } from 'mdbreact';

const ServiceList = (props) => {

  return (
    <MDBTable>
      <MDBTableBody>
        <tr>
          <td>Tuition</td>
          <td>{props.tuition}</td>
        </tr>
        <tr>
          <td>Supplies & Materials Fee</td>
          <td>{props.supplies}</td>
        </tr>
        <tr>
          <td>Application fee</td>
          <td>{props.application}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default ServiceList;
