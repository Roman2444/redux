import { connect } from "react-redux";
import * as actions from '../actions';
import { bindActionCreators } from "redux";

const Counter = ({counter, dec, inc, rnd}) => {

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
        </div>

    )
}


const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

const mapDispatchToProps = (dispatch) => {
    const {dec, inc, rnd} = bindActionCreators(actions, dispatch)
    return {
        inc,
        dec,
        rnd: () => {
            const value =  Math.floor(Math.random() * 10)
            rnd(value);
        } 
    }
}
    


export default connect(mapStateToProps, mapDispatchToProps)(Counter);