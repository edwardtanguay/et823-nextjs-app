
function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-slate-500 h-screen p-4">
			<div>dashboard header</div>
			{children}
			<div>dashboard footer</div>
		</div>
	);
}

export default DashboardLayout;