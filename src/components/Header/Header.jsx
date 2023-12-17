import React, { useState } from "react";
import "./style.css";
import {
  Button,
  WindowHeader,
  MenuList,
  MenuListItem,
  Separator,
} from "react95";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);
  const [isOpen5, setOpen5] = useState(false);
  const [isOpen6, setOpen6] = useState(false);
  const [isOpen7, setOpen7] = useState(false);

  return (
    <div className="header">
      <div className="navbar">
        <WindowHeader className="title">
          Tinkoff95
          <Button
            as="a"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
          >
            <span className="close-icon">x</span>
          </Button>
        </WindowHeader>
        <div className="container">
          <div className="icon">
            <a href="#">
              <h2 style={{ fontSize: "25px" }}>TINKOFF</h2>
            </a>
          </div>
          <ul className="nav">
            <div className="nav_1">
              <Button variant="thin" onClick={() => setOpen(!isOpen)}>
                Частным лицам
              </Button>
              <div className={`menu ${isOpen ? "active" : ""}`}>
                <MenuList className="menu_dropdown">
                  <MenuListItem
                    onClick={() => setOpen1(!isOpen1)}
                    primary
                    size="sm"
                  >
                    Банк
                  </MenuListItem>
                  <Separator />
                  <MenuListItem onClick={() => setOpen2(!isOpen2)} size="sm">
                    Инвестиции
                  </MenuListItem>
                  <MenuListItem onClick={() => setOpen3(!isOpen3)} size="sm">
                    Сим-карта
                  </MenuListItem>
                  <MenuListItem onClick={() => setOpen4(!isOpen4)} size="sm">
                    Страхование
                  </MenuListItem>
                  <MenuListItem onClick={() => setOpen5(!isOpen5)} size="sm">
                    Путешествия
                  </MenuListItem>
                  <Separator />
                  <MenuListItem onClick={() => setOpen6(!isOpen6)} size="sm">
                    Город
                  </MenuListItem>
                </MenuList>

                <MenuList
                  style={{ position: "absolute" }}
                  className={`menu_bank ${isOpen1 ? "active" : ""}`}
                >
                  <MenuListItem size="sm">Кредитные карты</MenuListItem>
                  <Separator />
                  <MenuListItem size="sm">Дебетовые карты</MenuListItem>
                  <MenuListItem size="sm">Кредиты и ипотека</MenuListItem>
                  <MenuListItem size="sm">Детская карта</MenuListItem>
                  <MenuListItem size="sm">Вклады</MenuListItem>
                  <MenuListItem size="sm">Накопительный счет</MenuListItem>
                  <MenuListItem size="sm">Подписка Pro</MenuListItem>
                  <MenuListItem size="sm">Рассрочка</MenuListItem>
                  <Separator />
                  <MenuListItem size="sm">Долями</MenuListItem>
                </MenuList>

                <MenuList
                  style={{ marginTop: "34px", position: "absolute" }}
                  className={`menu_bank ${isOpen2 ? "active" : ""}`}
                >
                  <MenuListItem size="sm">Брокерский счет</MenuListItem>
                  <Separator />
                  <MenuListItem size="sm">ИИС</MenuListItem>
                  <MenuListItem size="sm">Каталог бумаг</MenuListItem>
                  <MenuListItem size="sm">Пульс</MenuListItem>
                  <MenuListItem size="sm">Аналитика</MenuListItem>
                  <MenuListItem size="sm">Академия</MenuListItem>
                  <Separator />
                  <MenuListItem size="sm">Терминал</MenuListItem>
                </MenuList>

                <MenuList
                  style={{ marginTop: "64px", position: "absolute" }}
                  className={`menu_bank ${isOpen3 ? "active" : ""}`}
                >
                  <MenuListItem size="sm">Заказать симку</MenuListItem>
                  <Separator />
                  <MenuListItem size="sm">Тарифы</MenuListItem>
                  <MenuListItem size="sm">Электронная сим-карта</MenuListItem>
                  <MenuListItem size="sm">Красивые номера</MenuListItem>
                  <MenuListItem size="sm">Услуги</MenuListItem>
                  <MenuListItem size="sm">Перенос номера</MenuListItem>
                  <MenuListItem size="sm">Роуминг</MenuListItem>
                  <Separator />
                  <MenuListItem size="sm">Помощь</MenuListItem>
                </MenuList>

                <MenuList
                  style={{ marginTop: "92px", position: "absolute" }}
                  className={`menu_bank ${isOpen4 ? "active" : ""}`}
                >
                  <MenuListItem size="sm">ОСАГО</MenuListItem>
                  <Separator />
                  <MenuListItem size="sm">Каско</MenuListItem>
                  <MenuListItem size="sm">Путешествия</MenuListItem>
                  <MenuListItem size="sm">Ипотека</MenuListItem>
                  <MenuListItem size="sm">Квартира</MenuListItem>
                  <MenuListItem size="sm">Здоровье</MenuListItem>
                  <Separator />
                  <MenuListItem size="sm">Помощь на дорогах</MenuListItem>
                </MenuList>

                <MenuList
                  style={{ marginTop: "116px", position: "absolute" }}
                  className={`menu_bank ${isOpen5 ? "active" : ""}`}
                >
                  <MenuListItem size="sm">Авиабилеты</MenuListItem>
                  <Separator />
                  <MenuListItem size="sm">Отели</MenuListItem>
                  <MenuListItem size="sm">Туры</MenuListItem>
                  <Separator />
                  <MenuListItem size="sm">Ж/д билеты</MenuListItem>
                </MenuList>

                <MenuList
                  style={{ marginTop: "150px", position: "absolute" }}
                  className={`menu_bank ${isOpen6 ? "active" : ""}`}
                >
                  <MenuListItem size="sm">Топливо</MenuListItem>
                  <Separator />
                  <MenuListItem size="sm">Доставка продуктов</MenuListItem>
                  <MenuListItem size="sm">Кино</MenuListItem>
                  <MenuListItem size="sm">Театры</MenuListItem>
                  <MenuListItem size="sm">Концерты</MenuListItem>
                  <MenuListItem size="sm">Салоны красоты</MenuListItem>
                  <MenuListItem size="sm">Рестораны</MenuListItem>
                  <MenuListItem size="sm">Автомобили</MenuListItem>
                  <Separator />
                  <MenuListItem size="sm">Блог</MenuListItem>
                </MenuList>
              </div>
            </div>
            <div>
              <Button variant="thin">Бизнесу</Button>
            </div>
            <div>
              <Button variant="thin">Премиум</Button>
            </div>
            <div>
              <Button variant="thin">Еще</Button>
            </div>
          </ul>
          <div className="lk" style={{ position: "relative" }}>
            <Button variant="thin" onClick={() => setOpen7(!isOpen7)}>
              Личный кабинет
              <img className="lk_img" src="./1699635.svg"></img>
            </Button>
            <MenuList
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                width: "180px",
                marginLeft: "0",
              }}
              className={`menu ${isOpen7 ? "active" : ""}`}
            >
              <MenuListItem>
                <img
                  src="https://acdn.tinkoff.ru/static/blocks/files/f432f710-b13a-4713-8d8a-2c7002968338.svg"
                  alt=""
                />
                Интернет банк
              </MenuListItem>

              <MenuListItem>
                <img
                  src="https://acdn.tinkoff.ru/static/blocks/files/d7a23f9f-308a-4a82-b8ee-75de0d450e92.svg"
                  alt=""
                />
                Тинькофф Бизнес
              </MenuListItem>
              <MenuListItem>
                <img
                  src="https://acdn.tinkoff.ru/static/blocks/files/635fc5f0-d563-40dc-b901-bba3bc90b291.svg"
                  alt=""
                />
                Инвестиции
              </MenuListItem>

              <MenuListItem>
                <img
                  src="https://acdn.tinkoff.ru/static/blocks/files/3bde1b2f-a3e9-461e-9195-f5407606144d.svg"
                  alt=""
                />
                Тинькофф Мобайл
              </MenuListItem>
            </MenuList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
