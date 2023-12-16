import React from "react";
import "./style.css";
import { Button, Window, WindowContent } from "react95";

const ProductMiniIcon = ({ btn, title, paragraph }) => {
  return (
    <div className="product_mini">
      <Window
        style={{
          padding: "32px",
          height: "100%",
          borderRadius:"10px"
        }}
      >
        <WindowContent id="product_mini_content">
          <div style={{ display: "inline-block" }}>
            <div className="title">
              <h2>{title}</h2>
            </div>
            <div style={{ marginTop: "12px" }}>
              <p>{paragraph}</p>
            </div>
          </div>
          <div style={{ marginTop: "auto", paddingTop: "32px" }}>
            <Button style={{ color: "#126df7" }} variant="thin">
              {btn}
            </Button>
          </div>
        </WindowContent>
      </Window>
    </div>
  );
};

export default ProductMiniIcon;