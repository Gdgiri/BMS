import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const serviceOptions = [
  "Carpenter",
  "Electrician",
  "Mechanic",
  "Painter",
  "Plumber",
  "House clean",
  "others",
];

const validationSchema = Yup.object({
  service: Yup.string().required("Service is required"),
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  address: Yup.string().required("Address is required"),
  date: Yup.date()
    .min(new Date(), "Date cannot be in the past")
    .required("Preferred date is required"),
  time: Yup.string().required("Preferred time is required"),
  message: Yup.string().required("Message is required"),
  terms: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
});

const JSONBIN_API_KEY =
  "$2a$10$BJl5CWco24rlE5/sE6Hnl.3Mvi4z3TTObV01OMJ3sJmGo5HjE/Lf6"; // <-- Put your JSONBin secret key here
const JSONBIN_BIN_ID = "6838637a8a456b7966a6f04f"; // <-- Put your bin ID here

const EMAILJS_USER_ID = "KEV9yglpoZibECYUM"; // <-- Your EmailJS User ID
const EMAILJS_SERVICE_ID = "service_vqyhrtv"; // <-- Your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = "template_719op34"; // <-- Your EmailJS Template ID

const ServiceRequestForm = () => {
  // Function to update jsonbin.io data
  const saveToJsonBin = async (data) => {
    const url = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`;
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": JSONBIN_API_KEY,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to save to JSONBin");
    return res.json();
  };

  // Function to send email via EmailJS
  const sendEmail = (values) => {
    console.log(values);
    return emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      values,
      EMAILJS_USER_ID
    );
  };

  return (
    <div
      className="max-w-xl  mx-auto p-6 bg-white rounded shadow-md"
      id="contact"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        Service Request Form
      </h2>

      <Formik
        initialValues={{
          service: "",
          customeService: "",
          name: "",
          phone: "",
          email: "",
          address: "",
          date: "",
          time: "",
          message: "",
          terms: false,
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          setSubmitting(true);

         // console.log("1", values);
         
          try {
            // 1. Fetch existing requests array from bin
            const getRes = await fetch(
              `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`,
              {
                headers: {
                  "X-Master-Key": JSONBIN_API_KEY,
                },
              }
            );

            let existingRequests = [];
            if (getRes.ok) {
              const json = await getRes.json();
              existingRequests = json.record?.requests || [];
            }

            // 2. Add new request to array
            const updatedData = {
              requests: [...existingRequests, values],
            };

            // 3. Update bin with new array
            await saveToJsonBin(updatedData);
            // console.log("CHECKING", values);
            // 4. Send email
            await sendEmail(values);

            // console.log("AGAIN", values);

            alert("Request submitted successfully!");
            resetForm();
          } catch (error) {
            alert("Submission failed: " + error.message);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="service" className="block font-semibold">
                Service
              </label>
              <Field
                as="select"
                name="service"
                className="w-full p-2 border rounded"
              >
                <option value="">Select a service</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="service"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>
            <div>
              {values?.service === "others" && (
                <div>
                  {" "}
                  <label htmlFor="name" className="block font-semibold">
                    Specify Service
                  </label>
                  <Field
                    name="customeService"
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Your service"
                  />
                </div>
              )}
            </div>

            <div>
              <label htmlFor="name" className="block font-semibold">
                Name
              </label>
              <Field
                name="name"
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Your name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-semibold">
                Phone Number
              </label>
              <Field
                name="phone"
                type="text"
                className="w-full p-2 border rounded"
                placeholder="10 digit phone number"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="w-full p-2 border rounded"
                placeholder="example@mail.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div>
              <label htmlFor="address" className="block font-semibold">
                Address
              </label>
              <Field
                name="address"
                as="textarea"
                className="w-full p-2 border rounded"
                placeholder="Your address"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div>
              <label htmlFor="date" className="block font-semibold">
                Preferred Date
              </label>
              <Field
                name="date"
                type="date"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="date"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div>
              <label htmlFor="time" className="block font-semibold">
                Preferred Time
              </label>
              <Field
                name="time"
                type="time"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="time"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold">
                Message
              </label>
              <Field
                name="message"
                as="textarea"
                className="w-full p-2 border rounded"
                placeholder="Additional details"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Field type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms" className="text-sm">
                I accept the terms and conditions
              </label>
            </div>
            <ErrorMessage
              name="terms"
              component="div"
              className="text-red-600 text-sm"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ServiceRequestForm;
