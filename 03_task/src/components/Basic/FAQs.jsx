import React, { useState } from 'react'

const faqs = [
    { question: "1. What services does TanahAir Offer?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam nisi unde!" },
    { question: "2. Why should i choose a Design studio like TanahAir over full-service agency?", answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit." },
    { question: "3. How does TanahAir create website content without knowing our Business plan?", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, expedita corporis reiciendis temporibus ea ut!" },
    { question: "4. What will be delivered? And When?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam nisi unde!" },
    { question: "5.What often will results be reported?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam nisi unde!" }
];

const FAQs = () => {

    const [visibleIndex, setVisibleIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (visibleIndex === index) {
            setVisibleIndex(null); 
        } else {
            setVisibleIndex(index); 
        }
    };

  return (
    <div className="px-32 pt-10 pb-20">
        <div>
            <h1 className='font-semibold text-5xl text-center py-6'>Frequently Asked Questions</h1>
            <p className='text-center text-lg opacity-80 pb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <center>
            <div className='py-6 w-[85%]'>
                {faqs.map((faq, index) => (
                    <div key={index} className='px-12 py-8 border-t-[1px] border-b-[1px] border-x-2 font-medium'>
                        <div className="flex justify-between">
                            <p>{faq.question}</p>
                            <button onClick={() => toggleAnswer(index)}>
                                {visibleIndex === index ? '▲' : '▼'}
                            </button>
                        </div>
                        {visibleIndex === index && <div className="bg-blue-200 text-left px-4 py-2">{faq.answer}</div>}
                    </div>
                ))}
            </div>
        </center>
    </div>
  )
}

export default FAQs