import Header from "@/components/Header";
import "../../styles/globals.css";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <div className="background-shape shape-top-right" />
        <div className="background-shape shape-bottom-left" />
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 block w-full p-2 border rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </main>
    </>
  );
}
