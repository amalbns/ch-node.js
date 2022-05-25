import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../actionTypes/listTask"



const initialState = {
    listTasks : [
        { id: Math.random() , text:"task1" , isDone : false },
        { id: Math.random() , text:"task2" , isDone : false }
    ]
}

const listReducer = (state = initialState,{type ,playload}) => {
    switch (type) {
        case ADD_TASK: return {...state,listTasks:[...state.listTasks,playload]}
        case DELETE_TASK:return {...state,listTasks: state.listTasks.filter(el => el.id !== playload)}  
        case DONE_TASK:return {...state, listTasks: state.listTasks.map((el)=> (el.id ===playload ? {...el , isDone: !el.isDone} : el))}
        case EDIT_TASK:return {...state, listTasks: state.listTasks.map((el)=>(el.id === playload.id? {...el, text: playload.newTask} : el))}   
    
        default: 
            return state
    }
}

export default listReducer