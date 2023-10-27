import fs from 'fs';

const TodosPage = () => {
	fs.writeFileSync('test.txt', 'content')
	return <div>This is the todos page with dashboard layout.</div>
}
export default TodosPage










