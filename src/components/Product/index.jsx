import React from "react";
import * as S from "./styles";
import CartSvg from "../../assets/icon-cart.svg?react";
import ProductDescription from "./ProductDescription";
import Counter from "../Utils/Counter";
import Button from "../Utils/Button";
import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductImages from "./ProductImages";

const Product = () => {
  const [quantitySelected, setQuantitySelected] = useState(0);
  const { data, request } = useFetch();

  useEffect(() => {
    async function getPhotos() {
      request("./data.json");
    }
    getPhotos();
  }, [request]);

  if (!data) return null;
  return (
    <S.Container>
      <S.ImagesContainer>
        <ProductImages images={data.pictures} />
      </S.ImagesContainer>

      <S.DetailsContainer>
        <ProductDescription product={data} />

        <S.ProductActionContainer>
          <Counter count={quantitySelected} setCount={setQuantitySelected} />
          <Button className={"shadowActive"} aria-label="adicionar ao carrinho">
            <CartSvg /> Add to cart
          </Button>
        </S.ProductActionContainer>
      </S.DetailsContainer>
    </S.Container>
  );
};

export default Product;
