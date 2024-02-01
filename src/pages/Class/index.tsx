import { Component } from "react";

interface ClassState {
  count: number;
}

export class Class extends Component<object, ClassState> {
  constructor(props: object) {
    super(props);
    this.state = { count: 0 };
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p className="text-2xl">Contador Class: {this.state.count}</p>
        <button
          className="mt-10 border-2 p-2 bg-gray-300"
          onClick={this.increaseCount}
        >
          Incrementar
        </button>
      </div>
    );
  }
}

// export function Functional() {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <p className="text-2xl">Contador Functional: {count}</p>
//       <button
//         className="mt-10 border-2 p-2 bg-gray-300"
//         onClick={increaseCount}
//       >
//         Incrementar
//       </button>
//     </div>
//   );
// }
