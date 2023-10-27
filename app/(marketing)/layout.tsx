
function MarketingLayout({ children }: {children: React.ReactNode}) {
	return (
		<div className="bg-yellow-100 h-screen">
			<div>marketing header</div>
			{children}
			<div>marketing footer and a <span>css test</span></div>
		</div>
	);
}

export default MarketingLayout;