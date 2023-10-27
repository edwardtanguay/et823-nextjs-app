const DashboardLayout = ({children}: {children: React.ReactNode}) => {
	return (
		<>
		<h1>HEADER</h1>
		{children}
		<h1>FOOTER</h1>
		</>
	)
}

export default DashboardLayout