import { useState } from 'react';
import { createEvent } from '../../api/events';

const EventCreateForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		description: '',
		date: '',
		price: '',
		capacity: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await createEvent(formData);
			console.log('Event created successfully:', response);
			// Reset form or show success message
		} catch (error) {
			console.error('Error creating event:', error.response.data.msg);
			// Show error message
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md"
		>
			<div className="mb-4">
				<label htmlFor="name" className="block text-gray-700 font-medium mb-2">
					Event Name:
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="description"
					className="block text-gray-700 font-medium mb-2"
				>
					Event Description:
				</label>
				<textarea
					id="description"
					name="description"
					value={formData.description}
					onChange={handleChange}
					required
					className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
				></textarea>
			</div>
			<div className="mb-4">
				<label htmlFor="date" className="block text-gray-700 font-medium mb-2">
					Event Date:
				</label>
				<input
					type="datetime-local"
					id="date"
					name="date"
					value={formData.date}
					onChange={handleChange}
					required
					className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="price" className="block text-gray-700 font-medium mb-2">
					Event Price:
				</label>
				<input
					type="number"
					min={1}
					id="price"
					name="price"
					value={formData.price}
					onChange={handleChange}
					required
					className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="capacity"
					className="block text-gray-700 font-medium mb-2"
				>
					Event Capacity:
				</label>
				<input
					type="number"
					min={1}
					id="capacity"
					name="capacity"
					value={formData.capacity}
					onChange={handleChange}
					required
					className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>
			<button
				type="submit"
				className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
			>
				Create Event
			</button>
		</form>
	);
};

export default EventCreateForm;
