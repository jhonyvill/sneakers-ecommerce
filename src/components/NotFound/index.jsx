import React from "react";
import * as S from "./styles";

const NotFound = () => {
    return(
        <S.Container>
            <S.Title>404</S.Title>
            <S.Message>Oops! We couldn't find that page.</S.Message>
        </S.Container>
    );
}

export default NotFound;