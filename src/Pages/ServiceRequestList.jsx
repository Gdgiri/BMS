// ServiceRequestList.jsx
import React, { useEffect, useState } from "react";

const JSONBIN_API_KEY =
  "$2a$10$BJl5CWco24rlE5/sE6Hnl.3Mvi4z3TTObV01OMJ3sJmGo5HjE/Lf6";
const JSONBIN_BIN_ID = "6838637a8a456b7966a6f04f";

const ServiceRequestList = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div>Loading requests...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">All Service Requests</h2>
      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        <ul className="space-y-4">
          {requests.map((req, index) => (
            <li key={index} className="border p-4 rounded shadow">
              <p>
                <strong>Service:</strong> {req.service}
              </p>
              <p>
                <strong>Name:</strong> {req.name}
              </p>
              <p>
                <strong>Phone:</strong> {req.phoneNumber}
              </p>
              <p>
                <strong>Email:</strong> {req.email}
              </p>
              <p>
                <strong>Date:</strong> {req.preferredDate} at{" "}
                {req.preferredTime}
              </p>
              <p>
                <strong>Message:</strong> {req.message}
              </p>
              <p>
                <strong>Address:</strong> {req.address}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceRequestList;
