import { useState, useEffect, useRef } from "react"

function Todo() {
    const [loading, setLoading] = useState(true)
    const [todo, setTodo] = useState({})

    // const isMounted - useRef(true)


    //The below created a memory leak error (cannot perform state update on an unmounted component) in React 17. Seems fixed in React 18.
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => res.json())
        .then((data) => {
            setTimeout(() => {
                // if (isMounted.current) {
                    setTodo(data)
                    setLoading(false)
                    //}
            }, 3000)
        })

    //Runs when component is unmounted
        // return(() => {
        //     isMounted.current=false
        // })
    }
    // , [isMounted]
    )

    return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
}

export default Todo