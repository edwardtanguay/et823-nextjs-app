import fs from 'fs';

interface IProps {
	params: {
		todos: string[]
	}
}

const PageTodos = ({ params }: IProps) => {
	const urlSegments = params.todos;

	// fs.writeFileSync('test.txt', 'content') // we are in a server component, therefore this is possible, BUT NOT AT VERCEL
	const content = fs.readFileSync('test.txt', { encoding: 'utf8', flag: 'r' });
	console.log(content);
	return (
		<div className="pageTodos">
			<div>This is the todos page with dashboard layout.</div>
			<div>The URL segments are: <b>{urlSegments.map(m => m).join(', ')}</b></div>
			<span>css test</span>
			<p className="message">test Sass</p>
			<p>{content}</p>
		</div>
	)
}
export default PageTodos










