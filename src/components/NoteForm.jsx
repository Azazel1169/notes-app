import { useState } from 'react';
import Textinput from './inputs/Textinput';
import Selectinput from './inputs/Selectinput';

// State Initialization Section
const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  // Input Change Handler Section
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form Submit Handler Section
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;
    const newNote = { id: Date.now(), ...formData };
    setNotes([newNote, ...notes]);
    setFormData({
      title: '',
      priority: 'Medium',
      category: 'Work',
      description: '',
    });
  };

  // Form JSX Section
  return (
    <>
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className='w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition md-4'
      >
        {isFormVisible ? 'Hide Form' : 'Add New Note '}
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className='mb-6'>
          {/* Title Input Block */}
          <div className='mb-4'>
            <Textinput
              label='Title'
              name='title'
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          {/* Priority Select Block */}
          <Selectinput
            label='Priority'
            name='priority'
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: 'High', label: '🔴 High' },
              { value: 'Medium', label: '🟡 Medium' },
              { value: 'Low', label: '🟢 Low' },
            ]}
          />
          {/* Category Select Block */}
          <Selectinput
            label='Category'
            name='category'
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: 'Work', label: '📂 Work' },
              { value: 'Personal', label: '🏠 Personal' },
              { value: 'Ideas', label: '💡 Ideas' },
            ]}
          />
          {/* Description Textarea Block */}
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
          {/* Submit Button Block */}
          <div>
            <button className='w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600'>
              Add Note
            </button>
          </div>
        </form>
      )}
    </>
  );
};

// Export Section
export default NoteForm;
