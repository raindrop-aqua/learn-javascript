import React, { FC } from "react";
import { View } from "react-native";
import { Styles } from "./CalculatorStyles";
import { CalcButtons } from "./CalcButton";

const buttons = [
  [
    {
      label: "AC",
      flex: 2,
      btnEvent: () => {
        acButton();
      }
    },
    {
      label: "C",
      btnEvent: () => {
        cButton();
      }
    },
    {
      label: "+",
      btnEvent: () => {
        calcButton("+");
      }
    }
  ],
  [
    {
      label: "7",
      btnEvent: () => {
        valueButton("7");
      }
    },
    {
      label: "8",
      btnEvent: () => {
        valueButton("8");
      }
    },
    {
      label: "9",
      btnEvent: () => {
        valueButton("9");
      }
    },
    {
      label: "-",
      btnEvent: () => {
        calcButton("-");
      }
    }
  ],
  [
    {
      label: "4",
      btnEvent: () => {
        valueButton("4");
      }
    },
    {
      label: "5",
      btnEvent: () => {
        valueButton("5");
      }
    },
    {
      label: "6",
      btnEvent: () => {
        valueButton("6");
      }
    },
    {
      label: "*",
      btnEvent: () => {
        calcButton("*");
      }
    }
  ],
  [
    {
      label: "1",
      btnEvent: () => {
        valueButton("1");
      }
    },
    {
      label: "2",
      btnEvent: () => {
        valueButton("2");
      }
    },
    {
      label: "3",
      btnEvent: () => {
        valueButton("3");
      }
    }
  ],
  [
    {
      label: "0",
      btnEvent: () => {
        valueButton("0");
      }
    },
    {
      label: ".",
      btnEvent: () => {
        valueButton(".");
      }
    },
    {
      label: "/",
      btnEvent: () => {
        valueButton("/");
      }
    }
  ],
  [
    {
      label: "Enter",
      btnEvent: () => {
        enterButton();
      }
    }
  ]
];

const valueButton = (value: string) => {
  console.log(value + " value button");
};

const enterButton = () => {
  console.log("enter button");
};

const calcButton = (value: string) => {
  console.log(value + " calc button");
};

const acButton = () => {
  console.log("ac button");
};

const cButton = () => {
  console.log("c button");
};

const Calculator: FC = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.results}>
        <View style={Styles.resultLine}></View>
        <View style={Styles.resultLine}></View>
        <View style={Styles.resultLine}></View>
      </View>

      <View style={Styles.buttons}>
        <View style={Styles.buttonsLine}>
          <CalcButtons buttons={buttons[0]} />
        </View>
        <View style={Styles.buttonsLine}>
          <CalcButtons buttons={buttons[1]} />
        </View>
        <View style={Styles.buttonsLine}>
          <CalcButtons buttons={buttons[2]} />
        </View>
        <View style={Styles.lastButtonLinesContainer}>
          <View style={Styles.twoButtonLines}>
            <View style={Styles.buttonsLine}>
              <CalcButtons buttons={buttons[3]} />
            </View>
            <View style={Styles.buttonsLine}>
              <CalcButtons buttons={buttons[4]} />
            </View>
          </View>
          <View style={Styles.enterButtonContainer}>
            <View style={Styles.buttonsLine}>
              <CalcButtons buttons={buttons[5]} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Calculator;