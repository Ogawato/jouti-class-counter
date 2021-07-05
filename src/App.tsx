import { Component, ReactElement } from 'react'; // ComponentとReactElementをインポート
import { Button, Card, Statistic } from 'semantic-ui-react'; // ButtonとCardとStatisticをインポート
import './App.css';

type State = { count: number };

// Appというクラスコンポーネントを定義する
class App extends Component<unknown, State> {
  // コンストラクターで初期化する
  constructor(props: unknown) {
    super(props); // おまじない
    this.state = { count: 0 }; // countの初期値として0を代入する
  }

  // リセットメソッド
  reset(): void {
    this.setState({ count: 0 });
  }

  // プラスメソッド
  increment(): void {
    this.setState((state) => ({ count: state.count + 1 })); // アロー関数
  }

  // ここから画面に表示していく
  render(): ReactElement {
    const { count } = this.state;

    return (
      <div className="container">
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>count</Statistic.Label>
            <Statistic.Value>{count}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <div className="ui two buttons">
              <Button color="red" onClick={() => this.reset()}>
                Reset
              </Button>
              <Button color="green" onClick={() => this.increment()}>
                +1
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App; // Appを最後にexportする
