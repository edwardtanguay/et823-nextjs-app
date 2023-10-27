
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-slate-500 h-screen p-4">
			{children}
		</div>
	);
}

export default DashboardLayout;