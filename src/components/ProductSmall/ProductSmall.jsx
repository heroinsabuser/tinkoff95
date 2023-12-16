import React from "react";
import "./style.css";
import { Window, WindowContent, Button } from "react95";

const ProductSmall = ({title, image, paragraph, btn, bg}) => {
  return (
    <div className="product_small">
      <Window id="product_small_content" style={{ height: "100%", background:bg, borderRadius:"10px" }}>
        <WindowContent style={{padding: "40px 32px", textAlign:"center"}}>
          <h2>{title}</h2>
          <p style={{ marginTop: "12px"}}>
            {paragraph}
          </p>
          </WindowContent>
          <picture className="product_small_img">
            <img
              className="product_img"
              src={image}
              alt=""
            />
          </picture>
          <Button id="product_small_btn">{btn}</Button>
      </Window>
    </div>
  );
};

export default ProductSmall;
