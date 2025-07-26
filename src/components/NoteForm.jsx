import { useState } from 'react';

/*
==========================================
 NoteForm Component
==========================================

 Table of Contents:
 1. State Initialization Section
 2. Input Change Handler
 3. Form JSX Section
    - Title Input Block
    - Priority Select Block
    - Category Select Block
    - Description Textarea Block
    - Submit Button Block
 4. Export Section
*/

// ==========================================
// 1. State Initialization Section
//    - Initializes state for form fields
// ==========================================
const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: '',
  });

  // ==========================================
  // 2. Input Change Handler
  //    - Updates form state on input change
  // ==========================================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!formData.title || !formData.description) return;

    // Create note object
    const newNote = { id: Date.now(), ...formData };

    // Add notes to state
    setNotes([newNote, ...notes]);

    // Reset form data
    setFormData({
      title: '',
      priority: 'Medium',
      category: 'Work',
      description: '',
    });
  };

  // ==========================================
  // 3. Form JSX Section
  //    - Renders the form and its fields
  // ==========================================
  return (
    <form onSubmit={handleSubmit} className='mb-6'>
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

// ==========================================
// 4. Export Section
//    - Exports the NoteForm component
// ==========================================
export default NoteForm;
