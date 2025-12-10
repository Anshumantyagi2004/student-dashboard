import { useEffect, useState } from 'react';

export default function Form(props) {
    const{handleReset,handleSubmit,handleChange,formData,setFormData}=props
    return (<>
        <form className="p-6 max-w-md mx-auto border rounded-lg shadow-md space-y-4 bg-white">
            <div className="relative">
                <label className="absolute -top-3 left-2 text-blue-500 bg-white px-1">
                    Month of Admission
                </label>
                <select
                    name="month"
                    value={formData.month}
                    onChange={handleChange}
                    className="border-2 border-gray-400 w-full rounded-md h-10 px-2 focus:border-blue-500 outline-none"
                >
                    <option value="">Select Month</option>
                    {["January", "February", "March", "April", "May", "June"].map(m => (
                        <option key={m} value={m}>{m}</option>
                    ))}
                </select>
            </div>

            <div className="relative">
                <label className="absolute -top-3 left-2 text-blue-500 bg-white px-1">
                    Name
                </label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    className="border-2 border-gray-400 w-full rounded-md h-10 px-2 focus:border-blue-500 outline-none"
                />
            </div>

            <div className="relative">
                <label className="absolute -top-3 left-2 text-blue-500 bg-white px-1">
                    Class
                </label>
                <input
                    name="className"
                    value={formData.className}
                    onChange={handleChange}
                    type="text"
                    className="border-2 border-gray-400 w-full rounded-md h-10 px-2 focus:border-blue-500 outline-none"
                />
            </div>

            <div className="relative">
                <label className="absolute -top-3 left-2 text-blue-500 bg-white px-1">
                    Roll No
                </label>
                <input
                    name="rollNo"
                    value={formData.rollNo}
                    onChange={handleChange}
                    type="number"
                    className="border-2 border-gray-400 w-full rounded-md h-10 px-2 focus:border-blue-500 outline-none"
                />
            </div>

            <div className='!-mt-[0] px-1'>
                <p className="text-blue-500 mb-1">Section</p>
                <div className="flex gap-6">
                    {["A", "B", "C"].map((sec) => (
                        <label key={sec} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="section"
                                value={sec}
                                checked={formData.section === sec}
                                onChange={handleChange}
                            />
                            {sec}
                        </label>
                    ))}
                </div>
            </div>

            <div className="flex justify-between">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleSubmit}>
                    Add
                </button>

                <button
                    type="button"
                    onClick={handleReset}
                    className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
                >
                    Refresh
                </button>
            </div>
        </form>

    </>)
}
