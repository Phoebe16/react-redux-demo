import { combineReducers } from 'redux';
import counter from './counter';
import infoMember from './infoMember';

// 使用redux的combineReducers方法将所有reducer打包起来，注意这里可以
// 简写成如下形式的条件是store中的state的属性名必须与子reducer名相同
const rootReducer = combineReducers({
    counter,
    infoMember
});

export default rootReducer;
