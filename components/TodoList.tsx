import { ITodo } from "@/app/interfaces"
import Todo from "./Todo"

const TodoList = ( {todos} : { todos: ITodo[]}) => {
	return (
		<div>
			{todos.map((todo, i) => (
				<Todo todo={todo} key={i}/>
			))}
		</div>
	)
}

export default TodoList