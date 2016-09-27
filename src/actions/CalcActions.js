import AppDispatcher from '../AppDispatcher'

const CalcActions = {
  numClick(num) {
    AppDispatcher.dispatch({
      type: 'NUM_CLICK',
      payload: { num }
    })
    // console.log('in action num:', num);
  },

  clear() {
    AppDispatcher.dispatch({
      type: 'CLEAR'
    })
  },

  equals() {
    AppDispatcher.dispatch({
      type: 'EQUALS'
    })
  }

}

export default CalcActions;
