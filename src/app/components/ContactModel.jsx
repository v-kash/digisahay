import React, { useState, useEffect } from "react";

// --- Main Modal Component ---
export function ContactModal({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    projectDetails: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // New states for validation UX
  const [isMobile, setIsMobile] = useState(false);
  const [shake, setShake] = useState(false);

  // Check if mobile view to make hidden fields optional
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "projectDetails" && value.length > 500) return; // Max length 500
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate form dynamically
  useEffect(() => {
    const isValid =
      formData.name.trim() !== "" &&
      (isMobile || formData.company.trim() !== "") && // Company is optional on mobile
      formData.phone.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.service !== "";

    setIsFormValid(isValid);
  }, [formData, isMobile]);

  if (!isOpen) return null;

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required *";
    // Only require company if it's visible (desktop view)
    if (!isMobile && !formData.company)
      newErrors.company = "Company is required *";
    if (!formData.phone) newErrors.phone = "Phone number is required *";

    // Simple Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email address is required *";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email *";
    }

    if (!formData.service) newErrors.service = "Please select a service *";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Trigger the shake animation
      setShake(true);
      setTimeout(() => setShake(false), 500); // Remove shake class after animation completes
    } else {
      // Simulate API Call
      setTimeout(() => {
        setIsSubmitted(true);
      }, 500);
    }
  };

  return (
    <>
      {/* Injecting CSS for the Earthquake Shake Animation */}
      <style>{`
        @keyframes form-shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-5px); }
          40%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: form-shake 0.4s ease-in-out;
        }
      `}</style>

      <div className="fixed inset-0 z-[1006] flex items-center text-left justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm transition-opacity">
        {/* Modal Container */}
        <div className="bg-white rounded-[30px] shadow-2xl w-full max-w-[1000px] flex flex-col md:flex-row overflow-hidden relative max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* --- LEFT PANEL (Purple Branding) --- */}
          <div className="md:w-[40%] bg-[#5B47E5] text-white p-5 sm:p-8 md:p-8 flex flex-col relative shrink-0 max-h-[320px] md:max-h-none overflow-hidden">
            {/* BOTTOM LEFT TROPHY SVG */}
            <div className="hidden md:block md:absolute bottom-0 right-0 pointer-events-none">
              <img src="/trophy.png" className="-50 w-50 " />
            </div>
            {/* Abstract Star Graphic */}
            <div className="absolute top-[0px] right-[0px] text-[#FFCDA8] opacity-80 pointer-events-none">
              <svg
                width="92"
                height="98"
                viewBox="0 0 92 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.0943 15.7953L106.678 0.798752L116.952 20.3827L88.3687 35.3788L119.184 44.9864L112.602 66.0992L81.7862 56.4916L96.7824 85.0749L77.1989 95.3493L62.2027 66.766L52.5951 97.5815L31.4824 90.999L41.09 60.1835L12.5062 75.1795L2.23223 55.5962L30.8155 40.6L8.16748e-05 30.9924L6.5826 9.87965L37.3981 19.4873L22.4016 -9.09663L41.9854 -19.3705L56.9815 9.21283L66.5891 -21.6026L87.7019 -15.0201L78.0943 15.7953Z"
                  fill="#FFCDBA"
                />
              </svg>
            </div>

            <div className="relative z-10 flex-1 flex flex-col">
              {/* Logo - Fixed sizing layout to prevent clipping push downwards */}
              <div className="flex items-center justify-start gap-2 mb-2 md:mb-2">
                <img
                  src="/logo3.svg"
                  alt="Digital Sahaay Logo"
                  className="h-10 md:h-16 w-auto object-contain"
                />
              </div>

              {/* Dynamic Content based on State */}
              {!isSubmitted ? (
                <div className="space-y-3 mb-3 md:mb-8">
                  <h2 className="text-[20px] md:text-[44px] font-bold leading-tight tracking-tighter ">
                    Let's Grow Your <br />
                    <span className="text-[#FFE78A]">Business Smarter</span>
                  </h2>
                  <p className="text-[#CFC8FF] text-[12px] md:text-[16px] w-80 md:w-75 leading-tight tracking-tighter ">
                    Tell us a little about your business and goals. Our team
                    will reach out with the right strategy for you.
                  </p>
                </div>
              ) : (
                <div className="space-y-1 md:space-y-3 mb-4 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-2">
                    <svg
                      width="85"
                      height="90"
                      viewBox="0 0 85 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40.7126 0.242035C39.2989 0.73774 38.84 1.19672 35.1497 5.86001C31.3677 10.5967 31.5146 10.4499 30.8169 10.4499C30.5048 10.4499 29.3849 10.2112 28.3567 9.91743C20.6091 7.65923 18.7548 7.40219 16.8454 8.28345C15.6521 8.81586 14.936 9.6604 14.5505 10.9272C14.3853 11.4596 14.1833 13.9014 13.9997 17.3163C13.8528 20.3639 13.6876 23.026 13.6325 23.2463C13.5224 23.7788 13.3939 23.8522 7.68409 26.0553C5.00362 27.1018 2.52511 28.1299 2.15792 28.3686C0.652451 29.3049 -0.137003 30.9022 0.0282317 32.628C0.138388 34.0049 0.303622 34.317 3.82862 39.7514C6.30714 43.5702 6.78448 44.3963 6.69269 44.8186C6.63761 45.094 5.93995 46.3057 5.1505 47.4807C2.19464 51.942 0.3587 54.9897 0.138388 55.8526C-0.283878 57.5784 0.266904 59.2674 1.69893 60.5159C2.37823 61.1217 3.42472 61.5807 7.94112 63.3249C10.9337 64.4631 13.4673 65.5096 13.5958 65.6565C13.7978 65.9135 13.9814 68.2268 14.2751 74.2487C14.4587 78.0674 14.6974 78.912 16.0009 80.1788C16.8638 81.0233 17.6532 81.4088 18.8833 81.5924C19.7646 81.7209 19.5259 81.776 27.1083 79.6831C29.3665 79.0772 31.331 78.5631 31.4595 78.5631C31.6064 78.5631 33.3872 80.6377 35.4251 83.153C39.0603 87.6694 39.9232 88.5323 41.2634 88.9913C42.8423 89.542 44.8068 88.9913 46.0735 87.6327C46.4407 87.2288 48.2032 85.0991 49.9841 82.8776C51.765 80.6561 53.3806 78.7651 53.5458 78.6916C53.7661 78.5815 55.7489 79.0405 59.3657 80.0135C65.3509 81.6291 66.4525 81.776 67.8111 81.1518C68.7841 80.7112 69.7204 79.7749 70.161 78.7834C70.5282 77.9206 70.7118 75.9377 71.0056 69.4385C71.0974 67.1252 71.2259 65.8034 71.3728 65.6381C71.5013 65.4913 72.4009 65.0506 73.3739 64.6834C78.0739 62.8842 81.14 61.6725 81.8193 61.3237C84.2243 60.0936 85.381 57.3213 84.463 54.9346C84.2794 54.4389 82.7556 51.942 81.0665 49.3534C79.3775 46.7463 78.0005 44.4881 78.0005 44.2862C78.0005 44.1026 79.3775 41.8444 81.0665 39.2741C82.7372 36.7038 84.2794 34.2069 84.463 33.7112C85.1239 31.967 84.8118 30.2413 83.545 28.9377C82.6271 27.9831 82.0028 27.6893 76.4399 25.5963C73.8146 24.6049 71.5196 23.687 71.3544 23.5217C70.9321 23.1545 70.8954 22.9159 70.6568 17.3346C70.4181 12.2674 70.2896 11.1842 69.7939 10.1194C69.2982 9.09126 68.1782 8.09985 67.1134 7.78774C65.4794 7.29204 65.3325 7.32876 57.8786 9.38501C55.1431 10.1377 53.656 10.4682 53.3439 10.3764C52.995 10.303 51.8935 9.0729 49.5435 6.15376C47.7259 3.89555 45.9818 1.76587 45.6513 1.43539C44.3661 0.168602 42.3282 -0.345459 40.7126 0.242035ZM58.154 30.9389C59.329 31.5264 60.1185 32.5545 60.3021 33.7112C60.5775 35.5288 60.9446 35.0881 49.213 46.8748C41.906 54.2002 38.1974 57.7803 37.7017 58.019C36.8939 58.4045 35.5169 58.478 34.7275 58.1659C34.0298 57.9088 24.6114 48.5272 24.281 47.7745C23.8771 46.8565 23.9505 45.3694 24.4462 44.5065C25.0153 43.4967 26.0985 42.7807 27.2735 42.6338C28.8525 42.4502 29.697 43.001 33.1118 46.4342L36.0493 49.3717L45.3208 40.1186C52.3892 33.087 54.7392 30.8471 55.2349 30.7002C56.3181 30.3698 57.1259 30.4432 58.154 30.9389Z"
                        fill="#F8E186"
                      />
                    </svg>
                  </div>
                  <h2 className="text-[22px] md:text-[44px] font-bold leading-tight tracking-tighter text-[#ffffff]">
                    <span className="text-[#FFE78A]">Thank You </span>for
                    <br />
                    Reaching Out!
                  </h2>
                  <p className="text-[#CFC8FF] text-[14px] md:text-[16px] leading-tight tracking-tighter ">
                    We've received your details successfully. Our team will
                    review your requirements and get in touch with you shortly.
                  </p>
                </div>
              )}

              {/* Contact Details */}
              <div className="space-y-4 md:space-y-7 -mb-6 md:mb-4">
                <div className="flex items-start gap-2">
                  <div className="md:w-9 md:h-9 w-7 h-7 rounded-full bg-[#AB9DFF] border-1 border-[#ffffff] flex items-center justify-center shrink-0">
                    {isSubmitted ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 md:size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-[14px] md:text-[16px] tracking-tighter leading-tight">
                      {isSubmitted
                        ? "Usually responds within a"
                        : "+91 63576 65915"}
                    </div>
                    <div className="font-medium text-[#CFC8FF] tracking-tighter leading-tight text-xs md:text-[12px]">
                      {isSubmitted
                        ? "few hours"
                        : "Mon - Sat, 9:30 AM - 7:00 PM"}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="md:w-9 md:h-9 w-7 h-7 rounded-full bg-[#AB9DFF] border-1 border-[#ffffff] flex items-center justify-center shrink-0">
                    {isSubmitted ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 md:size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect
                          x="2"
                          y="4"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        />
                        <path d="M2 4l10 8 10-8" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-[14px] md:text-[16px] tracking-tighter leading-tight">
                      {isSubmitted
                        ? "Your information is safe"
                        : "info@digitalsahaay.com"}
                    </div>
                    <div className="font-medium text-[#CFC8FF] tracking-tighter leading-tight text-xs md:text-[12px] md:mb-0 mb-4">
                      {isSubmitted
                        ? "and confidential"
                        : "We reply within a few hours"}
                    </div>
                  </div>
                </div>

                {!isSubmitted && (
                  <div className="hidden md:flex items-start gap-2">
                    <div className="md:w-9 md:h-9 w-8 h-8 rounded-full bg-[#AB9DFF] border-1 border-[#ffffff] flex items-center justify-center shrink-0">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-xs md:text-[16px] leading-tight tracking-tighter">
                        2nd Floor, President Plaza, Sg Highway <br />
                        Thaltej, Ahmedabad - 380054
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Badge Info */}
            <div className="hidden md:block mt-8 md:mt-auto font-semibold text-[12px] text-[#ffffff] relative z-10  pt-4">
              <div className="w-[100px] h-[0.5px] bg-[#A99BFF] mb-2"></div>
              Backed by NextGen Business
              <br />
              Consultancy Pvt. Ltd.
              <br />
              <span className="text-[#ffffff] font-medium">
                Recognized as the{" "}
                <span className="text-[#FFE78A] font-medium">
                  "Most Trusted Business <br />
                  Advisory of the Year 2026"
                </span>
                by Outlook Business.
              </span>{" "}
            </div>
          </div>

          {/* --- RIGHT PANEL (Form or Success View) --- */}
          <div className="md:w-[60%] p-6 sm:p-8 md:p-12 bg-white flex flex-col justify-center relative overflow-hidden">
            {!isSubmitted ? (
              // --- FORM VIEW ---
              <div className="w-full max-w-2xl  md:mx-auto">
                <div className="mb-2 md:mb-2">
                  <h3 className="text-[20px] md:text-[28px] -ml-1 font-semibold text-[#333333] mb-0 mt-2 md:mt-0 leading-tight tracking-tighter">
                    Tell Us About Your Business
                  </h3>
                  <p className="text-[12px] md:text-[14px] font-medium text-[#6A6A6A]/70">
                    Fields marked * are required
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-2 md:space-y-6"
                >
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                    <div
                      className={`relative group mb-2 md:mb-0 ${errors.name && shake ? "animate-shake" : ""}`}
                    >
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=" "
                        className={`block w-full px-0 pt-4 pb-2 font-semibold text-[14px] text-[#333333] bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer transition-colors ${errors.name ? "border-red-500" : formData.name ? "border-[#5B47E5]" : "border-gray-200 focus:border-[#5B47E5]"}`}
                      />
                      <label
                        htmlFor="name"
                        className={`absolute text-[16px] font-semibold duration-300 transform -translate-y-5 md:-translate-y-4 top-4 z-10 origin-[0] peer-focus:-translate-y-4.5 peer-placeholder-shown:translate-y-0 peer-focus:text-xs peer-not-placeholder-shown:text-xs pointer-events-none ${errors.name ? "text-red-500" : "text-gray-500 peer-focus:text-[#5B47E5]"}`}
                      >
                        {errors.name ? errors.name : "Enter your name *"}
                      </label>
                    </div>

                    <div
                      className={`hidden md:block md:relative group mb-2 md:mb-0 ${errors.company && shake ? "animate-shake" : ""}`}
                    >
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder=" "
                        className={`block w-full px-0 pt-4 pb-2 font-semibold text-[14px] text-[#333333] bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer transition-colors ${errors.company ? "border-red-500" : formData.company ? "border-[#5B47E5]" : "border-gray-200 focus:border-[#5B47E5]"}`}
                      />
                      <label
                        htmlFor="company"
                        className={`absolute text-[16px] font-semibold duration-300 transform -translate-y-5 md:-translate-y-4 top-4 z-10 origin-[0] peer-focus:-translate-y-4.5 peer-placeholder-shown:translate-y-0 peer-focus:text-xs peer-not-placeholder-shown:text-xs pointer-events-none ${errors.company ? "text-red-500" : "text-gray-500 peer-focus:text-[#5B47E5]"}`}
                      >
                        {errors.company
                          ? errors.company
                          : "Your company or brand name *"}
                      </label>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-6">
                    <div
                      className={`relative group mb-2 md:mb-0 ${errors.phone && shake ? "animate-shake" : ""}`}
                    >
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=" "
                        className={`block w-full px-0 pt-4 pb-2 font-semibold text-[14px] text-[#333333] bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer transition-colors ${errors.phone ? "border-red-500" : formData.phone ? "border-[#5B47E5]" : "border-gray-200 focus:border-[#5B47E5]"}`}
                      />
                      <label
                        htmlFor="phone"
                        className={`absolute text-[16px] font-semibold duration-300 transform -translate-y-5 md:-translate-y-4 top-4 z-10 origin-[0] peer-focus:-translate-y-4.5 peer-placeholder-shown:translate-y-0 peer-focus:text-xs peer-not-placeholder-shown:text-xs pointer-events-none ${errors.phone ? "text-red-500" : "text-gray-500 peer-focus:text-[#5B47E5]"}`}
                      >
                        {errors.phone ? errors.phone : "Phone Number *"}
                      </label>
                    </div>

                    <div
                      className={`relative group mb-2 md:mb-0 ${errors.email && shake ? "animate-shake" : ""}`}
                    >
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=" "
                        className={`block w-full px-0 pt-4 pb-2 font-semibold text-[14px] text-[#333333] bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer transition-colors ${errors.email ? "border-red-500" : formData.email ? "border-[#5B47E5]" : "border-gray-200 focus:border-[#5B47E5]"}`}
                      />
                      <label
                        htmlFor="email"
                        className={`absolute text-[16px] font-semibold duration-300 transform -translate-y-5 md:-translate-y-4 top-4 z-10 origin-[0] peer-focus:-translate-y-4.5 peer-placeholder-shown:translate-y-0 peer-focus:text-xs peer-not-placeholder-shown:text-xs pointer-events-none ${errors.email ? "text-red-500" : "text-gray-500 peer-focus:text-[#5B47E5]"}`}
                      >
                        {errors.email ? errors.email : "Enter your email *"}
                      </label>
                    </div>
                  </div>

                  {/* Select Service */}
                  <div
                    className={`relative group mb-2 md:mb-6 pt-2 md:pt-4 ${errors.service && shake ? "animate-shake" : ""}`}
                  >
                    <label
                      htmlFor="service"
                      className={`hidden md:block text-[14px] font-semibold mb-2 ${errors.service ? "text-red-500" : "text-[#6A6A6A]"}`}
                    >
                      What Do You Need Help With? *
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`block w-full px-0 md:px-2 pb-2 md:pb-2 pt-1 text-[14px] font-semibold text-[#333333] bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 cursor-pointer ${
                          errors.service
                            ? "border-red-500"
                            : formData.service
                              ? "border-[#5B47E5]"
                              : "border-gray-200 focus:border-[#5B47E5]"
                        }`}
                      >
                        <option
                          value=""
                          disabled
                          hidden
                          className="text-sm font-semibold"
                        >
                          Select your requirement
                        </option>

                        <option
                          className="text-sm font-semibold"
                          value="Web Development"
                        >
                          Web Development
                        </option>
                        <option
                          className="text-sm font-semibold"
                          value="Digital Marketing"
                        >
                          Digital Marketing
                        </option>
                        <option
                          className="text-sm font-semibold"
                          value="SEO Optimization"
                        >
                          SEO Optimization
                        </option>
                        <option
                          className="text-sm font-semibold"
                          value="Business Strategy"
                        >
                          Business Strategy
                        </option>
                      </select>

                      <svg
                        className="absolute right-0 top-1 w-5 h-5 text-gray-400 pointer-events-none"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Textarea */}
                  <div className="hidden md:block md:relative pt-2">
                    <label
                      htmlFor="projectDetails"
                      className="block text-[14px] font-semibold text-[#6A6A6A] mb-1"
                    >
                      Tell Us About Your Project
                    </label>
                    <p className="text-[12px] font-medium text-[#6A6A6A]/70 mb-2">
                      Briefly describe your goals or requirements
                    </p>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      rows="2"
                      placeholder=" "
                      className="block w-full px-0 py-2 text-[14px] font-bold text-[#333333] bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#5B47E5] resize-none"
                    ></textarea>
                    <div className="absolute right-0 bottom-[-20px] text-xs text-gray-400">
                      {formData.projectDetails.length}/500
                    </div>
                  </div>

                  {/* Submit Button & Privacy */}
                  <div className="pt-4 md:pt-6">
                    <button
                      type="submit"
                      // Removed disabled state so button is always clickable to trigger validation animations
                      className="w-full py-3.5 px-4 bg-[#5B47E5] hover:bg-[#4D3CB6] text-white font-semibold rounded-[18px] md:rounded-[18px] shadow-md transition-all"
                    >
                      Get Free Consultation
                    </button>
                    <div className="mt-2 md:mt-4 flex items-center justify-center gap-2 text-[12px] md:text-[14px] tracking-tighter leading-tight text-gray-500">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <polyline points="9 12 11 14 15 10" />
                      </svg>
                      We respect your privacy. Your details are safe with us.
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              // --- SUCCESS VIEW ---
              <div className="w-full h-full flex flex-col justify-center animate-fade-in-up">
                <div className="hidden md:absolute top-1 right-20 pointer-events-none ">
                  <svg
                    width="323"
                    height="151"
                    viewBox="0 0 323 151"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M260.729 99.5767C259.622 119.307 264.421 149.547 289.349 150.659C309.459 151.556 322.02 127.943 322.707 110.409C323.615 87.1545 312.95 65.9333 297.73 49.0399C293.547 44.3253 288.933 40.0134 283.943 36.1606C283.327 35.6946 281.221 34.3019 281.295 33.722C281.698 30.6397 283.591 26.854 284.905 24.0537C289.047 15.0712 293.71 6.33814 298.872 -2.10053C301.132 -5.85433 303.808 -9.7016 306.133 -13.502C298.503 -14.2484 299.967 -15.8943 295.12 -8.60284C292.17 -4.16456 289.739 0.304903 287.093 4.92459C282.406 13.1037 278.949 21.601 275.091 30.142C272.945 27.8064 267.933 25.5399 265.121 23.9046C261.22 21.6352 257.514 20.2362 253.417 18.5221C233.977 10.3883 213.211 5.95982 192.267 4.0437C188.451 3.69469 184.458 3.09644 180.658 2.93901L131.511 0.846191C121.891 0.459888 111.284 0.245363 101.718 -0.473177C93.6571 -1.12308 85.6237 -2.08026 77.6357 -3.34242C67.8131 -4.89462 58.3181 -7.04728 48.8421 -10.0962C46.6812 -10.7916 44.4613 -11.3431 42.3271 -12.1072C35.1539 -14.7534 28.156 -17.8525 21.3761 -21.3854C15.8447 -24.2637 5.30871 -30.5744 0.703645 -34.6508C0.424414 -32.901 -0.613676 -27.9143 0.514401 -26.6799C2.2958 -24.7308 7.10874 -22.041 9.47254 -20.6014C27.4783 -9.74033 47.276 -2.17009 67.9379 1.7545C71.9912 2.55735 77.0039 3.2381 81.1874 3.86104C93.1845 5.64713 105.649 6.48928 117.765 7.14632C119.991 7.26708 122.355 7.17745 124.606 7.26189L154.783 8.39011C156.984 8.46188 159.434 8.27511 161.563 8.39359C168.841 8.79829 176.043 9.49672 183.292 10.1482C194.313 11.037 205.284 12.4523 216.17 14.3893C235.173 17.781 256.991 25.2896 272.921 36.3892C271.214 40.0136 270.098 44.159 268.967 48.0126C267.875 51.7366 266.346 56.7993 265.761 60.5868C263.436 70.0558 261.858 80.5836 261.198 90.3307C260.992 93.3614 261.095 96.5744 260.729 99.5767ZM289.11 50.0321C293.948 54.4868 298.069 60.0918 301.886 65.407C302.523 66.2943 303.225 67.1389 303.824 68.0572C309.229 76.538 312.96 85.9749 314.811 95.8569C315.321 98.4769 315.876 101.005 316.006 103.663C316.597 115.719 313.77 127.684 305.224 136.65C300.783 141.307 294.366 145.194 287.655 143.924C274.902 141.575 270.406 129.184 268.232 118.021C267.256 114.065 267.448 110.152 267.316 106.105C266.777 89.5107 269.102 72.724 273.498 56.7387C274.438 53.3119 276.507 43.4201 278.475 40.8515L278.762 40.7061C280.462 41.4724 287.539 48.2733 289.11 50.0321Z"
                      fill="#3B40B3"
                      fillOpacity="0.15"
                    />
                  </svg>
                </div>
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-[14px] font-semibold w-max mb-6">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.353 1.549C6.77496 1.06223 7.29673 0.671956 7.88287 0.404682C8.46901 0.137407 9.1058 -0.000610312 9.75 2.02868e-06C11.107 2.02868e-06 12.323 0.600002 13.147 1.549C13.7897 1.50311 14.4347 1.59609 15.0383 1.82161C15.6419 2.04713 16.1899 2.39992 16.645 2.856C17.1009 3.31106 17.4536 3.85888 17.6791 4.46226C17.9046 5.06564 17.9977 5.71047 17.952 6.353C18.4386 6.77505 18.8287 7.29686 19.0958 7.883C19.3629 8.46913 19.5007 9.10588 19.5 9.75C19.5006 10.3942 19.3626 11.031 19.0953 11.6171C18.828 12.2033 18.4378 12.725 17.951 13.147C17.9967 13.7895 17.9036 14.4344 17.6781 15.0377C17.4526 15.6411 17.0999 16.1889 16.644 16.644C16.1889 17.0999 15.6411 17.4526 15.0377 17.6781C14.4344 17.9036 13.7895 17.9967 13.147 17.951C12.725 18.4378 12.2033 18.828 11.6171 19.0953C11.031 19.3626 10.3942 19.5006 9.75 19.5C9.1058 19.5006 8.46901 19.3626 7.88287 19.0953C7.29673 18.828 6.77496 18.4378 6.353 17.951C5.71038 17.997 5.06538 17.9042 4.46181 17.6789C3.85824 17.4535 3.31023 17.1009 2.855 16.645C2.39897 16.1898 2.04622 15.6419 1.8207 15.0383C1.59518 14.4347 1.50218 13.7897 1.548 13.147C1.06141 12.7249 0.671328 12.2031 0.404228 11.617C0.137128 11.0309 -0.000733613 10.3941 2.93585e-06 9.75C2.93585e-06 8.393 0.600003 7.177 1.549 6.353C1.50326 5.71047 1.5963 5.06562 1.82182 4.46222C2.04734 3.85883 2.40005 3.31103 2.856 2.856C3.31103 2.40005 3.85883 2.04734 4.46222 1.82182C5.06562 1.5963 5.71047 1.50326 6.353 1.549ZM13.36 7.936C13.42 7.85605 13.4634 7.76492 13.4877 7.66795C13.512 7.57098 13.5166 7.47014 13.5014 7.37136C13.4861 7.27257 13.4513 7.17783 13.3989 7.0927C13.3465 7.00757 13.2776 6.93378 13.1963 6.87565C13.1149 6.81753 13.0228 6.77624 12.9253 6.75423C12.8278 6.73222 12.7269 6.72992 12.6285 6.74746C12.5301 6.76501 12.4362 6.80205 12.3523 6.85641C12.2684 6.91077 12.1962 6.98135 12.14 7.064L8.904 11.594L7.28 9.97C7.13783 9.83752 6.94978 9.7654 6.75548 9.76883C6.56118 9.77225 6.37579 9.85097 6.23838 9.98838C6.10097 10.1258 6.02226 10.3112 6.01883 10.5055C6.0154 10.6998 6.08752 10.8878 6.22 11.03L8.47 13.28C8.54699 13.3569 8.6398 13.4162 8.74199 13.4536C8.84418 13.4911 8.9533 13.5059 9.06177 13.4969C9.17024 13.488 9.27546 13.4555 9.37013 13.4019C9.4648 13.3482 9.54665 13.2745 9.61 13.186L13.36 7.936Z"
                      fill="#087C37"
                    />
                  </svg>
                  Request Submitted Successfully
                </div>

                <h3 className="hidden md:flex text-[26px] font-semibold text-[#333333] leading-tight tracking-tighter mb-8 flex items-center gap-2">
                  <span className="text-[#5B47E5] text-2xl">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.5625 3.5078C27.7109 5.82811 26.75 6.77342 24.3594 7.61717C23.8906 7.78124 23.5156 7.95311 23.5156 8.0078C23.5156 8.11717 23.5391 8.12499 24.7812 8.58592C25.7812 8.96092 26.3594 9.31249 27.0156 9.9453C27.8125 10.7265 28.125 11.2734 28.7031 12.9062C28.8281 13.2422 28.9687 13.5156 29.0234 13.5156C29.1328 13.5156 29.125 13.5312 29.5 12.5156C29.9453 11.2812 30.2734 10.7344 31.0156 9.99999C31.7656 9.24217 32.3906 8.87499 33.7031 8.42967C34.3828 8.1953 34.6328 8.03905 34.5156 7.92186C34.4922 7.90624 34.0469 7.73436 33.5234 7.53905C32.4609 7.15624 31.9453 6.8828 31.3516 6.39061C30.4844 5.66405 30.0391 4.97655 29.4922 3.49217C29.2891 2.9453 29.0781 2.49999 29.0234 2.49999C28.9687 2.49999 28.7656 2.95311 28.5625 3.5078Z"
                        fill="#604BE3"
                      />
                      <path
                        d="M16.0547 9.3905C16 9.53113 15.7187 10.2968 15.4297 11.0936C15.1406 11.8905 14.7656 12.828 14.6016 13.1796C13.6328 15.2108 11.8281 17.0624 9.78125 18.1171C9.33594 18.3436 8.21094 18.8046 7.28125 19.1405C6.35156 19.4764 5.55469 19.8124 5.50781 19.8749C5.45313 19.9608 5.45313 20.0389 5.50781 20.1249C5.55469 20.1874 6.35156 20.5233 7.28125 20.8593C9.59375 21.6952 10.5078 22.1639 11.6953 23.1327C12.8672 24.0936 13.9687 25.4921 14.6016 26.8202C14.7656 27.1718 15.1406 28.1093 15.4297 28.9061C16.1562 30.9218 16.1328 30.8593 16.3594 30.8593C16.5703 30.8593 16.5234 30.9764 17.3047 28.7889C17.8594 27.2421 18.2109 26.4843 18.8125 25.5858C19.625 24.3593 20.6953 23.2811 21.9375 22.453C22.8125 21.8671 23.4062 21.6014 25.4219 20.8593C26.9375 20.3046 27.2656 20.1561 27.2656 19.9999C27.2656 19.8436 26.9375 19.6952 25.4609 19.1483C23.3672 18.3827 22.9141 18.1718 21.9687 17.5546C20.6719 16.6952 19.6484 15.6874 18.8125 14.4139C18.2109 13.5155 17.8594 12.7577 17.3047 11.2108C16.5234 9.02332 16.5703 9.1405 16.3594 9.1405C16.2109 9.1405 16.1406 9.203 16.0547 9.3905Z"
                        fill="#604BE3"
                      />
                      <path
                        d="M28.7031 27.0859C28.125 28.7266 27.8125 29.2734 27.0156 30.0547C26.3594 30.6875 25.7812 31.0391 24.7812 31.4141C23.5469 31.875 23.5156 31.8828 23.5156 31.9922C23.5156 32.0391 23.9687 32.25 24.5156 32.4531C25.7891 32.9141 26.375 33.2578 27.0625 33.9531C27.7578 34.6406 28.1016 35.2188 28.5625 36.5C28.7656 37.0469 28.9687 37.5 29.0234 37.5C29.0781 37.5 29.2891 37.0547 29.4922 36.5C30.0391 35.0234 30.4844 34.3359 31.3516 33.6094C31.9453 33.1172 32.4609 32.8438 33.5234 32.4609C34.0469 32.2656 34.4922 32.0938 34.5156 32.0781C34.6328 31.9609 34.3828 31.8047 33.7031 31.5703C32.3906 31.125 31.7656 30.7578 31.0156 30C30.2734 29.2656 29.9453 28.7188 29.5 27.4844C29.125 26.4688 29.1328 26.4844 29.0234 26.4844C28.9687 26.4844 28.8281 26.7578 28.7031 27.0859Z"
                        fill="#604BE3"
                      />
                    </svg>
                  </span>{" "}
                  What Happens Next?
                </h3>
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  {/* Step 1 */}
                  <div className="relative w-full">
                    {/* OUTER CARD */}
                    <div className="bg-white p-[0.5px] rounded-[24px] relative border border-gray-100 shadow-sm">
                      {/* STICKY PIN */}
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 drop-shadow-md">
                        <img
                          src="/howwework/orangepin.png"
                          alt="pin"
                          className="h-10 w-10 object-contain"
                        />
                      </div>

                      {/* INNER CARD */}
                      <div className="bg-[#FFC9B5] rounded-[22px] p-[4px] h-[180px] sm:h-[190px] flex flex-col relative">
                        {/* Top Spacer */}
                        <div className="h-5 sm:h-10 w-full"></div>

                        {/* BOTTOM WHITE CARD */}
                        <div className="bg-white rounded-[18px] flex-1 p-2.5 sm:p-3 flex flex-col relative justify-between">
                          {/* Header Row */}
                          <div className="relative flex justify-between items-start h-6 sm:h-8">
                            <h3 className="text-[#FF6B35] text-xl sm:text-2xl md:text-3xl font-bold leading-none tracking-tighter">
                              01
                            </h3>
                            {/* Illustration */}
                            <div className="absolute -top-9 sm:-top-11 -right-1 sm:-right-2 w-[45px] h-[45px] sm:w-[80px] sm:h-[80px] z-20 drop-shadow-sm pointer-events-none">
                              <img
                                src="/howwework/work3.png"
                                alt="Requirement Review"
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>

                          {/* Text Content */}
                          <div className="mt-1">
                            <h4 className="text-[11px] sm:text-[12px] md:text-[13px] font-bold text-[#333333] mb-0.5 sm:mb-1 leading-tight tracking-tight">
                              Requirement Review
                            </h4>
                            <p className="   font-medium text-[10px] sm:text-[11px] leading-tight tracking-normal">
                              Our team will carefully review your business goals
                              and requirements.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative w-full">
                    {/* OUTER CARD */}
                    <div className="bg-white p-[0.5px] rounded-[24px] relative border border-gray-100 ">
                      {/* STICKY PIN */}
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 drop-shadow-md">
                        <img
                          src="/howwework/bluepin.png"
                          alt="pin"
                          className="h-10 w-10 object-contain"
                        />
                      </div>

                      {/* INNER CARD */}
                      <div className="bg-[#D4DEFC] rounded-[22px] p-[4px] h-[180px] sm:h-[190px] flex flex-col relative">
                        {/* Top Spacer */}
                        <div className="h-5 sm:h-10 w-full"></div>

                        {/* BOTTOM WHITE CARD */}
                        <div className="bg-white rounded-[18px] flex-1 p-2.5 sm:p-3 flex flex-col relative justify-between">
                          {/* Header Row */}
                          <div className="relative flex justify-between items-start h-6 sm:h-8">
                            <h3 className="text-[#4051FF] text-xl sm:text-2xl md:text-3xl font-bold leading-none tracking-tighter">
                              02
                            </h3>
                            {/* Illustration */}
                            <div className="absolute -top-9 sm:-top-11 -right-1 sm:-right-2 w-[45px] h-[45px] sm:w-[80px] sm:h-[80px] z-20 drop-shadow-sm pointer-events-none">
                              <img
                                src="/howwework/work2.png"
                                alt="Expert Consultation"
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>

                          {/* Text Content */}
                          <div className="mt-1">
                            <h4 className="text-[11px] sm:text-[12px] md:text-[13px] font-bold text-[#333333] mb-0.5 sm:mb-1 leading-tight tracking-tight">
                              Expert Consultation
                            </h4>
                            <p className="text-[#6A6A6A] font-medium text-[10px] sm:text-[11px] leading-tight tracking-normal">
                              One of our experts will contact you to discuss the
                              best strategy for your business.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative w-full">
                    {/* OUTER CARD */}
                    <div className="bg-white p-[0.5px] rounded-[24px] relative border border-gray-100">
                      {/* STICKY PIN */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 drop-shadow-md">
                        <img
                          src="/howwework/orangepin.png"
                          alt="pin"
                          className="h-10 w-10 object-contain"
                        />
                      </div>

                      {/* INNER CARD */}
                      <div className="bg-[#E2FFC9] rounded-[22px] p-[4px] h-[180px] sm:h-[190px] flex flex-col relative">
                        {/* Top Spacer */}
                        <div className="h-5 sm:h-10 w-full"></div>

                        {/* BOTTOM WHITE CARD */}
                        <div className="bg-white rounded-[18px] flex-1 p-2.5 sm:p-3 flex flex-col relative justify-between">
                          {/* Header Row */}
                          <div className="relative flex justify-between items-start h-6 sm:h-8">
                            <h3 className="text-[#57CC3A] text-xl sm:text-2xl md:text-3xl font-bold leading-none tracking-tighter">
                              03
                            </h3>
                            {/* Illustration */}
                            <div className="absolute -top-9 sm:-top-11 -right-1 sm:-right-2 w-[45px] h-[45px] sm:w-[80px] sm:h-[80px] z-20 drop-shadow-sm pointer-events-none">
                              <img
                                src="/howwework/work1.png"
                                alt="Growth Planning"
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>

                          {/* Text Content */}
                          <div className="mt-1">
                            <h4 className="text-[11px] sm:text-[12px] md:text-[13px] font-bold text-[#333333] mb-0.5 sm:mb-1 leading-tight tracking-tight">
                              Growth Planning
                            </h4>
                            <p className="text-[#6A6A6A] font-medium text-[10px] sm:text-[11px] leading-tight tracking-normal">
                              We'll recommend the right solutions to help your
                              business grow faster and smarter.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Footer */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#AB9DFF] text-[#FFFFFF] flex items-center justify-center">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-[#333333]">
                          +91 63576 65915
                        </div>
                        <div className="text-[12px] text- font-medium text-[#6A6A6A]">
                          Mon - Sat, 9:30 AM - 7:00 PM
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:block w-px h-10 bg-gray-200"></div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#AB9DFF] text-[#FFFFFF] flex items-center justify-center">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-[#333333]">
                          info@digitalsahaay.com
                        </div>
                        <div className="text-[12px] font-medium text-gray-500">
                          We reply within a few hours
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[14px] text-[#604BE3] leading-tight tracking-tighter font-semibold">
                    Thank you for trusting Digital Sahaay.
                    <br />
                    We look forward to supporting your business growth.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
