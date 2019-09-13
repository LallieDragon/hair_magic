import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';

const PriceList = (props) => {
  console.log(props)

  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th>{props.content.title}</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>

      </MDBTableBody>
    </MDBTable>
  );
}

export default PriceList
