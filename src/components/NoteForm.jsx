import { useState } from 'react'; // Import useState hook from React
import Textinput from './inputs/Textinput'; // Import custom Textinput component

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
  // NoteForm component receives notes and setNotes as props
  const [formData, setFormData] = useState({
    // State for all form fields
    title: '', // Title field, initially empty
    priority: 'Medium', // Priority field, default 'Medium'
    category: 'Work', // Category field, default 'Work'
    description: '', // Description field, initially empty
  });

  const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle form visibility, default hidden

  // ==========================================
  // 2. Input Change Handler
  //    - Updates form state on input change
  // ==========================================
  const handleChange = (e) => {
    // Function to handle input changes
    setFormData({
      // Update formData state
      ...formData, // Keep existing formData values
      [e.target.name]: e.target.value, // Update the changed field
    });
  };

  const handleSubmit = (e) => {
    // Function to handle form submission
    e.preventDefault(); // Prevent default form submit behavior
    // Validation
    if (!formData.title || !formData.description) return; // If title or description is empty, do nothing

    // Create note object
    const newNote = { id: Date.now(), ...formData }; // Create new note with unique id and form data

    // Add notes to state
    setNotes([newNote, ...notes]); // Add new note to the beginning of notes array

    // Reset form data
    setFormData({
      // Reset form fields to initial values
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
    <>
      {' '}
      {/* React Fragment to group elements */}
      {/* Toggle Btn */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)} // Toggle form visibility on click
        className='w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition md-4' // Styling classes
      >
        {isFormVisible ? 'Hide Form' : 'Add New Note '} // Button text changes
        based on form visibility
      </button>
      {/* Form */}
      {isFormVisible && ( // Only show form if isFormVisible is true
        <form onSubmit={handleSubmit} className='mb-6'>
          {' '}
          {/* Form element with submit handler and margin-bottom */}
          {/* --- Title Input Block --- */}
          {/* Input for the note's title */}
          <Textinput
            label='Title' // Label for input
            name='title' // Name attribute for input
            value={formData.title} // Value from state
            onChange={handleChange} // Change handler
            required // Field is required
          />
          {/* --- Priority Select Block --- */}
          {/* Dropdown to select the note's priority */}
          <div className='mb-4'>
            {' '}
            {/* Margin-bottom for spacing */}
            <label htmlFor='priority' className='block font-semibold'>
              {' '}
              {/* Label for priority select */}
              Priority
            </label>
            <select
              name='priority' // Name attribute for select
              type='text' // Type attribute (not required for select)
              className='w-full p-2 border rounded-lg' // Styling classes
              value={formData.priority} // Value from state
              onChange={handleChange} // Change handler
            >
              <option value='High'>🔴 High</option> {/* High priority option */}
              <option value='Medium'>🟡 Medium</option>{' '}
              {/* Medium priority option */}
              <option value='Low'>🟢 Low</option> {/* Low priority option */}
            </select>
          </div>
          {/* --- Category Select Block --- */}
          {/* Dropdown to select the note's category */}
          <div className='mb-4'>
            {' '}
            {/* Margin-bottom for spacing */}
            <label htmlFor='category' className='block font-semibold'>
              {' '}
              {/* Label for category select */}
              Category
            </label>
            <select
              name='category' // Name attribute for select
              type='text' // Type attribute (not required for select)
              className='w-full p-2 border rounded-lg' // Styling classes
              value={formData.category} // Value from state
              onChange={handleChange} // Change handler
            >
              <option value='Work'>📂 Work</option> {/* Work category option */}
              <option value='Personal'>🏠 Personal</option>{' '}
              {/* Personal category option */}
              <option value='Ideas'>💡 Ideas</option>{' '}
              {/* Ideas category option */}
            </select>
          </div>
          {/* --- Description Textarea Block --- */}
          {/* Textarea for the note's description */}
          <div className='mb-4'>
            {' '}
            {/* Margin-bottom for spacing */}
            <label htmlFor='description' className='block font-semibold'>
              {' '}
              {/* Label for textarea */}
              Description
            </label>
            <textarea
              name='description' // Name attribute for textarea
              type='text' // Type attribute (not required for textarea)
              className='w-full p-2 border rounded-lg' // Styling classes
              value={formData.description} // Value from state
              onChange={handleChange} // Change handler
            ></textarea>
          </div>
          {/* --- Submit Button Block --- */}
          {/* Button to submit the form */}
          <button className='w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600'>
            {' '}
            {/* Styling classes */}
            Add Note {/* Button text */}
          </button>
        </form>
      )}
    </>
  );
};

// ==========================================
// 4. Export Section
//    - Exports the NoteForm component
// ==========================================
export default NoteForm; // Export NoteForm component as default export
