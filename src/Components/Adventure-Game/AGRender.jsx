import React from "react";

function AGRender({ onClick, loading, node, text }) {
  if (loading) {
    return (
      <div>
        <textarea className="AGC-log" value="loading" readOnly />
      </div>
    );
  }

  return (
    <div>
      <textarea className="AGC-log" value={text} readOnly></textarea>
      <div
        className="AGC-button-container"
        style={{
          justifyContent:
            node.options.length < 3 ? "space-around" : "space-between"
        }}
      >
        {node.options.map((item, index) => (
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
