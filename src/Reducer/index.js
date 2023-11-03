import {combineReducers} from 'redux';
import tablereducer from './tablereducer';
import filterreducer from './filterreducer';
import cartreducer from './cartreducer'
const reducer = combineReducers({
    tablereducer : tablereducer,
    filterreducer: filterreducer,
    cartreducer : cartreducer
})

export default reducer;