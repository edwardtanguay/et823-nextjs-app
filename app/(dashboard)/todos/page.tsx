import db from '@/utils/db';

const getData = async () => {
	return await db.todo.findMany({});
}

const PageTodos = async () => {
	const todos = await getData()
	return ( 
		<>
			<h2 className="text-2xl">{todos.length} Todos</h2>	
		<p>testing</p>
		</>
	 );
}

export default PageTodos;