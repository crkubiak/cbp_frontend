import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class ProjectList extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.projects}>
          <TableHeaderColumn isKey dataField='id'> ID </TableHeaderColumn>
          <TableHeaderColumn dataField='project_name'> Name </TableHeaderColumn>
          <TableHeaderColumn dataField='project_cross_one'> Cross Street </TableHeaderColumn>
          <TableHeaderColumn dataField='project_cross_two'> Cross Street </TableHeaderColumn>
          <TableHeaderColumn dataField='project_city'> Description </TableHeaderColumn>
          <TableHeaderColumn dataField='project_state'> Description </TableHeaderColumn>
          <TableHeaderColumn dataField='project_zip'> Description </TableHeaderColumn>
          <TableHeaderColumn dataField='project_submitter'> Description </TableHeaderColumn>
          <TableHeaderColumn dataField='project_phone'> Description </TableHeaderColumn>
          <TableHeaderColumn dataField='project_email'> Description </TableHeaderColumn>
          <TableHeaderColumn dataField='project_description'> Description </TableHeaderColumn>
          <TableHeaderColumn dataField='project_status'> Description </TableHeaderColumn>
          <TableHeaderColumn dataField='created_at'> Description </TableHeaderColumn>
          <TableHeaderColumn dataField='updated_at'> Description </TableHeaderColumn>
        </BootstrapTable>
      </div>
      
    );
  }
}
export default ProjectList;
