import { FaRegComment } from "react-icons/fa";
import React from "react";
type IProp = {
  comment: number  | undefined;
};
const Comment: React.FC<IProp> = (prop) => {
  return (
    <div>
      <div className="flex">
        <div className="mt-1">
          <FaRegComment />
        </div>
        <p className="ml-2">{prop.comment===undefined ? 0 : prop.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
