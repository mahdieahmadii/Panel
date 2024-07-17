import React, { useEffect } from "react";
import "./DetailsModal.css";

export default function DetailsModal({ onHide, detail }) {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.keyCode === 27) {
        onHide();
      }
    };

    window.addEventListener("keydown", checkKey);
    return () => window.removeEventListener("keydown", checkKey);
  });
  return (
    <div className="modal-parent active">
      <div className="details-modal ">
        <table className="cms-table">
          <thead>
            <tr>
              <th>محبوبیت</th>
              <th>فروش</th>
              <th>رنگ بندی</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{detail.popularity}</td>
              <td>{detail.sale.toLocaleString()}</td>
              <td>{detail.colors}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
