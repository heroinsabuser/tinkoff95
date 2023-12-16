import { React, useState } from "react";
import "./style.css";
import {
  Button,
  Window,
  WindowHeader,
  WindowContent,
  ScrollView,
  MenuList,
  MenuListItem,
  Handle,
  TextInput,
} from "react95";
import Product from "../Product/Product";
import ProductSmall from "../ProductSmall/ProductSmall";
import original from "react95/dist/themes/original";
import shelbiTeal from "react95/dist/themes/shelbiTeal";
import slate from "react95/dist/themes/slate";
import { ThemeProvider } from "styled-components";
import ProductLong from "../ProductLong/ProductLong";
import ProductMini from "../ProductMini/ProductMini";
import ProductMiniIcon from "../ProductMini/ProductMiniIcon";
import AppWindow from "../AppWindow/AppWindow";
import aiee from "react95/dist/themes/aiee";
import maple from "react95/dist/themes/maple";

const MainPage = () => {
  const reset = () => setState({ value: "" });
  const [state, setState] = useState({
    value: "",
  });
  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="main_container">
      <div className="vklad">
        <div className="vklad_container">
          <div className="vklad_content">
            <img
              className="vklad_icon"
              src="https://acdn.tinkoff.ru/static/pages/files/6be3d428-be6c-4a74-9046-0a252317e0b9.svg"
              alt=""
            />
            <p>Оформите вклад в Тинькофф с доходностью до 15% годовых</p>
            <Button variant="flat" id="vklad_button">
              Подробнее
            </Button>
          </div>
        </div>
      </div>
      <div className="black">
        <h1>
          Дебетовая карта, которую рекомендуют <br></br> ваши друзья
        </h1>
        <p className="black_paragraph">
          Кэшбэк рублями до 30%, до 5% годовых ежемесячно, переводы без комиссии
        </p>
        <Button id="black_button">Оформить карту</Button>
        <Window style={{ width: "800px", minHeight: "500px" }}>
          <WindowHeader className="title">
            Tinkoff.black
            <Button>
              <span className="close-icon">x</span>
            </Button>
          </WindowHeader>
          <WindowContent>
            <ScrollView style={{ minHeight: "500px", paddingTop: "75px" }}>
              <img
                className="black_img"
                src="https://acdn.tinkoff.ru/static/pages/files/765f5875-0f5c-4f9a-b710-c1242b4b9458.png"
                alt=""
              />
            </ScrollView>
          </WindowContent>
        </Window>
      </div>
      <div className="navigation">
        <MenuList inline style={{ height: "124px" }}>
          <MenuListItem id="nav_button">
            <img
              src="https://acdn.tinkoff.ru/static/pages/files/cac302fa-a803-44b7-917a-6d317e3d3388.svg"
              alt=""
            />
            Дебетовые <br /> карты
          </MenuListItem>
          <MenuListItem id="nav_button">
            <img
              src="https://acdn.tinkoff.ru/static/pages/files/792653fd-b4bb-4906-95be-1e26efb11685.svg"
              alt=""
            />
            Кредитные <br /> карты
          </MenuListItem>
          <MenuListItem id="nav_button">
            <img
              src="https://acdn.tinkoff.ru/static/pages/files/24c9fb64-cb87-41ac-8a38-91d032613bdf.svg"
              alt=""
            />
            Кредиты
          </MenuListItem>
          <MenuListItem id="nav_button">
            <img
              src="https://acdn.tinkoff.ru/static/pages/files/37b68120-77bd-43a1-ac3a-621133b8bba5.svg"
              alt=""
            />
            Премиум
          </MenuListItem>
          <MenuListItem id="nav_button">
            <img
              src="https://acdn.tinkoff.ru/static/pages/files/3369fb29-faeb-4eab-af92-37a56aca811d.svg"
              alt=""
            />
            Вклады
          </MenuListItem>
          <MenuListItem id="nav_button">
            <img
              src="https://acdn.tinkoff.ru/static/pages/files/e7ee20db-abf5-49cf-8bc6-8597f27d5abf.svg"
              alt=""
            />
            Инвестиции
          </MenuListItem>
          <MenuListItem id="nav_button">
            <img
              src="https://acdn.tinkoff.ru/static/pages/files/4081cbef-7648-4b3d-814d-7d1d2dda1203.svg"
              alt=""
            />
            Сим-карта
          </MenuListItem>
          <MenuListItem id="nav_button">
            <img
              src="https://acdn.tinkoff.ru/static/pages/files/a6dc5a54-9f67-465a-a12b-30f85f16a9d2.svg"
              alt=""
            />
            Страхование
          </MenuListItem>
          <MenuListItem id="nav_button">
            <img
              src="https://acdn.tinkoff.ru/static/pages/files/9abeae59-2f27-4b0c-a42a-ac829617bfc3.svg"
              alt=""
            />
            Путешествия
          </MenuListItem>
          <Handle size={38}></Handle>
          <MenuListItem id="nav_button">
            <img
              src="https://acdn.tinkoff.ru/static/pages/files/2406a7d3-72be-44d0-ba53-c4f309e35274.svg"
              alt=""
            />
            Бизнес
          </MenuListItem>
        </MenuList>
      </div>
      <div style={{ paddingTop: "76px" }}>
        <h1>Рекомендуемые продукты</h1>
      </div>
      <div className="products">
        <ThemeProvider theme={original}>
          <Product
            image="https://acdn.tinkoff.ru/static/pages/files/64ae016f-dc29-483c-95c3-d802ac968d72.png"
            title="Кредитная карта «Тинькофф Платинум»"
            paragraph="Оформите кредитку до 31 декабря и получите 1000 ₽ за покупки"
            btn="Оформить карту"
          />
        </ThemeProvider>
        <ThemeProvider theme={shelbiTeal}>
          <Product
            image="https://acdn.tinkoff.ru/static/pages/files/8d2a519f-b4a9-4517-bacd-db6111b24dbd.png"
            title="Тинькофф Инвестиции"
            paragraph="Понятные тарифы и удобное приложение"
            btn="Стать инвестором"
          />
        </ThemeProvider>
      </div>
      <div className="products_small">
        <ProductSmall
          title="Сим-карта Тинькофф"
          paragraph="Попробуйте бесплатно: телефонный секретарь Олег, 600 минут, 20 ГБ"
          image="https://acdn.tinkoff.ru/static/pages/files/4f7ba74c-df13-4686-8bf9-44f852a122a2.png"
          btn="Подробнее"
          bg="#EAECEE"
        />
        <ProductSmall
          title="Вклады"
          paragraph="Откройте вклад с пополнением и частичным изъятием. Каждый месяц получайте проценты на карту или вклад"
          image="https://acdn.tinkoff.ru/static/pages/files/bddc0e85-9588-49c9-ad80-4633737384fd.png"
          btn="Открыть вклад"
          bg="#f1ebd6"
        />
        <ProductSmall
          title="Страхование ОСАГО"
          paragraph="Электронный полис с онлайн-калькулятором  и скидками (КБМ) за безаварийность"
          image="https://acdn.tinkoff.ru/static/pages/files/f2eb3840-912c-410a-95b4-2f69ab8009fb.png"
          btn="Рассчитать стоимость"
          bg="#D0F4F2"
        />
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          paddingTop: "48px",
        }}
      >
        <Button style={{ height: "44px", color: "#126df7" }} variant="flat">
          Все продукты
        </Button>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          paddingTop: "100px",
          paddingBottom: "24px",
        }}
      >
        <h1>Нам доверяют более 38 млн клиентов</h1>
      </div>
      <div style={{ padding: "24px 0" }}>
        <ProductLong
          title="Тинькофф обладатель пяти наград премии «Банк года»
        Банки.ру"
          paragraph="Тинькофф был признан лучшим в следующих категориях: «Забота
        о клиенте», «Digital-банк года», «Инвестиционная компания года»,
        «Инвестиционный продукт года», «Народный рейтинг страховых
        компаний»"
          btn="Подробнее"
          image="https://acdn.tinkoff.ru/static/pages/files/dc2602c9-7659-4f32-a3f0-8d4583849492.png"
        />
      </div>
      <div style={{ padding: "76px 0 24px" }}>
        <h1>Сервисы и услуги</h1>
      </div>
      <div style={{ display: "inline-flex", paddingBottom: "24px" }}>
        <ProductMini
          image="https://acdn.tinkoff.ru/static/pages/files/213da44c-4821-4951-afed-e24a5968ccfc.svg"
          title="Курсы валют"
          paragraph="Перевод между своими счетами, оплата услуг и снятие наличных в сервисах Тинькофф"
          btn="Смотреть"
        />
        <ProductMini
          image="https://acdn.tinkoff.ru/static/pages/files/8c77eb9b-b24f-44ea-849d-1048f62960cd.svg"
          title="Снятие наличных"
          paragraph="В банкоматах Тинькофф без комиссии. И без карты, если у вас смартфон"
          btn="Найти банкомат"
        />
        <ProductMini
          image="https://acdn.tinkoff.ru/static/pages/files/055719cb-437f-4e01-b1cf-d3101a140153.svg"
          title="Переводы и пополнения"
          paragraph="С карты на карту или на счет Тинькофф"
          btn="Пополнить или перевести"
        />
      </div>
      <div className="products" style={{ paddingTop: "24px" }}>
        <ThemeProvider theme={original}>
          <Product
            image="https://acdn.tinkoff.ru/static/pages/files/5e26a6a1-784b-4148-a2a1-f09c3580de05.png"
            title="Приведи друга"
            paragraph="До 5000 ₽ за рекомендации друзьям"
            btn="Подробнее"
          />
        </ThemeProvider>
        <ThemeProvider theme={slate}>
          <Product
            image="https://acdn.tinkoff.ru/static/pages/files/d24e6e75-ec39-470b-9f7e-4aa844d4bbda.png"
            title="Tinkoff Pay — оплата в несколько касаний"
            paragraph="Все как вы привыкли: легко, надежно и с сохранением кэшбэка"
            btn="Попробовать"
          />
        </ThemeProvider>
      </div>
      <div style={{ padding: "24px 0" }}>
        <ThemeProvider theme={shelbiTeal}>
          <AppWindow />
        </ThemeProvider>
      </div>
      <div style={{ paddingTop: "76px", paddingBottom: "24px" }}>
        <h1>Актуально сейчас</h1>
      </div>
      <div style={{ paddingBottom: "24px" }}>
        <ThemeProvider theme={aiee}>
          <ProductLong
            title="Разыгрываем до 3 000 000 ₽ на погашение ипотеки"
            paragraph="Оформите ипотечную страховку в Тинькофф со скидкой 10% до 31 декабря и участвуйте в акции"
            btn="Подробнее"
            image="https://acdn.tinkoff.ru/static/pages/files/276d87de-0603-455a-83d2-8b9928f156b2.png"
          />
        </ThemeProvider>
      </div>
      <div style={{ padding: "24px 0", display: "inline-flex" }}>
        <ProductMiniIcon
          title="Порекомендуйте другу Tinkoff Black и получите 1500 ₽ на счет"
          paragraph="Участвуйте в акции «Приведи друга» с 27 ноября по 31 декабря"
          btn="Читать"
        />
        <ProductMiniIcon
          title="Карта Tinkoff Black с любимым дизайном"
          paragraph="Новый стиль нашей дебетовки — для фанатов хоккея и группы 
          «Король и шут»"
          btn="Читать"
        />
        <ProductMiniIcon
          title="1 000 000 ₽ на путешествие мечты"
          paragraph="Оформите туристическую страховку в Тинькофф и участвуйте в розыгрыше"
          btn="Читать"
        />
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          padding: "24px 0",
        }}
      >
        <Button style={{ height: "44px", color: "#126df7" }} variant="flat">
          Другие статьи и новости - в блоге Тинькофф
        </Button>
      </div>
      <div style={{ paddingTop: "76px" }}>
        <h1>Работа и развитие</h1>
      </div>
      <div className="products">
        <ThemeProvider theme={original}>
          <Product
            image="https://acdn.tinkoff.ru/static/pages/files/7b8f9fc1-813e-41b7-a849-bfd1dbbf1138.png"
            title="Вакансии"
            paragraph="В вашем или любом другом городе"
            btn="Смотреть вакансии"
          />
        </ThemeProvider>
        <ThemeProvider theme={maple}>
          <Product
            image="https://acdn.tinkoff.ru/static/pages/files/744472ea-e919-4e5d-803d-40a5c4ef688d.png"
            title="Тинькофф Образование"
            paragraph="Учебные курсы и оплачиваемые программы развития"
            btn="Подробнее"
          />
        </ThemeProvider>
      </div>
      <div className="products">
        <ThemeProvider theme={shelbiTeal}>
          <Product
            image="https://acdn.tinkoff.ru/static/pages/files/8e09834a-603c-401c-9603-ee5f2cf2e6c0.png"
            title="Как на самом деле пользоваться кредиткой"
            paragraph="Тинькофф журнал"
            btn="Читать"
          />
        </ThemeProvider>
        <ThemeProvider theme={slate}>
          <Product
            image="https://acdn.tinkoff.ru/static/pages/files/60a6d162-7441-4509-b8cf-e9dc649e45bb.png"
            title="Бизнес-секреты"
            paragraph="Медиа о том, как вести бизнес в России"
            btn="Узнать больше"
          />
        </ThemeProvider>
      </div>
      <div style={{ paddingTop: "76px", paddingBottom: "24px" }}>
        <h1>Дополнительно</h1>
      </div>
      <div style={{ paddingBottom: "24px", display: "inline-flex" }}>
        <ProductMini
          image="https://acdn.tinkoff.ru/static/pages/files/c93cc583-32fa-41f6-a3bd-cd667c034b80.svg"
          title="Помощь"
          paragraph="Отвечаем на вопросы по всем продуктам"
          btn="Подробнее"
        />
        <ProductMini
          image="https://acdn.tinkoff.ru/static/pages/files/1e3c62f0-4a98-4f0a-9321-5e7640b2e0cb.svg"
          title="Тинькофф Отзывы"
          paragraph="Выбирайте продукты Тинькофф, магазины, рестораны, сервисы и бренды на основе реальных отзывов"
          btn="Подробнее"
        />
        <ProductMini
          image="https://acdn.tinkoff.ru/static/pages/files/ce57cec9-f4ee-4f32-993d-857293531f61.svg"
          title="Кредитные каникулы в 2023"
          paragraph="Горячая линия по предоставлению каникул для участников СВО и членов их семей: 8 800 555-89-77"
          btn="Подробнее"
        />
      </div>
      <div style={{ paddingTop: "76px", paddingBottom: "24px" }}>
        <h1>Поиск по ответам на вопросы</h1>
      </div>
      <div style={{ display: "inline-flex", width: "100%" }}>
        <ThemeProvider theme={original}>
          <TextInput
            style={{ height: "48px", width: "100%" }}
            placeholder="Поиск"
            value={state.value}
            onChange={handleChange}
          />
          <Button onClick={reset} style={{ marginLeft: 4, height: "44px" }}>
            Стереть
          </Button>
        </ThemeProvider>
      </div>
      <div className="input_layouts">
        <Button
          style={{ margin: "5px" }}
          variant="flat"
          onClick={() => setState({ value: "Как написать в чат" })}
        >
          Как написать в чат
        </Button>
        <Button
          style={{ margin: "5px" }}
          variant="flat"
          onClick={() => setState({ value: "Как скачать приложение" })}
        >
          Как скачать приложение
        </Button>
        <Button
          style={{ margin: "5px" }}
          variant="flat"
          onClick={() => setState({ value: "Как войти в личный кабинет" })}
        >
          Как войти в личный кабинет
        </Button>
        <Button
          style={{ margin: "5px" }}
          variant="flat"
          onClick={() => setState({ value: "Переводы" })}
        >
          Переводы
        </Button>
        <Button
          style={{ margin: "5px" }}
          variant="flat"
          onClick={() => setState({ value: "Отменить перевод" })}
        >
          Отменить перевод
        </Button>
        <Button
          style={{ margin: "5px" }}
          variant="flat"
          onClick={() => setState({ value: "Лимит переводов" })}
        >
          Лимит переводов
        </Button>
        <Button
          style={{ margin: "5px" }}
          variant="flat"
          onClick={() => setState({ value: "Оспорить списание" })}
        >
          Оспорить списание
        </Button>
        <Button
          style={{ margin: "5px" }}
          variant="flat"
          onClick={() => setState({ value: "Получить справку или выписку" })}
        >
          Получить справку или выписку
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
