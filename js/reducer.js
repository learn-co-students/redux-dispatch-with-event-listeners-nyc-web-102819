// add code snippets from README

let state;

function reducer(state={count: 0},action){
    switch(action.type){
        case 'INCREASE_COUNT':
            return {count: state.count + 1};
        default:
            return state;
    }
}

function dispatch(action){
    state= reducer(state,action);
    render();
}

function render(){
    let container = document.getElementById('container');
    container.textContent= state.count
}

dispatch({type: '@@INIT'})


//writing vanilla JS event listener
//find the button
let button = document.getElementById('button')

//add event listener on button so on click, dispatch runs
button.addEventListener('click', ()=>{
    dispatch({type: 'INCREASE_COUNT'})
})