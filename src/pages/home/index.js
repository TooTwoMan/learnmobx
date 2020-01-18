/* eslint-disable default-case */
import React from 'react'
// inject 是注入的意思
import {inject,observer} from 'mobx-react'
// import { observable } from 'mobx'
import './style.css'

@inject ('store') @observer
class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = []
    }

    handleTodos(type) {
        let {store} = this.props
        switch (type) {
            case 'add' :
                store.addTodo('添加一条新任务')
            break;
            case 'delete' :
                store.deleteTodo()
            break;
            
            case 'reset' :
                store.resetTodo()
            break;
        }
    }

    render (){
        let { store } = this.props
        return(
            <div className="home">
                <h1>在 React 中使用 mobx</h1>
                <div>{ store.desc }</div>

                <button onClick={this.handleTodos.bind(this, 'add')}>添加一个任务</button>
                <button onClick={this.handleTodos.bind(this, 'delete')}>删除一个任务</button>
                <button onClick={this.handleTodos.bind(this, 'reset')}>任务重置</button>

                {
                    store.todos.map((el,index,key)=> {
                        return (
                            <div key={index}>{ el }</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Home