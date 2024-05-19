import React from "react";
import HeaderComponent from "../main/HeaderComponent";
import PriceGraph from "../graph/PriceGraph";
import GeneralGraph from "../graph/GeneralGraph";

const Globus = () => {
  return (
    <>
      <div>
        <HeaderComponent title="Сравнительный график цен на ассортимент молоко в магазине Глобус" />
      </div>
      <GeneralGraph
        url={
          "https://www.globus.ru/catalog/molochnye-produkty-syr-yaytsa/moloko-i-molochnye-produkty/moloko/?page=1"
        }
        pricesClass={".pim-list__item-price-actual-main"}
        namesClass={".pim-list__item-title.js-crop-text"}
        label={"Молоко Глобус"}
      ></GeneralGraph>
      <div>
        <HeaderComponent title="Графики динамики цен на определенные виды молоко в магазине Глобус" />
      </div>
      <PriceGraph item_id={4} item_name={"Молоко цельное Эконива"} />
      <PriceGraph
        item_id={3}
        item_name={"Молоко ультрапастеризованное Parmalat"}
      />
      <PriceGraph
        item_id={7}
        item_name={"Молоко пастеризованное Углече Поле органическое"}
      />
    </>
  );
};

export default Globus;
