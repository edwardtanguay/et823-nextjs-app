import NewTodoForm from "@/components/NewTodoForm"

const TodoLayout = ({ children }: { children: React.ReactNode }) => {
	return (
	<div>
			<div className="mb-4">
		<NewTodoForm />
		</div>
		<div>{children}</div>
	</div>
	)
}

export default TodoLayout