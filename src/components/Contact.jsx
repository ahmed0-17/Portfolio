import React  ,{useState,useContext}from 'react'
import themeContext from '../context/theme_context'
import { LuMail, LuUser, LuMessageSquare, LuSend } from "react-icons/lu";
import emailjs from "@emailjs/browser";
function Contact() {
         let{theme} = useContext(themeContext);
         const [loading, setLoading] = useState(false);
         const [status, setStatus] = useState({
                type: "",
                message: "",
               });

const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};



const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const result = await emailjs.send(
      "service_ei8g0gh",
      "template_pdtjhb6",
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "dOs4IHR35u5B2b17L"
    );

    console.log(result  .status,result.text);

         setStatus({
      type: "success",
      message: "Message sent successfully!",
    });

    setForm({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
       setStatus({
      type: "error",
      message: "Failed to send message. Please try again.",
    });

  }finally {
    setLoading(false);

    setTimeout(() => {
      setStatus({
        type: "",
        message: "",
      });
    }, 3000);
  }
};
  return (
  

<section
  id="contact"
  className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${
    theme === "dark" ? " text-white" : " text-gray-900"
  }`}
>
  <div className="max-w-6xl mx-auto w-full">
    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="heading-font text-3xl sm:text-4xl lg:text-5xl ">
        Contact Me
      </h2>

      <p
        className={`body-font mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-7 ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Have a project in mind or want to collaborate? I'd love to hear from
        you. Fill out the form below and I'll get back to you as soon as
        possible.
      </p>
    </div>

    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10 rounded-3xl p-5 sm:p-8 lg:p-12 border  ${
        theme === "dark"
          ? "bg-gray-900 border-gray-800"
          : "bg-white border-gray-200 shadow-lg"
      }`}
    >
      {/* Left Side */}
      <div className="flex flex-col justify-center">
        <span className="text-blue-500 font-semibold uppercase tracking-widest body-font">
          Let's Connect
        </span>

        <h3 className="heading-font text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
          Let's build something amazing together.
        </h3>

        <p
          className={`body-font mt-5 text-sm sm:text-base leading-7 sm:leading-8 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Whether you have an idea, freelance opportunity, or simply want to
          connect, I'm always open to discussing new projects and creative
          ideas.
        </p>

        <div className="mt-10 space-y-5">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <div className="p-3 rounded-xl bg-blue-600 text-white flex-shrink-0">
              <LuMail size={22} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="body-font">malikalihyd123@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <div>
          <label className="body-font text-sm sm:text-base font-medium mb-2 block">
            Full Name
          </label>

          <div className="relative">
            <LuUser
              className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                theme === "dark" ? "text-gray-500" : "text-gray-400"
              }`}
            />

           <input
  type="text"
  name="name"
  placeholder="John Doe"
  value={form.name}
  onChange={handleChange}
  className={`w-full  sm:py-3.5 pl-12 pr-4 py-3 rounded-xl border outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
    theme === "dark"
      ? "bg-gray-950 border-gray-700"
      : "bg-white border-gray-300"
  }`}
  required
/>
          </div>
        </div>

        <div>
          <label className="body-font text-sm font-medium mb-2 block">
            Email Address
          </label>

          <div className="relative">
            <LuMail
              className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                theme === "dark" ? "text-gray-500" : "text-gray-400"
              }`}
            />

            <input
  type="email"
  name="email"
  placeholder="john@example.com"
  value={form.email}
  onChange={handleChange}
  className={`w-full  sm:py-3.5 pl-12 pr-4 py-3 rounded-xl border outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
    theme === "dark"
      ? "bg-gray-950 border-gray-700"
      : "bg-white border-gray-300"
  }`}
  required
/>
          </div>
        </div>

        <div>
          <label className="body-font text-sm font-medium mb-2 block">
            Message
          </label>

          <div className="relative">
            <LuMessageSquare
              className={`absolute left-4 top-5 ${
                theme === "dark" ? "text-gray-500" : "text-gray-400"
              }`}
            />

            <textarea
  rows={5}
  name="message"
  placeholder="Write your message..."
  value={form.message}
  onChange={handleChange}
  className={`w-full  sm:py-3.5 pl-12 pr-4 py-3 rounded-xl border outline-none resize-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${
    theme === "dark"
      ? "bg-gray-950 border-gray-700"
      : "bg-white border-gray-300"
  }`}
  required
/>
          </div>
        </div>

       <button
  type="submit"
  disabled={loading}
  className="w-full py-3 sm:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-70 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base text-white font-semibold"
>
  {loading ? (
    <>
      <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      Sending...
    </>
  ) : (
    <>
      <LuSend size={20} />
      Send Message
    </>
  )}
</button>
{status.message && (
  <div
    className={`mt-4 rounded-lg p-3 text-sm sm:text-base font-medium transition-all
      ${
        status.type === "success"
          ? "bg-green-100 text-green-700 border border-green-300"
          : "bg-red-100 text-red-700 border border-red-300"
      }`}
  >
    {status.message}
  </div>
)}
      </form>
    </div>
  </div>
</section>
  )
}

export default Contact
