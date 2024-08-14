import React, { useState } from "react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for all our products. If you're not satisfied with your purchase, you can return it for a full refund.",
        },
        {
            question: "How do I track my order?",
            answer: "You can track your order by visiting our website and entering your order number and email address. We'll provide you with the latest status of your shipment.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers. Our payment system is secure and encrypted to protect your financial information.",
        },
    ];

    return (
        <div className="container">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-container">
                {faqData.map((item, index) => (
                    <div
                        className={`faq-item ${
                            activeIndex === index ? "active" : ""
                        }`}
                        key={index}
                    >
                        <div
                            className="faq-question"
                            onClick={() => toggleAnswer(index)}
                        >
                            <h3>{item.question}</h3>
                            <span>{activeIndex === index ? "-" : "+"}</span>
                        </div>
                        <div className="faq-answer">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
