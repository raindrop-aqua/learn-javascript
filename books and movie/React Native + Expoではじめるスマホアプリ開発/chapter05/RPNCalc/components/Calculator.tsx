import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import { Styles } from "./CalculatorStyles";
import { CalcButtons } from "./CalcButton";

type CalculatorState = {
  results: number[];
  current: string;
  dotInputted: boolean;
  afterValueButton: boolean;
  orientation: string;
};

export default class Calculator extends Component<{}, CalculatorState> {
  constructor(props) {
    super(props);
    const { height, width } = Dimensions.get("window");
    this.state = {
      results: [],
      current: "0",
      dotInputted: false,
      afterValueButton: false,
      orientation: ""
    };
  }

  buttons = [
    [
      {
        label: "AC",
        flex: 2,
        btnEvent: () => {
          this.acButton();
        }
      },
      {
        label: "C",
        btnEvent: () => {
          this.cButton();
        }
      },
      {
        label: "+",
        btnEvent: () => {
          this.calcButton("+");
        }
      }
    ],
    [
      {
        label: "7",
        btnEvent: () => {
          this.valueButton("7");
        }
      },
      {
        label: "8",
        btnEvent: () => {
          this.valueButton("8");
        }
      },
      {
        label: "9",
        btnEvent: () => {
          this.valueButton("9");
        }
      },
      {
        label: "-",
        btnEvent: () => {
          this.calcButton("-");
        }
      }
    ],
    [
      {
        label: "4",
        btnEvent: () => {
          this.valueButton("4");
        }
      },
      {
        label: "5",
        btnEvent: () => {
          this.valueButton("5");
        }
      },
      {
        label: "6",
        btnEvent: () => {
          this.valueButton("6");
        }
      },
      {
        label: "*",
        btnEvent: () => {
          this.calcButton("*");
        }
      }
    ],
    [
      {
        label: "1",
        btnEvent: () => {
          this.valueButton("1");
        }
      },
      {
        label: "2",
        btnEvent: () => {
          this.valueButton("2");
        }
      },
      {
        label: "3",
        btnEvent: () => {
          this.valueButton("3");
        }
      }
    ],
    [
      {
        label: "0",
        btnEvent: () => {
          this.valueButton("0");
        }
      },
      {
        label: ".",
        btnEvent: () => {
          this.valueButton(".");
        }
      },
      {
        label: "/",
        btnEvent: () => {
          this.calcButton("/");
        }
      }
    ],
    [
      {
        label: "Enter",
        btnEvent: () => {
          this.enterButton();
        }
      }
    ]
  ];

  valueButton = (value: string): void => {
    console.log(value + " value button");

    let currentString = this.state.current;
    const dotInputted = this.state.dotInputted;
    let newDotInputted = dotInputted;
    if (value === ".") {
      if (!dotInputted) {
        currentString = currentString + value;
        newDotInputted = true;
      }
    } else if (currentString === "0") {
      currentString = value;
    } else {
      currentString = currentString + value;
    }
    this.setState({
      current: currentString,
      dotInputted: newDotInputted,
      afterValueButton: true
    });
  };

  enterButton = (): void => {
    console.log("enter button");

    let newValue = NaN;
    if (this.state.dotInputted) {
      newValue = parseFloat(this.state.current);
    } else {
      newValue = parseInt(this.state.current);
    }
    // parseに失敗したらスタックに積まない
    if (isNaN(newValue)) {
      return;
    }
    // スタックに新しい値を積む
    let results = this.state.results;
    results.push(newValue);
    this.setState({
      current: "0",
      dotInputted: false,
      results: results,
      afterValueButton: false
    });
  };

  calcButton = (value: string): void => {
    console.log(value + " calc button");

    // スタックが２つ以上ない場合は計算しない
    if (this.state.results.length < 2) {
      return;
    }
    // 数値を入力中は受け付けない（スタックにあるものだけを処理する）
    if (this.state.afterValueButton === true) {
      return;
    }
    let newResults = this.state.results;
    const target2 = newResults.pop();
    const target1 = newResults.pop();
    let newValue = null;
    // スタックから取得したものを計算する
    switch (value) {
      case "+":
        newValue = target1 + target2;
        break;
      case "-":
        newValue = target1 - target2;
        break;
      case "*":
        newValue = target1 * target2;
        break;
      case "/":
        newValue = target1 / target2;
        // 0で割ったときに何もしないよう、有限性をチェック
        if (!isFinite(newValue)) {
          newValue = null;
        }
        break;
      default:
        break;
    }
    if (newValue === null) {
      return;
    }
    // 計算結果をスタックに積む
    newResults.push(newValue);
    this.setState({
      current: "0",
      dotInputted: false,
      results: newResults,
      afterValueButton: false
    });
  };

  acButton = (): void => {
    console.log("ac button");

    // ACボタンはスタックを含めて初期化する
    this.setState({
      current: "0",
      dotInputted: false,
      results: [],
      afterValueButton: false
    });
  };

  cButton = (): void => {
    console.log("c button");

    // Cボタンはスタック以外を初期化する
    this.setState({
      current: "0",
      dotInputted: false,
      afterValueButton: false
    });
  };

  showValue = (index): string | number => {
    if (this.state.afterValueButton || this.state.results.length === 0) {
      index = index - 1;
    }
    if (index === -1) {
      return this.state.current;
    }
    if (this.state.results.length > index) {
      return this.state.results[this.state.results.length - 1 - index];
    }
    return "";
  };

  getOrientation = (height, width): string => {
    if (height > width) {
      return "portrait";
    }
    return "landscape";
  };

  changeOrientation = ({ window }): void => {
    const orientation = this.getOrientation(window.height, window.width);
    this.setState({ orientation: orientation });
  };

  componentDidMount = (): void => {
    Dimensions.addEventListener("change", this.changeOrientation);
  };

  componentWillUnmount = (): void => {
    Dimensions.removeEventListener("change", this.changeOrientation);
  };

  range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (v, k) => k + start);
  };

  render() {
    let resultFlex = 3;
    if (this.state.orientation === "landscape") {
      resultFlex = 1;
    }

    return (
      <View style={Styles.container}>
        <View style={[Styles.results, { flex: resultFlex }]}>
          {this.range(0, resultFlex)
            .reverse()
            .map(index => {
              return (
                <View style={Styles.resultLine} key={"result_" + index}>
                  <Text>{this.showValue(index)}</Text>
                </View>
              );
            })}
        </View>

        <View style={Styles.buttons}>
          <View style={Styles.buttonsLine}>
            <CalcButtons buttons={this.buttons[0]} />
          </View>
          <View style={Styles.buttonsLine}>
            <CalcButtons buttons={this.buttons[1]} />
          </View>
          <View style={Styles.buttonsLine}>
            <CalcButtons buttons={this.buttons[2]} />
          </View>
          <View style={Styles.lastButtonLinesContainer}>
            <View style={Styles.twoButtonLines}>
              <View style={Styles.buttonsLine}>
                <CalcButtons buttons={this.buttons[3]} />
              </View>
              <View style={Styles.buttonsLine}>
                <CalcButtons buttons={this.buttons[4]} />
              </View>
            </View>
            <View style={Styles.enterButtonContainer}>
              <View style={Styles.buttonsLine}>
                <CalcButtons buttons={this.buttons[5]} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
