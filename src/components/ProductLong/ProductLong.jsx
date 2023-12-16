import React from "react";
import "./style.css";
import { Button, ScrollView, Window } from "react95";

const ProductLong = ({title, paragraph, image, btn}) => {
  return (
    <div>
      <Window id="product_long">
        <ScrollView style={{ height: "100%", padding:"0" }}>
          <div className="product_long_content">
            <div className="product_long_text">
              <h2 style={{ marginBottom: "16px" }}>
                {title}
              </h2>
              <p>
                {paragraph}
              </p>
              <div style={{ marginTop: "auto" }}>
                <Button
                  style={{
                    height: "44px",
                    color: "#126df7",
                    background: "#244a7f0f",
                  }}
                >
                  {btn}
                </Button>
              </div>
            </div>
            <div className="product_long_image">
              <img
                src={image}
                alt=""
              />
            </div>
          </div>
        </ScrollView>
      </Window>
    </div>
  );
};

export default ProductLong;
