const initialState= [
    {
        id: 0,
        title: "Last epizode",
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
    }
]

const listsReducer =(state= initialState, action)=>{
    switch (action.type) {
        default:
            return state;

    }
}

export default listsReducer