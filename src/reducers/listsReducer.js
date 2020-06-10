import CONSTANTS from '../actions'
let listId = 2
const initialState= [
    {
        id: 0,
        title: "Last episode",
        cards:[
            {
                id: 0,
                text: "hi this is the first card",
            },
            {
                id: 1,
                text: "ksdfjlasdkfjlaskdfj lkasd asdf asdf asdf "
            },
        ],
    },
    {
        id: 1,
        title: "next episode",
        cards:[
            {
                id: 0,
                text: "hi this is the first card",
            },
            {
                id: 1,
                text: "ksdf asdf asdf "
            },
            {
                id: 2,
                text: "ksd ;, oj k [po  "
            },
        ],
    }
]

const listsReducer =(state= initialState, action)=>{
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList={
                title: action.payload,
                cards:[],
                id: listId
            }
            listId +=1
            return [...state,newList]
        default:
            return state;

    }
}

export default listsReducer