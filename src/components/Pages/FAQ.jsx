import { useState } from "react";
import styles from "./FAQ.module.css";
import Footer from "../Main/Footer";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "1. How can I place an order?",
      answer:
        "You can place an order directly on our website by selecting your desired items, adding them to your cart, and completing the checkout process. If you face any issues, feel free to reach out to our customer support team here on whatsapp:",
      isList: false,
    },
    {
      question: "2. Can I cancel my order after placing it?",
      answer:
        "Orders can only be cancelled before they are shipped. Please contact us as soon as possible via the Contact Us page. Once the order has been shipped, cancellation requests will not be accepted.",
      isList: false,
    },
    {
      question: "3. Can I return or exchange a product?",
      answer:
        "Yes, you can request an exchange within 14 days of delivery. The product must be in its original condition with tags intact and unused. Approved returns are refunded in the form of",
      isList: false,
    },
    {
      question: "4. How do I request a return or exchange?",
      answer:
        "Click here to go to our returns and exchanges page. In case that does not work, simply email us at customercare@six5six.in with your order number, reason for return/exchange, and any relevant photos (if applicable). Our team will guide you through the next steps.",
      isList: false,
    },
    {
      question: "5. When will I receive my refund or store credit?",
      answer:
        "Once we receive and inspect the returned item, store credit will be issued within 5 working days. In the case of order cancellations (before shipping), refunds to the original payment method may take 7–10 working days.",
      isList: false,
    },
    {
      question: "6. What are your shipping timelines?",
      answer: [
        "Domestic orders: Delivered within 3–5 business days",
        "International orders: Delivered within 7–10 business days",
        "In case of unforeseen delays (e.g. pandemic, strikes), it may take up to 10–15 business days",
      ],
      isList: true,
    },
    {
      question: "7. Do you ship internationally?",
      answer:
        "Yes, we do! International shipping charges will be calculated at checkout. Please note that customs duties or import taxes(if applicable) are to be paid by the customer at the time of delivery.",
      isList: false,
    },
    {
      question: "8. Are there shipping charges for domestic orders?",
      answer:
        "Yes, a flat shipping charge of Rs. 75 is applicable for orders up to Rs. 500. Orders above that are eligible for free shipping.",
      isList: false,
    },
    {
      question: "9. Can I modify my order after placing it?",
      answer:
        "Unfortunately, once an order is confirmed, we are unable to make changes to product selection or address. You can reach out to us immediately after placing your order for assistance, but changes are not guaranteed.",
      isList: false,
    },
    {
      question: "10. How long is my store credit valid for?",
      answer:
        "Store credit issued against returns is valid for 1 full year from the date of issue.",
      isList: false,
    },
    {
      question:
        "11. Are there any products not eligible for return or exchange?",
      answer: [
        "Customized or made-to-order products",
        "International orders",
        "Pre-orders",
      ],
      isList: true,
    },
    {
      question: "12. What if I receive a damaged or incorrect item?",
      answer:
        "We’re so sorry! Please email us at contact@six5six.in within 48 hoursof receiving the order along with photos of the item. We will arrange a replacement or store credit as appropriate.",
      isList: false,
    },
    {
      question: "13. Are customised orders eligible for returns or exchanges?",
      answer:
        "No, customised or made-to-order products are not eligible for returns, refunds, or exchanges under any circumstances. Since these items are tailored specifically for you, we are unable to resell or repurpose them.",
      isList: false,
    },
  ];

  return (
    <>
      <div className={styles.faqPage}>
        <h1 className={styles.faqHeading}>FAQ</h1>
        <div className={styles.accordionContainer}>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                <span className={styles.icon}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              <div className={styles.accordionBody}>
                <div className={styles.accordionInner}>
                  {item.isList ? (
                    <ul className={styles.listContainer}>
                      {item.answer.map((listItem, i) => (
                        <li key={i} className={styles.listItem}>
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.answer}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
