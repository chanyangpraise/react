// class Study {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name}을 공부하고 있습니다.`);
//   }
// }

// class Coding extends Study{
//   constructor(name, today) {
// 		super(name);
// 		this.today = today;
//   }

//   speak() {
//     console.log(`${this.today}은 ${this.name}를 공부 하고 있습니다.`);
//   }
// }

// const coding = new Coding("React", "오늘");
// coding.speak();

// // 오늘은 React를 공부 하고 있습니다.

// 2

// const root = document.getElementById("root");

// class H1 extends React.Component{
//   constructor(props) {
//     super(props)
//   }

//   render() {
// 		return <h1>여기는 {this.props.name}!!!</h1>;
//   }
// }

// const Container = () => {
//   return (
//     <React.Fragment>
//       <H1 name="대한민국" />
//     </React.Fragment>
//   );
// };
// ReactDOM.render(<Container />, root);

// 3
// const root = document.getElementById("root");

// function H1(props) {
//   return <h1>여기는 {props.name}!!!</h1>;
// }

// const Container = () => {
//   return (
//     <React.Fragment>
//       <H1 name="대한민국" />
//     </React.Fragment>
//   );
// };
// ReactDOM.render(<Container />, root);

// 4
// const root = document.getElementById("root");
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };
//   }

//   componentDidMount() {
//     console.log("페이지 로딩이 완료되었습니다");
//   }

//   add = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <span>클릭: {this.state.counter}</span>
//         <button style={{ color: "red" }} onClick={this.add}>
//           클릭
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, root);

// 5 
