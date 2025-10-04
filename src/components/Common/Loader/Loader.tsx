import React from "react";
import * as S from "./styles";

const Loader: React.FC = () => {
  return (
    <S.LoaderWrapper>
      <S.Bar className="bar1" />
      <S.Bar className="bar2" />
      <S.Bar className="bar3" />
      <S.Bar className="bar4" />
      <S.Bar className="bar5" />
      <S.Bar className="bar6" />
      <S.Bar className="bar7" />
      <S.Bar className="bar8" />
    </S.LoaderWrapper>
  );
};

export default Loader;
