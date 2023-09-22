import React from "react";

const UploadProject = () => {
	const user={
		user:{
			_id:"abcd",
			role:"Student"
		}
	}

	return (
		<>
		{
			user.user.role === "Student"?
			(
				<div className="mt-5">
			<div class="mx-auto bg-white p-6 rounded-xl mb-5 shadow-[rgba(0,0,0,0.1)_0px_15px_20px_0px,rgba(0,0,0,0.04)_0px_10px_10px_-5px] w-[70%] flex flex-col justify-center items-center">
				<h2 className="text-2xl font-bold mb-3 border-b-2 p-2">Upload Project</h2>
				<form action="#" method="POST" enctype="multipart/form-data" className="w-[80%] p-2">
					<div class="mb-4">
						<label for="title" class="block text-gray-700 font-bold mb-2 ">
							Title:
						</label>
						<input type="text" id="title" name="title" class="w-full p-2 border rounded" required />
					</div>
					<div className="flex gap-3">
						<div class="mb-4 w-1/2">
							<label for="description" class="block text-gray-700 font-bold mb-2">
								Description:
							</label>
							<textarea
								type="text"
								id="description"
								name="description"
								class="w-full p-2 border rounded"
								required
							/>
						</div>
						<div class="mb-4 w-1/2">
							<label for="methodology" class="block text-gray-700 font-bold mb-2">
								Methodology:
							</label>
							<textarea
								type="text"
								id="methodology"
								name="methodology"
								class="w-full p-2 border rounded"
								required
							/>
						</div>
					</div>

					<div class="mb-4">
						<label for="outcomes" class="block text-gray-700 font-bold mb-2">
							Outcomes:
						</label>
						<textarea type="text" id="outcomes" name="outcomes" class="w-full p-2 border rounded" required />
					</div>
					<div class="mb-4">
						<label for="report" class="block text-gray-700 font-bold mb-2">
							Report:
						</label>
						<input
							type="file"
							id="report"
							name="report"
							accept=".pdf,.docx"
							class="w-full p-2 border rounded"
							required
						/>
					</div>
					<div class="mb-4">
						<label for="cover-photo" class="block text-gray-700 font-bold mb-2">
							Cover Photo:
						</label>
						<input
							type="file"
							id="cover-photo"
							name="cover_photo"
							accept="image/*"
							class="w-full p-2 border rounded"
							required
						/>
					</div>
					<div class="mb-4">
						<label for="files" class="block text-gray-700 font-bold mb-2">
							Files (Multiple):
						</label>
						<input
							type="file"
							id="files"
							name="files[]"
							multiple
							class="w-full p-2 border rounded"
							required
						/>
					</div>
					{/* <div class="mb-4">
						<label for="status" class="block text-gray-700 font-bold mb-2">
							Status:
						</label>
						<select id="status" name="status" class="w-full p-2 border rounded" required>
							<option value="pending">Pending</option>
							<option value="verified">Verified</option>
							<option value="rejected">Rejected</option>
						</select>
					</div> */}
					<div class="mb-4 flex justify-center">
						<button
							type="submit"
							class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
			):(
				<div className="mt-5">
			<div class="mx-auto bg-white p-6 rounded-xl mb-5 shadow-[rgba(0,0,0,0.1)_0px_15px_20px_0px,rgba(0,0,0,0.04)_0px_10px_10px_-5px] w-[70%] flex flex-col justify-center items-center">
				<h2 className="text-2xl font-bold mb-3 border-b-2 p-2">Upload Project</h2>
				<form action="#" method="POST" enctype="multipart/form-data" className="w-[80%] p-2">
					<div class="mb-4">
						<label for="title" class="block text-gray-700 font-bold mb-2 ">
							Title:
						</label>
						<input type="text" id="title" name="title" class="w-full p-2 border rounded" required />
					</div>
					<div className="flex gap-3">
						<div class="mb-4 w-1/2">
							<label for="description" class="block text-gray-700 font-bold mb-2">
								Description:
							</label>
							<textarea
								type="text"
								id="description"
								name="description"
								class="w-full p-2 border rounded"
								required
							/>
						</div>
						<div class="mb-4 w-1/2">
							<label for="methodology" class="block text-gray-700 font-bold mb-2">
								Methodology:
							</label>
							<textarea
								type="text"
								id="methodology"
								name="methodology"
								class="w-full p-2 border rounded"
								required
							/>
						</div>
					</div>

					<div class="mb-4">
						<label for="outcomes" class="block text-gray-700 font-bold mb-2">
							Outcomes:
						</label>
						<textarea type="text" id="outcomes" name="outcomes" class="w-full p-2 border rounded" required />
					</div>
					<div class="mb-4">
						<label for="report" class="block text-gray-700 font-bold mb-2">
							Report:
						</label>
						<input
							type="file"
							id="report"
							name="report"
							accept=".pdf,.docx"
							class="w-full p-2 border rounded"
							required
						/>
					</div>
					<div class="mb-4">
						<label for="cover-photo" class="block text-gray-700 font-bold mb-2">
							Cover Photo:
						</label>
						<input
							type="file"
							id="cover-photo"
							name="cover_photo"
							accept="image/*"
							class="w-full p-2 border rounded"
							required
						/>
					</div>
					<div class="mb-4">
						<label for="files" class="block text-gray-700 font-bold mb-2">
							Files (Multiple):
						</label>
						<input
							type="file"
							id="files"
							name="files[]"
							multiple
							class="w-full p-2 border rounded"
							required
						/>
					</div>
					 <div class="mb-4">
						<label for="status" class="block text-gray-700 font-bold mb-2">
							Status:
						</label>
						<select id="status" name="status" class="w-full p-2 border rounded" required>
							<option value="pending">Pending</option>
							<option value="verified">Verified</option>
							<option value="rejected">Rejected</option>
						</select>
					</div> 
					<div class="mb-4 flex justify-center">
						<button
							type="submit"
							class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
			)
		}
		</>
	);
};

export default UploadProject;
