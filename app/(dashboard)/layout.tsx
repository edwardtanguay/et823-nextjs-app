import Link from "next/link";

function DashboardLayout({ children }: { children: React.ReactNode }) {
	const links = [
		{
			href: '/', title: 'Home'
		},
		{
			href: '/todos', title: 'Todos'
		},
		{
			href: '/docs', title: 'Docs'
		},
		{
			href: '/products', title: 'Products'
		}
	]
	return (
		<div className="bg-slate-500 h-screen">
			<ul className="flex gap-3 bg-slate-700 text-gray-400 p-3">
				{links.map((link, i) => (
					<li key={i}><Link href={link.href}>{link.title} </Link></li>
				))}
			</ul>
			<div>dashboard header</div>
			{children}
			<div>dashboard footer</div>
		</div>
	);
}

export default DashboardLayout;