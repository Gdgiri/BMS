// BookingList.jsx
import React, { useState, useEffect } from "react";
import { FaFilter, FaUserCircle, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const JSONBIN_API_KEY =
  "$2a$10$BJl5CWco24rlE5/sE6Hnl.3Mvi4z3TTObV01OMJ3sJmGo5HjE/Lf6";
const JSONBIN_BIN_ID = "6838637a8a456b7966a6f04f";

const services = [
  { value: "all", label: "All Services" },
  { value: "Carpenter", label: "Carpenter" },
  { value: "Electrician", label: "Electrician" },
  { value: "Plumber", label: "Plumber" },
  { value: "House Cleaning", label: "House Cleaning" },
  { value: "Painter", label: "Painter" },
  { value: "Mechanic", label: "Mechanic" },
  { value: "others", label: "others" },
];

const ITEMS_PER_PAGE = 10;

const BookingList = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalBooking, setModalBooking] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(
          `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`,
          {
            headers: {
              "X-Master-Key": JSONBIN_API_KEY,
            },
          }
        );
        const data = await res.json();
        setRequests(data.record.requests || []);
      } catch (error) {
        console.error("Failed to fetch requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const filteredBookings = requests.filter((b) => {
    const matchesService =
      serviceFilter === "all" || b.service === serviceFilter;
    const matchesSearch =
      b.name.toLowerCase().includes(searchText.toLowerCase()) ||
      b.service.toLowerCase().includes(searchText.toLowerCase());
    return matchesService && matchesSearch;
  });

  const totalPages = Math.ceil(filteredBookings.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBookings = filteredBookings.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const goToPage = (pageNum) => {
    if (pageNum < 1 || pageNum > totalPages) return;
    setCurrentPage(pageNum);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText, serviceFilter]);

  const serviceCounts = services
    .filter((s) => s.value !== "all")
    .map(({ value }) => {
      return filteredBookings.filter((b) => b.service === value).length;
    });

  const barData = {
    labels: services.filter((s) => s.value !== "all").map((s) => s.label),
    datasets: [
      {
        label: "Number of Services",
        data: serviceCounts,
        backgroundColor: [
          "#3b82f6", // blue
          "#ef4444", // red
          "#f59e0b", // amber
          "#10b981", // green
          "#8b5cf6", // purple
          "#f43f5e", // pink
        ],
        borderWidth: 1,
        barThickness: 30,
        maxBarThickness: 40,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { size: 16, weight: "bold" },
          padding: 20,
          generateLabels: (chart) => {
            const labels =
              ChartJS.defaults.plugins.legend.labels.generateLabels(chart);
            return labels.map((label) => ({
              ...label,
              fillStyle: "transparent",
              strokeStyle: "transparent",
              pointStyle: false,
            }));
          },
        },
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1, font: { size: 14 } },
        grid: { color: "#e5e7eb" },
      },
      x: {
        ticks: { font: { size: 14, weight: "bold" } },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 mt-20 md:mt-0">
        <h1 className="text-2xl sm:text-4xl font-semibold">Services</h1>
        {/* <div className="flex items-center gap-12 md:gap-6 ml-28 md:ml-0">
          <FaRegBell
            className="text-2xl cursor-pointer text-yellow-500"
            title="Notifications"
          />
          <FaUserCircle className="text-2xl cursor-pointer" title="Profile" />
          <div className="text-right">
            <h3 className="font-semibold">Vishnu</h3>
            <span className="text-sm text-gray-500">Admin</span>
          </div>
        </div> */}
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold">Booking Management</h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search Bookings..."
            className="border p-2 rounded w-full sm:w-64"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div className="w-full sm:w-48 relative ">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full border p-2 rounded flex justify-between items-center bg-white hover:border-blue-500 "
            >
              <span className="capitalize">
                {serviceFilter === "all" ? "All Services" : serviceFilter}
              </span>
              {dropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
            {dropdownOpen && (
              <ul className="absolute top-full left-0 w-full border mt-1 bg-white z-10 rounded shadow">
                {services.map((s) => (
                  <li
                    key={s.value}
                    onClick={() => {
                      setServiceFilter(s.value);
                      setDropdownOpen(false);
                    }}
                    className="p-2 hover:bg-blue-100 cursor-pointer capitalize"
                  >
                    {s.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Service</th>
            </tr>
          </thead>
          <tbody>
            {currentBookings.map((booking, idx) => (
              <tr
                key={idx}
                className="text-center cursor-pointer"
                onClick={() => setModalBooking(booking)}
              >
                <td className="border px-4 py-2">{booking.name}</td>
                <td className="border px-4 py-2">{booking.email}</td>
                <td className="border px-4 py-2">{booking.phone}</td>
                <td className="border px-4 py-2">{booking.date}</td>
                <td className="border px-4 py-2">{booking.service}</td>
              </tr>
            ))}
            {currentBookings.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center items-center gap-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <br />

      <div className="h-[300px] sm:h-[400px] md:h-[450px]">
        <Bar data={barData} options={barOptions} />
      </div>

      {modalBooking && (
        <div
          onClick={() => setModalBooking(null)}
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded shadow max-w-sm w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Booking Details</h3>
              <button onClick={() => setModalBooking(null)}>
                <FaTimes />
              </button>
            </div>

            <p>
              <strong>Customer:</strong> {modalBooking?.name}
            </p>
            <p>
              <strong>Service:</strong> {modalBooking?.service}
            </p>
            {modalBooking?.service == "others" && (
              <p>
                <strong>CustomService:</strong> {modalBooking?.customeService}
              </p>
            )}
            <p>
              <strong>Date & Time:</strong> {modalBooking?.date}&nbsp; & &nbsp;
              {modalBooking?.time}
            </p>
            <p>
              <strong>Address</strong> {modalBooking?.address}
            </p>
            <p>
              <strong>Message:</strong> {modalBooking?.message}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingList;
