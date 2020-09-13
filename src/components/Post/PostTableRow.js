import _ from "lodash";
import React from "react";
import { TableRow, Cell } from "../TableStyle";
import RowManipulation from "../RowManipulation";
import dateUtils from "../../utils/date";

function getStatus(data) {
  const { checkedStatus } = data || {};
  if (checkedStatus === "APPROVE") return "Đã duyệt"
  if (checkedStatus === "PENDING") return "Chờ duyệt"
  if (checkedStatus === "REJECT") return "Đã từ chối"
  return "Không xác định"
}

function getAction(data) {
  const { action } = data || {};
  switch (action) {
    case "DELETE":
      return "Xoá"
    case "EDIT":
      return "Sửa"
    case "CREATE":
      return "Tạo mới"
    default:
      return "Không xác định"
  }
}

function PostTableRow(props) {
  const { data, onCheck, onReject, onEdit, isActive, onDelete } = props;
  const { id, title, updatedDate, viewQuantity } = data || {};
  const isDisable = false;
  const status = getStatus(data)
  const action = getAction(data)
  return (
    <TableRow isActive={isActive} isDisable={isDisable}>
      <Cell>{id}</Cell>
      <Cell>{title}</Cell>
      <Cell>{viewQuantity}</Cell>
      <Cell textAlign="center">{dateUtils.formatDate(updatedDate) || ""}</Cell>
      <Cell textAlign="center">{status}</Cell>
      <Cell textAlign="center">{action}</Cell>
      <Cell width={200}>
        <RowManipulation
          id={id}
          isDisable={isDisable}
          isActive={isActive}
          isShowEdit
          isShowReject
          isShowDelete
          isShowApprove
          onApprove={onCheck}
          onReject={onReject}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </Cell>
    </TableRow>
  );
}

export default PostTableRow;
