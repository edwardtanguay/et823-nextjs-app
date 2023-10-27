import { ITodo } from "@/app/interfaces"

const Todo = ({ todo }: { todo: ITodo }) => {
	return (
		<div>{todo.content}</div>
	)
}

export default Todo