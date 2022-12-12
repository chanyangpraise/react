const root = ReactDOM.createRoot(document.getElementById("root"));

function TextList(props) {
  return (
    <ul>
      {props.items.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </ul>
  );
}

function App(props) {
  const [isLogin, changeIsLogin] = React.useState(false);

  React.useEffect(() => {
    setInterval(() => {
      const tf = Math.floor(Math.random() * (2 - 0) + 0);
      console.log(tf);
      console.log(!tf ? "로그인 된 상태" : "로그아웃이 필요한 상태");
      changeIsLogin((prevValue) => {
        return !tf;
      });
    }, 3000);
  });

  function click() {
    changeIsLogin((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div>
      <span>{!isLogin ? "회원가입을 해 주세요!" : "반갑습니다~"}</span>
      <button onClick={click}>{!isLogin ? "로그인" : "로그아웃"}</button>
    </div>
  );
}

root.render(<App />);
