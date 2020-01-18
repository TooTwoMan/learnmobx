import {observable, action, computed} from 'mobx'
import moment from 'moment'

class AppStore {
    @observable time = ""
    @observable todos = []

    @computed get desc(){
        return `${ this.time } 还有 ${this.todos.length} 条任务待完成`
    }

    @action addTodo(todo) {
        this.todos.push(todo)
    }

    @action deleteTodo(todo) {
        this.todos.pop()
    }

    @action resetTodo(todo) {
        this.todos = []
    }

    @action getNow() {
        this.time = moment().format("YYYY-MM-DD HH:MM:SS")
    }
}

const store = new AppStore()

setInterval(()=> {
    store.getNow()
},1000)

export default store