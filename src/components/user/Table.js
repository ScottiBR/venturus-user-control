import React from "react";
import TableRows from "./TableRows";

const Table = ({ data, headers }) => {
  return (
    <table className="user-table">
      <thead className="table-header">
        <tr className=" table-border-bottom">
          {headers.map(head => {
            return (
              <th className="table-row-align-left" key={head}>
                {head}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="table-body table-row-align-left">
        {data.map(data => {
          return <TableRows data={data} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
