import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}


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
	},
	{
		href: '/employees', title: 'Employees'
	}
]

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className} suppressHydrationWarning={true}>
				<ul className="flex gap-3 bg-slate-700 text-gray-400 p-4">
					{links.map((link, i) => (
						<li key={i}><Link href={link.href}>{link.title} </Link></li>
					))}
				</ul>
				{children}
			</body>
		</html>
	)
}
