import React from "react";

import PropTypes from "prop-types";

// components
import Table from "react-bootstrap/Table";

const BasicTable = ({ data, className, template }) => {
  return (
    <div className={`document-table-section ${className}`}>
      <Table striped bordered hover responsive>
        <thead>
          {data.title ? (
            <tr>
              <th colSpan={data.columns.length}> {data.title} </th>
            </tr>
          ) : null}
          <tr>
            {data.columns.map((column) => (
              <th key={column.field}> {column.label} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((rowData) => (
            <tr key={rowData.id}>
              {data.columns.map((column) => (
                <td key={column.field}>
                  {template(rowData[column.field], column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

BasicTable.defaultProps = {
  className: "",
  template: (cellValue) => cellValue || "",
};

BasicTable.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    columns: PropTypes.arrayOf(
      PropTypes.exact({
        field: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  className: PropTypes.string,
  template: PropTypes.func,
};

export default BasicTable;
