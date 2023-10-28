import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
	return NextResponse.json(
		{
			"id": 1,
			"task": "Buy groceries",
			"completed": false
		}
	)
}

export const POST = async (request: Request) => {
	const todo = await request.json();
	return NextResponse.json({ message: `received todo: ${todo.task}` })
}
