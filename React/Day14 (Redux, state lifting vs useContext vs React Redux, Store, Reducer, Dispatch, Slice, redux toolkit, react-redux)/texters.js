//demo state structure in store with multiple slices
//global state in store
//when u useSelector, the state parameter in its fn will have this structure
const state = {
    slice1:{
        count:0
    },
    slice2:{
        count:2,
        name:"Rohit"
    },
    slice3:{
        login:true,
    }
}