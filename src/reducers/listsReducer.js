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
        default:
            return state;

    }
}

export default listsReducer