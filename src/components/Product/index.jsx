import React from "react";
import * as S from "./styles";
import CartSvg from "../../assets/icon-cart.svg?react";
import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import Button from "../Utils/Button";
import Counter from "../Utils/Counter";
import ProductImages from "./ProductImages";
import ProductImageModal from "./ProductImageModal";
import ProductDescription from "./ProductDescription";
import { useCart } from "../../hooks/useCart";

const Product = () => {
  const { data, request } = useFetch();
  const [modalActive, setModalActive] = useState(false);
  const { quantitySelected, setQuantitySelected, addCartProduct } = useCart();

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
        <ProductImages
          images={data.pictures}
          modalActive={false}
          handleModalActive={setModalActive}
        />
      </S.ImagesContainer>

      <S.DetailsContainer>
        <ProductDescription product={data} />

        <S.ProductActionContainer>
          <Counter count={quantitySelected} setCount={setQuantitySelected} />
          <Button
            className={"shadowActive"}
            aria-label="adicionar ao carrinho"
            onClick={() => addCartProduct(data)}
          >
            <CartSvg /> Add to cart
          </Button>
        </S.ProductActionContainer>
      </S.DetailsContainer>

      {modalActive && (
        <ProductImageModal
          images={data.pictures}
          handleModalActive={setModalActive}
        />
      )}
    </S.Container>
  );
};

export default Product;
