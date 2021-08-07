import React from "react";
import { View, Text } from "react-native";

import * as Styled from "./styles";

export function Base01() {
  return (
    <Styled.Container>
      <Styled.Header />
      <Styled.TitleBox>
        <Styled.InsideTitleBox>
          <Styled.TitleDecorator/>
          <Styled.Title>Configurando a base</Styled.Title>
        </Styled.InsideTitleBox>
      </Styled.TitleBox>
    </Styled.Container>
  );
}
