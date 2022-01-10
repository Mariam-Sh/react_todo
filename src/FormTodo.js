import React, {useState, useEffect, useRef} from 'react'

const FormTodo = ({addTodo}) =>  {
    const [value, setValue] = useState('');

    const valueRef = useRef();
    
    useEffect(() => {
        valueRef.current.focus()
    }, [])

    const handlerSubmit = (e) => {
        e.preventDefault();
        addTodo({
            id : Date.now(),
            title : value,
            done : false
        })
        setValue('')
    }

    return (
        <form onSubmit={handlerSubmit}>
            <input value={value} onChange={(e) => setValue(e.target.value)}  ref={valueRef}/>
            <input type="submit" value="Add todo"/>
        </form>
    )
}

export default FormTodo
