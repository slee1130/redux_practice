import React from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { increase, decrease, setDiff } from "../modules/counter";
import { bindActionCreators } from "redux";

function CounterContainer({ number, diff, increase, decrease, setDiff }) {
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={increase}
      onDecrease={decrease}
      onSetdiff={setDiff}
    />
  );
}

const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       increase,
//       decrease,
//       setDiff,
//     },
//     dispatch
//   );

//mapDispatchToProps를 객체로 쓰면 내부에서 bindActionCreator를 해주기때문에 쓰지않아도됨
const mapDispatchToProps = {
  increase,
  decrease,
  setDiff,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
