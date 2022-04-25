import React from "../../images/react.png";
import Tailwind from "../../images/tailwind.png";
import Node from "../../images/node.png";
import MongoDB from "../../images/mongodb.png";

const MadeWith = () => {
  return (
    <div className="flex justify-center pt-10">
      <img src={React} alt="react" className="px-2" data-testid="react" />
      <span className="flex items-center">+</span>
      <img
        src={Tailwind}
        alt="tailwind"
        className="px-2"
        data-testid="tailwind"
      />
      <span className="flex items-center">+</span>
      <img src={Node} alt="node" className="px-2" data-testid="node" />
      <span className="flex items-center">+</span>
      <img src={MongoDB} alt="mongodb" className="px-2" data-testid="mongodb" />
    </div>
  );
};

export default MadeWith;
