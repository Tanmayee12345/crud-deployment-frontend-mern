import React, { useEffect } from 'react';

const FAQs = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.accordion button');

    function toggleAccordion() {
      const itemToggle = this.getAttribute('aria-expanded');

      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
      }

      if (itemToggle === 'false') {
        this.setAttribute('aria-expanded', 'true');
      }
    }

    items.forEach((item) => item.addEventListener('click', toggleAccordion));

    return () => {
      items.forEach((item) => item.removeEventListener('click', toggleAccordion));
    };
  }, []);

  return (
    <div className="faq-box">
    <div className="container">
      <h3>Frequently Asked Questions</h3>
      <div className="accordion">
        <div className="accordion-item">
          <button id="accordion-button-1" aria-expanded="false">
            <span className="accordion-title">How do I borrow a book from the online library?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content text-dark">
            <p className='text-dark'>
            To borrow a book, log in to your account, search for the desired book, and click on the "Add to Cart" button. 
            Follow the prompts to complete the borrowing process.
            </p>
          </div>
          <button id="accordion-button-1" aria-expanded="false">
            <span className="accordion-title">What is the loan period for borrowed books?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p>
            The standard loan period for books is 7 days. You can check the due date in your account.
            </p>
          </div>
          <button id="accordion-button-1" aria-expanded="false">
            <span className="accordion-title">How can I return a book early?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p>
            To return a book before the due date, log in to your account, go to your cartlist, and select the option to delete the book early.
             This ensures the availability of the book for other users.
            </p>
          </div>
          <button id="accordion-button-1" aria-expanded="false">
            <span className="accordion-title">What happens if I return a book late?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p>
            Late returns may incur fines. It's important to return books by the due date to avoid penalties.
             You can check the fine policy in the library's terms and conditions.
            </p>
          </div>
          <button id="accordion-button-1" aria-expanded="false">
            <span className="accordion-title">How can I write review for a book?</span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className="accordion-content">
            <p>
            You can go to the review section in the home page and can fill the form available.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQs;