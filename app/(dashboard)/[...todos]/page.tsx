import fs from 'fs';
import Link from 'next/link';

interface IProps {
	params: {
		todos: string[]
	}
}

const PageTodos = ({ params }: IProps) => {
	const urlSegments = params.todos;

	// fs.writeFileSync('test.txt', 'content') // we are in a server component, therefore this is possible, BUT NOT AT VERCEL
	// const content = fs.readFileSync('test.txt', { encoding: 'utf8', flag: 'r' }); // this doesn't work on Vercel either, can't find the file
	return (
		<div className="pageTodos">
			<div>This is the todos page with dashboard layout.</div>
			<div>The URL segments are: <b>{urlSegments.map(m => m).join(', ')}</b></div>
			<div><Link className="underline" href="/todo/one/two">URL test with 2 extra segments</Link></div>
			<div><Link className="underline" href="/todo/one/two/three">URL test with 3 extra segments</Link></div>
			<div><Link className="underline" href="/todo/one/two/three/four">URL test with 4 extra segments</Link></div>
			<span>css test</span>
			<p className="message">test Sass</p>
		</div>
	)
}
export default PageTodos










