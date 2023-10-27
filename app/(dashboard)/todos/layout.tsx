import NewTodoForm from "@/components/NewTodoForm"

const TodoLayout = ({ children }: { children: React.ReactNode }) => {
	<>
		<NewTodoForm />
		<div>{children}</div>
	</>
}

export default TodoLayout