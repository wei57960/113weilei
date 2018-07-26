import { ADD_ITEM, DELETE_ITEM, DELETE_ITEMS, ITEM_STICK, IS_DIALOG, IS_MENU, CLOSE_BUTTON, HANDLE_INDEX, IS_DELETE, ADD_ITEM_INDEX, DEL_ITEM_INDEX } from '../const/ActionTypes'
//action创建函数
export function addItem(text) {
    return { type: ADD_ITEM, text }
}

export function deleteItem() {
    return { type: DELETE_ITEM }
}

export function deleteItems(indexs) {
    return { type: DELETE_ITEMS, indexs }
}

export function itemStick() {
    return { type: ITEM_STICK }
}

export function handleIndex(index) {
    return { type: HANDLE_INDEX, index }
}

export function isMenu() {
    return { type: IS_MENU }
}

export function isDialog() {
    return { type: IS_DIALOG }
}

export function addItems(index) {
    return { type: ADD_ITEM_INDEX, index }
}

export function delItems(index) {
    return { type: DEL_ITEM_INDEX, index }
}
export function isDelete() {
    return { type: IS_DELETE }
}

export function closeButton() {
    return { type: CLOSE_BUTTON }
}

