//Reducer function: input: state, action --> output: changed state

export const formReducer = (state = {name: "", email: ""}, action) => {
    switch(action.type){
        case "SUBMIT":
            return action.payload;
        default:
            return state;
    }
}



//initial state = {name: "", email: ""}
//changed state =  {name: "Jeevendra", email: "jeeisng@gmail.com"}