import React from 'react';
//import logo from './logo.svg';
//import './UserTable.css';
import { withRouter } from 'react-router-dom';
import {Card, DataTable, Badge, Checkbox} from '@shopify/polaris';

function UserTable() {

  const rows = [
        [<Checkbox/>, '$875.00', 124689, 140, <Badge>Draft</Badge>],
        [<Checkbox/>, '$230.00', 124533, 83, <Badge>Draft</Badge>],
        [<Checkbox/>, '$445.00', 124518, 32, <Badge>Draft</Badge>],
  ];

  return (
      
    <Card sectioned>
        <DataTable
            columnContentTypes={[
              'text',
              'text',
              'text',
              'text',
              'text',
              'text',
            ]}
            headings={[
              <Checkbox/>,
              'ID',
              'Skill Name',
              'Section',
              'Status',
              '',
            ]}
            rows={rows}
            /*totals={['', '', '', 255, '$155,830.00','$155,830.00']}*/
          />
    </Card>
  );
}

export default UserTable;