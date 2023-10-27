import { ITodo } from '@/app/interfaces';
import TodoList from '@/components/TodoList';
import db from '@/utils/db';

const getData = async () => {
	return await db.todo.findMany({});
}

const PageTodos = async () => {
	const todos:ITodo[] = await getData()
	return (
		<>
			<h2 className="text-2xl">{todos.length} Todos</h2>
			<TodoList todos={todos} />
		</>
	);
}

export default PageTodos;