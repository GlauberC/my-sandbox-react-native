import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export function dpPercentage(percentage: number){
  return `${RFPercentage(percentage)}px}`
}
export function dpValue(value: number){
  return `${RFValue(value)}px}`
}