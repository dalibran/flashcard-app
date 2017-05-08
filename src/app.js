//
// {
//   cards: [{ deckId: 123 }],
//   decks: [{ }]
// }
//

const cards = (state, action) => {
   switch (action.type) {
    case 'ADD_CARD':
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date
      });

      return state.concat([newCard]);
    default:
      return state || [];
  }
};


const store = Redux.createStore(Redux.combineReducers({
  cards
}));

const App = (props) => {
  return(<div className='app'>
      { props.children }
    </div>);
}

ReactDOM.render(<App> Hello <strong>React</strong> </App>, document.getElementById('root'));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'ADD_CARD',
  data: {
    front: 'front',
    back: 'back'
  }
});

store.dispatch({
  type: 'ADD_CARD',
  data: {}
});
