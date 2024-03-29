import React, { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function FormContact() {
  const { t } = useTranslation("translationContact");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const notifySuccess = () => toast.success("Message sent successfully!");

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    } else {
      newErrors.email = "";
    }

    if (!formData.subject) {
      newErrors.subject = "Please enter a subject";
      valid = false;
    } else {
      newErrors.subject = "";
    }

    if (!formData.message) {
      newErrors.message = "Please enter a message";
      valid = false;
    } else {
      newErrors.message = "";
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleFormSubmit = async () => {
    setLoading(true); // Set loading to true when starting form submission

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (validateForm()) {
        setFormData({
          email: "",
          subject: "",
          message: "",
        });

        notifySuccess();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error, show error message, etc.
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleFormSubmit();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      <section className="bg-gray-50">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
            {t("contactUs")}
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
            {t("needHelpMessage")}
          </p>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                {t("yourMessage")}
              </label>
              <textarea
                id="message"
                rows="6"
                className={`shadow-sm bg-white  border-green-600 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 focus:shadow-outline-green border-2 border-solid ${
                  formErrors.message && "border-red-500"
                }`}
                placeholder={t("messagePlaceholder")}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {formErrors.message && (
                <p className="text-red-500 text-sm">{formErrors.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                {t("yourEmail")}
              </label>
              <input
                type="email"
                id="email"
                className={`shadow-sm bg-white  border-green-600 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 focus:shadow-outline-green border-2 border-solid ${
                  formErrors.email && "border-red-500"
                }`}
                placeholder="binh@gmail.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm">{formErrors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium"
              >
                {t("subject")}
              </label>
              <input
                type="text"
                id="subject"
                className={`shadow-sm bg-white  border-green-600 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 placeholder-gray-400 focus:shadow-outline-green border-2 border-solid ${
                  formErrors.subject && "border-red-500"
                }`}
                placeholder={t("subjectPlaceholder")}
                required
                value={formData.subject}
                onChange={handleChange}
              />
              {formErrors.subject && (
                <p className="text-red-500 text-sm">{formErrors.subject}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-green-800 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 text-white transition duration-200"
            >
              {loading ? "Sending..." : t("sendMessage")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default FormContact;
