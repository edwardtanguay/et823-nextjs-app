interface IProps {
	params: {
		id: number;
		sortOrder: string;
	}
}

const DocsIdPage = ({ params }: IProps) => {
	const { id, sortOrder } = params;
	return (
		<>
			<div>id: {id}</div>
			<div>sortOrder: {sortOrder}</div>
		</>
	)
}

export default DocsIdPage