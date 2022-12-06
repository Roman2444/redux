import { connect } from "react-redux";
import * as actions from '../actions';
import {useSelector} from 'react-redux';

// import { bindActionCreators } from "redux";

const Counter = ({counter, dec, inc, rnd}) => {

    const counter = useSelector(state => state.counter)

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            {/* <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button> */}
        </div>

    )
}

// const mapStateToProps = (state) => {
//     return {
//         counter: state.value
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return  bindActionCreators(actions, dispatch)
// }
    
// export default connect(mapStateToProps, actions)(Counter);
export default Counter;