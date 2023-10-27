import { IEmployee } from '@/app/interfaces';
import axios from 'axios';

const getEmployees = () => {
	return new Promise<IEmployee[]>(async (resolve, reject) => {
		const employees = (await axios.get('https://edwardtanguay.vercel.app/share/employees.json')).data
		resolve(employees);
	})
}

export default async function PageEmployees() {
	const employees = await getEmployees();
	return (
		<>
			<h2 className="text-2xl mb-2">Employees Page</h2>
			<p className="mb-2">There are {employees.length} employees.</p>
			<ul className="list-disc ml-4">
				{employees.map((emp, i) => {
					return (
						<li key={i}>{emp.firstName}</li>
					)
				})}
			</ul>
		</>
	);
}