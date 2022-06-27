let initialState = {
    elements: [
        {id: 1, name: 'Kаталог'},
        {id: 2, name: 'Примеры работ'},
        {id: 3, name: 'Mонтаж'},
        {id: 4, name: 'Отзывы'},
        {id: 5, name: 'Ответы на вопросы'},
        {id: 6, name: 'Контакты'},
    ]
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default headerReducer;