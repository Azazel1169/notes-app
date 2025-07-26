import { useState } from 'react';

// =======================
// NoteForm Component
// =======================

// --- State Initialization Section ---
// Initializes state variables for the form fields: title, priority, category, and description.
const NoteForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  // --- Form JSX Section ---
  // Renders the form with input fields for title, priority, category, and description.
  return (
    <form className='mb-6'>
      {/* --- Title Input Block --- */}
      {/* Input for the note's title */}
      <div className='mb-4'>
        <label htmlFor='title' className='block font-semibold'>
          Title
        </label>
        <input
          name='title'
          type='text'
          className='w-full p-2 border rounded-lg'
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      {/* --- Priority Select Block --- */}
      {/* Dropdown to select the note's priority */}
      <div className='mb-4'>
        <label htmlFor='priority' className='block font-semibold'>
          Priority
        </label>
        <select
          name='priority'
          type='text'
          className='w-full p-2 border rounded-lg'
          value={formData.priority}
          onChange={handleChange}
        >
          <option value='High'>🔴 High</option>
          <option value='Medium'>🟡 Medium</option>
          <option value='Low'>🟢 Low</option>
        </select>
      </div>

      {/* --- Category Select Block --- */}
      {/* Dropdown to select the note's category */}
      <div className='mb-4'>
        <label htmlFor='category' className='block font-semibold'>
          Category
        </label>
        <select
          name='category'
          type='text'
          className='w-full p-2 border rounded-lg'
          value={formData.category}
          onChange={handleChange}
        >
          <option value='Work'>📂 Work</option>
          <option value='Personal'>🏠 Personal</option>
          <option value='Ideas'>💡 Ideas</option>
        </select>
      </div>

      {/* --- Description Textarea Block --- */}
      {/* Textarea for the note's description */}
      <div className='mb-4'>
        <label htmlFor='description' className='block font-semibold'>
          Description
        </label>
        <textarea
          name='description'
          type='text'
          className='w-full p-2 border rounded-lg'
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* --- Submit Button Block --- */}
      {/* Button to submit the form */}
      <button className='w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600'>
        Add Note
      </button>
    </form>
  );
};

// --- Export Section ---
// Exports the NoteForm component for use in other files.
export default NoteForm;
