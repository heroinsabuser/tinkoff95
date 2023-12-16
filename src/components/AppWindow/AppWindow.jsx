import React from "react";
import "./style.css";
import { ScrollView, Window, WindowContent } from "react95";

const AppWindow = () => {
  return (
    <div>
      <Window style={{ padding: "0" }}>
        <WindowContent
          style={{
            padding: "2px",
            display: "inline-flex",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="appwindow_content">
            <div
              style={{
                marginBottom: "64px",
                background: "#FFDD2D",
                borderRadius: "40px",
              }}
            >
              <img
                src="https://acdn.tinkoff.ru/static/pages/files/e6487ab3-1c3c-4cf9-bf82-6f868d85a6b7.svg"
                alt=""
              />
            </div>
            <div>
              <h2 style={{ fontSize: "35px" }}>
                Мобильное приложение Тинькофф
              </h2>
            </div>
            <div style={{ marginTop: "12px" }}>
              <p>
                Проверяйте баланс, оплачивайте услуги, получайте помощь в чате
                24/7
              </p>
            </div>
            <div style={{ marginTop: "40px", display: "flex" }}></div>
          </div>
          <div style={{ display:"flex" }}>
              <img
                style={{}}
                src="https://imgproxy.cdn-tinkoff.ru/zoom_05:compressed95/aHR0cHM6Ly9hY2RuLnRpbmtvZmYucnUvc3RhdGljL3BhZ2VzL2ZpbGVzL2YwYjdlZjRmLWJjYWYtNGRlZC04ZWE4LTQ5ZGU4YjY5ZWM0Ny5wbmc="
                alt=""
              />
            </div>
            
        </WindowContent>
      </Window>
    </div>
  );
};

export default AppWindow;
