import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const displayRideGroup = rideGroup => {
  const ALWAYS = 1;
  const SOMETIMES = 2;
  const NEVER = 3;
  switch (rideGroup) {
    case ALWAYS:
      return "Always";
      break;
    case SOMETIMES:
      return "Sometimes";
      break;
    case NEVER:
      return "Never";
      break;
    default:
      return "";
      break;
  }
};

const TableRows = props => {
  const {
    id,
    username,
    name,
    email,
    address,
    posts,
    albums,
    dayOfWeek,
    rideGroup
  } = props.data;

  const photosCount = albums
    ? albums.reduce((acum, album) => {
        return album.photos ? acum + album.photos.length : null;
      }, null)
    : null;
  const EVERY_DAY = "Every Day";
  const displayRideDays =
    dayOfWeek && (dayOfWeek.length === 7 ? EVERY_DAY : dayOfWeek.join(", "));

  return (
    <tr className="table-body" key={id}>
      <td className="remove-row">
        <a onClick={() => props.handleRemoveUser(id)}>
          <FontAwesomeIcon icon={faTrashAlt} color="#3ac4aa" />
        </a>
      </td>
      <td>{username}</td>
      <td>{name}</td>
      <td className="table-link">{email}</td>
      <td className="table-link">{address.city}</td>
      {rideGroup && <td>{displayRideGroup(rideGroup)}</td>}
      {displayRideDays && <td>{displayRideDays}</td>}
      {posts && <td className="table-link">{posts.length}</td>}
      {albums && <td className="table-link">{albums.length}</td>}
      {photosCount && <td>{photosCount}</td>}
    </tr>
  );
};

export default TableRows;
