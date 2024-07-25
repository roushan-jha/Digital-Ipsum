import React, { useState } from 'react'

const preferences = [
    { question: "type of property are you interested", answer: "answer" },
    { question: "what is your preferred location?", answer: "answer" },
    { question: "what is your budget?", answer: "answer" },
];

const Preference = () => {

    const [visibleIndex, setVisibleIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (visibleIndex === index) {
            setVisibleIndex(null); 
        } else {
            setVisibleIndex(index); 
        }
    };

  return (
    <div className='flex flex-col gap-3'>
        <h3 className='font-medium text-lg'>Your Preference</h3>
        {preferences.map((faq, index) => (
            <div key={index} className='bg-white w-full px-4 py-3 rounded-md border-[1px] border-gray-300'>
                <div className="flex justify-between">
                    <p className='text-sm'>{faq.question}</p>
                    <button onClick={() => toggleAnswer(index)}>
                        {visibleIndex === index ? '▲' : '▼'}
                    </button>
                </div>
                {visibleIndex === index && <div className="bg-blue-200 text-left px-py-2">{faq.answer}</div>}
            </div>
        ))}
    </div>
  )
}

export default Preference