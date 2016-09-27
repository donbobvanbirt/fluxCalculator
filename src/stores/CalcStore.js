import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';

let currentInput = '';

class CalcStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'NUM_CLICK':
          let newNum = action.payload.num;
          // if ( isNaN(parseInt(currentInput[currentInput.length-1])) && isNaN(parseInt(newNum)) ) {
          //   currentInput = 'ERROR';
          // } else {
          //
          // }
          currentInput += newNum;
          this.emit('CHANGE');
          break;
        case 'CLEAR':
          currentInput = '';
          this.emit('CHANGE');
          break;
        case 'EQUALS':
          currentInput = eval(currentInput);
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getInput() {
    return currentInput;
  }
}

export default new CalcStore();
