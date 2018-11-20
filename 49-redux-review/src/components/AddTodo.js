import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

// controlled component version - both work!

// class AddTodo extends React.Component {
//   state = {
//     inputText: ""
//   };
//
//   handleInputChange = e => {
//     this.setState({
//       inputText: e.target.value
//     });
//   };
//
//   render() {
//     return (
//       <div>
//         <form
//           onSubmit={event => {
//             event.preventDefault();
//             this.props.addTodo(this.state.inputText);
//             this.setState({
//               inputText: ""
//             });
//           }}
//         >
//           <input onChange={this.handleInputChange} />
//           <button type="submit"> Add Todo </button>
//         </form>
//       </div>
//     );
//   }
// }

// OR... //

// functional compoent -- both work!
const AddTodo = ({ addTodo }) => {
  // the 'addTodo' prop is provided by the 'connect' wrapper at the end of the file
  let input;
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          addTodo(input.value);
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit"> Add Todo </button>
      </form>
    </div>
  );
};

// connect and map addTodo to props
// when we pass this function (as the second argument) to connect,
// it provides the AddTodo component with a *prop* that
// dispatches the addTodo action to the reducer, along with the value of the user's input - the 'text' of the todo

const mapDispatchToProps = dispatch => {
  return {
    addTodo: inputText => dispatch(addTodo(inputText))
  };
};

// remember that mapDispatchToProps is the 2nd argument to connect -
// if this component needed some other data from the store, then the first space
// (where null is currently passed) would handle this
export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
