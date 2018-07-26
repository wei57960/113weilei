import { ADD_ITEM, DELETE_ITEM, DELETE_ITEMS, ITEM_STICK, HANDLE_INDEX, ADD_ITEM_INDEX, DEL_ITEM_INDEX } from '../const/ActionTypes'
const defaultMsg = {
    stickItems: [],
    dataItems: [{ img: require("../image/头像 男孩.png"), title: '小年糕前端训练营111', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: require("../image/头像 男孩.png"), title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: require('../image/头像 女孩.png'), title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: require("../image/头像 男孩.png"), title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: require('../image/头像 女孩.png'), title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
        , { img: require("../image/头像 男孩.png"), title: '小年糕前端训练营', message: 'Peter:了解了解[开心]', time: '上午9:35' }
    ],
    defaultBottoms: [{
        img: require("../image/消息.png"), title: '消息'
    }
        , { img: require("../image/通讯录.png"), title: '联系人' }
        , {
        img: require("../image/发现.png"), title: '发现'
    }
        , { img: require("../image/我.png"), title: '我' }
    ],
    idex: null,
    idexArr: []
}

export default function list(state = defaultMsg, action) {
    switch (action.type) {
        case ADD_ITEM: {
            const newList = state.dataItems.slice()
            if (state.stickItems.length) {
                for (let i = 0; i < state.stickItems.length; i++) {
                    newList.shift(state.stickItems[i])
                }
            }
            newList.unshift(action.text);
            if (state.stickItems.length) {
                for (let i = 0; i < state.stickItems.length; i++) {
                    newList.unshift(state.stickItems[i])
                }
            }
            const newState = { ...state };
            newState.dataItems = newList;
            return { ...newState }
        }
        case DELETE_ITEM: {
            const newList = state.dataItems.slice();
            newList.splice(state.idex, 1);
            const newState = { ...state };
            newState.dataItems = newList
            return {
                ...newState, idex: null
            }
        }

        case ITEM_STICK: {
            const newList = state.dataItems.slice();
            const Item = newList.splice(state.idex, 1);
            state.stickItems.unshift(Item[0])
            newList.unshift(state.stickItems[0])
            const newState = { ...state };
            newState.dataItems = newList
            return {
                ...newState, idex: null
            }
        }
        case ADD_ITEM_INDEX: {
            const newidexArr = state.idexArr.slice();
            newidexArr.push(action.index)
            const newState = { ...state }
            newState.idexArr = newidexArr
            return {
                ...newState
            }
        }
        case DEL_ITEM_INDEX: {
            const newidexArr = state.idexArr.slice();
            const deleteItem = newidexArr.findIndex((value) => { return value === action.index })
            newidexArr.splice(deleteItem, 1)
            const newState = { ...state }
            newState.idexArr = newidexArr
            return {
                ...newState
            }
        }
        case HANDLE_INDEX: {
            return {
                ...state, idex: action.index
            }
        }
        case DELETE_ITEMS: {
            // submitDelete = () => { //多个删除
            //   this.state.itemArr.sort();     //排序
            //   const newMsg = this.state.defaultMsg.slice();
            //   this.state.itemArr.reverse();                     //反转
            //   console.log(this.state.itemArr)
            //   for (let i = 0; i < this.state.itemArr.length; i++) {   //删除
            //     newMsg.splice(this.state.itemArr[i], 1);
            //   }
            //   this.setState({
            //     defaultMsg: newMsg,
            //     isDeleteActive: false,
            //     itemArr: []
            //   })
            // }
            break;
        }
        default:
            return state;
    }

}