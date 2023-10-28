import { newTodo } from '@/utils/actions';

const NewTodoForm = ({}) => {
	return (
		<>
			<div>
				<form action={newTodo}>
					<input type="text" name="content" className="border border-gray-600" />
					<button className='ml-3' type="submit">new todo</button>
				</form>
			</div>
		</>
	)
}

export default NewTodoForm