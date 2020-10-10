import React, { useMemo } from "react";
import { useTable } from "react-table";
import { AdminVideo } from "../../../../services/admin/api";
import AdminVideoRow from "./AdminVideoRow";

type AdminVideoTableProps = {
  videos: AdminVideo[];
};

const AdminVideoTable: React.FC<AdminVideoTableProps> = ({ videos }) => {
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );
  // const columns = useMemo(
  //   () => [
  //     { header: "ID", accessor: "id" },
  //     { header: "Reddit Post ID", accessor: "redditPostId" },
  //     { header: "Title", accessor: "redditPostTitle" },
  //     // { header: "CDN URL", accessor: "mirrorUrl" },
  //     // { header: "Uploaded", accessor: "createdAt" },
  //     // { header: "Last Viewed", accessor: "lastViewedAt" },
  //     { header: "Actions" },
  //   ],
  //   []
  // );

  const columns = useMemo(
    () => [
      { header: "t", accessor: "col1" },
      { header: "A", accessor: "col2" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: data });

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Reddit Post ID</th>
            <th>Title</th>
            <th>Uploaded</th>
            <th>Last Viewed</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {videos.map((vid) => (
            <AdminVideoRow {...vid} />
          ))}
          <tr>
            <td>123asd</td>
            <td>A Happy Freakout, not a Sad Freakout</td>
            <td>10 minutes ago</td>
            <td>Never</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AdminVideoTable;
