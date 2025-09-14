import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "What is included in your UI/UX design service?",
    answer:
      "We provide wireframing, prototyping, user journey mapping, and visually appealing UI designs to ensure seamless and user-friendly experiences.",
  },
  {
    id: 2,
    question: "Do you create responsive frontend designs?",
    answer:
      "Yes, all our frontend designs are fully responsive and optimized for desktop, tablet, and mobile devices using modern frameworks like React and Tailwind CSS.",
  },
  {
    id: 3,
    question: "Which technologies do you use for frontend development?",
    answer:
      "We mainly work with React.js, Next.js, and Tailwind CSS to build fast, scalable, and optimized frontend applications.",
  },
  {
    id: 4,
    question: "Do you build backend REST APIs?",
    answer:
      "Yes, we develop secure and scalable REST APIs using Node.js and Express.js, with proper authentication and documentation.",
  },
  {
    id: 5,
    question: "Can you design and manage databases?",
    answer:
      "We design relational and non-relational databases using MySQL, PostgreSQL, and MongoDB, ensuring efficiency, security, and scalability.",
  },
  {
    id: 6,
    question: "Do you provide API integration and optimization?",
    answer:
      "Yes, we integrate third-party APIs and also optimize them for better performance with caching, rate-limiting, and error handling.",
  },
  {
    id: 7,
    question: "How do you improve application performance and SEO?",
    answer:
      "We conduct performance audits, optimize loading speed, improve Core Web Vitals, and follow SEO best practices to boost your search engine ranking.",
  },
];

const contactData = {
  phone: {
    label: "24/7 Customer Care",
    value: "+(62) 123 456 7890",
  },
  email: {
    label: "For Technical Issues",
    value: "hello@echodigital.com",
  },
};

export default function AskQuestions() {
  return (
    <section id="faq" className="md:px-14 pt-28 px-6 pb-20 font-openSans">
      <div className="mb-12">
        <p className="text-sm md:text-base lg:text-xl font-bold text-softTheme">
          Frequently Asked Questions
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark pt-2">
          Need Help?
          <br />
          We’re here to answer
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-softTheme text-3xl" />
            <div>
              <p className="font-semibold text-lg">{contactData.phone.label}</p>
              <p className="text-gray-400">{contactData.phone.value}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-softTheme text-3xl" />
            <div>
              <p className="font-semibold text-lg">{contactData.email.label}</p>
              <p className="text-gray-400">{contactData.email.value}</p>
            </div>
          </div>
        </div>

        <div className="w-full space-y-4 ">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="collapse collapse-plus bg-bgthird rounded-2xl shadow-md"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-base md:text-lg font-semibold text-dark">
                {item.question}
              </div>
              <div className="collapse-content text-gray-400 text-sm md:text-base">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
