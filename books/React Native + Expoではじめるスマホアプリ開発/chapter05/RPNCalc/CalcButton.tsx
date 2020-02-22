import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Styles } from "./CalcButtonStyles";

type CalcButtonProps = {
  flex?: number;
  label: string;
  btnEvent: any;
  children?: never;
};

const CalcButton: FC<CalcButtonProps> = (props: CalcButtonProps) => {
  const flex = props.flex ? props.flex : 1;
  return (
    <TouchableOpacity
      style={[Styles.calcButton, { flex: flex }]}
      onPress={() => {
        props.btnEvent();
      }}
    >
      <Text style={Styles.calcButtonText}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default CalcButton;
