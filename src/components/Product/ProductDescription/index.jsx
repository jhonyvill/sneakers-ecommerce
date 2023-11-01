import * as S from "./styles";
import PropTypes from "prop-types";
import { useProductPrice } from "../../../hooks/useProductPrice";

const ProductDescription = ({ product }) => {
  const { price, finalPrice, discountPercent, hasDiscount } =
    useProductPrice(product);

  return (
    <S.Container aria-label="Descrição do produto">
      <S.Brand>{product.brand}</S.Brand>
      <S.Title>{product.title}</S.Title>
      <S.Description>{product.description}</S.Description>

      {hasDiscount ? (
        <S.PriceContainer>
          <S.FinalPriceContainer>
            <S.FinalPrice>${finalPrice}</S.FinalPrice>
            <S.Discount>{discountPercent}%</S.Discount>
          </S.FinalPriceContainer>

          <S.Price>${price}</S.Price>
        </S.PriceContainer>
      ) : (
        <S.FinalPrice>${price}</S.FinalPrice>
      )}
    </S.Container>
  );
};

ProductDescription.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDescription;
