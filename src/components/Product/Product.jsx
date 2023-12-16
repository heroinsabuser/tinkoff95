import React from "react";
import "./style.css";
import {
  Window,
  WindowContent,
  ScrollView,
  WindowHeader,
  Button,
} from "react95";

const Product = ({ image, btn, title, paragraph }) => {
  return (
    <div className="product">
      <Window>
        <WindowHeader className="title">
          {title}
          <Button>
            <span className="close-icon">x</span>
          </Button>
        </WindowHeader>
        <WindowContent>
          <p style={{ paddingBottom: "5px" }}>{paragraph}</p>
          <ScrollView>
            <img
              style={{ display: "flex", marginTop: "50px" }}
              src={image}
              alt=""
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="flat" id="product_button">
                {btn}
              </Button>
            </div>
          </ScrollView>
        </WindowContent>
      </Window>
    </div>
  );
};

export default Product;
