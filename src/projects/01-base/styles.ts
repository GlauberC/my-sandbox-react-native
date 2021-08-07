import styled from "styled-components/native";
import { dpPercentage, dpValue } from "../../util/PixelDensity";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const TitleBox = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  width: 80%;
  height: ${dpPercentage(12)};
  elevation: 5;
  position: relative;
  bottom: ${dpPercentage(7)};
  align-self: center;
  justify-content: center;
  align-items: center;
`;
export const InsideTitleBox = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const TitleDecorator = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: ${dpValue(10)};
  height: ${dpValue(10)};
  margin-right: ${dpValue(10)};
  border-radius: 50px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${dpValue(14)};
  align-self: center;
`;
export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${dpPercentage(42)};
  width: 100%;
`;
