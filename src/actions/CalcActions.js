import AppDispatcher from '../AppDispatcher'

const CalcActions = {
  numClick(num) {
    AppDispatcher.dispatch({
      type: 'NUM_CLICK',
      payload: { num }
    })
    console.log('in action num:', num);
  }
}

export default CalcActions;
