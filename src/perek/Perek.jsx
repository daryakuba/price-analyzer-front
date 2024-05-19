import React from "react";
import HeaderComponent from "../main/HeaderComponent";
import PriceGraph from "../graph/PriceGraph";
import GeneralGraph from "../graph/GeneralGraph";

const Perek = () => {
  return (
    <>
      <div>
        <HeaderComponent title="Сравнительный график цен на ассортимент хлеба в магазине Перекресток" />
      </div>
      <GeneralGraph
        url={"https://www.perekrestok.ru/cat/c/243/hleb"}
        pricesClass={".price-new"}
        namesClass={".product-card__title"}
        label={"Хлеб Перекресток"}
      ></GeneralGraph>
      <div>
        <HeaderComponent title="Графики динамики цен на определенные виды хлеба в магазине Перекресток" />
      </div>
      <section className="py-5"></section>
      <PriceGraph item_id={8} item_name={"Хлеб Дарницкий"} />
      <PriceGraph item_id={9} item_name={"Хлеб Коломенское Даниловский"} />
      <PriceGraph item_id={10} item_name={"Хлеб Экохлеб Богатырский"} />
    </>
  );
};

export default Perek;
