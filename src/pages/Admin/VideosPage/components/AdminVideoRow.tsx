import React from "react";
import { AdminVideo } from "../../../../services/admin/api";

type AdminVideoRowProps = AdminVideo & {};

const AdminVideoRow: React.FC<AdminVideoRowProps> = ({
  id,
  redditPostId,
  redditPostTitle,
  mirrorUrl,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{redditPostId}</td>
      <td>{redditPostTitle}</td>
      <td>{mirrorUrl}</td>
      <td>
        <button>Delete?</button>
      </td>
    </tr>
  );
};

export default AdminVideoRow;
