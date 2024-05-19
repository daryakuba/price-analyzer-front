import React from "react";
import HeaderComponent from "../main/HeaderComponent";
import PriceGraph from "../graph/PriceGraph";
import GeneralGraph from "../graph/GeneralGraph";

const Metro = () => {
  return (
    <>
      <div>
        <HeaderComponent title="Сравнительный график цен на ассортимент сыра в магазине Metro" />
      </div>
      <GeneralGraph
        url={
          "https://online.metro-cc.ru/category/molochnye-prodkuty-syry-i-yayca/syry"
        }
        pricesClass={".product-price__sum-rubles"}
        namesClass={".product-card-name__text"}
        label={"Сыр Метро"}
      ></GeneralGraph>
      <div>
        <HeaderComponent title="Графики динамики цен на определенные виды сыра в магазине Metro" />
      </div>
      <PriceGraph item_id={11} item_name={"Сыр Брест-Литовск Сливочный"} />
      <PriceGraph item_id={12} item_name={"Сыр Le Superbe Switzerland Swiss"} />
      <PriceGraph item_id={13} item_name={"Сыр Белебеевский Медовый"} />

      <div>
        <HeaderComponent title="Сравнительный график цен на ассортимент рыбки в магазине Metro" />
      </div>
      <GeneralGraph
        url={"https://online.metro-cc.ru/category/rybnye/ohlazhdennaya-ryba"}
        pricesClass={".product-price__sum-rubles"}
        namesClass={".product-card-name__text"}
        label={"Рыба Метро"}
      ></GeneralGraph>
      <div>
        <HeaderComponent title="Графики динамики цен на определенные виды рыбки в магазине Metro" />
      </div>
      <PriceGraph
        item_id={14}
        item_name={"Лосось мурманский филе на коже Тримм А"}
      />
      <PriceGraph item_id={15} item_name={"Тунец красный филе охлажденный"} />
      <PriceGraph item_id={16} item_name={"Треска потрошеная без головы"} />
    </>
  );
};

export default Metro;
