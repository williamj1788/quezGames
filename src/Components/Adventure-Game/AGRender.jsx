import React from "react";

function AGRender({ onClick, node, text }) {
  return (
    <div>
      <textarea className="AGC-log" value={text || ""} readOnly></textarea>
      <div
        className="AGC-button-container"
        style={{
          justifyContent:
            node && node.options.length < 3 ? "space-around" : "space-between"
        }}
      >
        {node &&
          node.options.map((item, index) => (
            <button
              className="AGC-button"
              onClick={() => onClick(item)}
              key={index}
            >
              {item.text}
            </button>
          ))}
      </div>
    </div>
  );
}

export default AGRender;
