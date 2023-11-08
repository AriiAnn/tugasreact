import React, { useState } from "react";

const FormTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() && date.trim()) {
      addTodo({
        id: +new Date(),
        task: title,
        timestamp: date,
        isCompleted: false,
      });

      setTitle("");
      setDate("");
    }
  };

  return (
    <div className="container bg-white shadow" id="add-todo">
      <h2 className="container-header text-center">Tambah yang harus dilakukan</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group form-title">
          <label htmlFor="title">Masukkan hal yang akan dilakukan</label>
          <input type="text" id="title" name="title" required value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group form-title">
          <label htmlFor="date">Masukkan tanggal harus selesai</label>
          <input type="date" id="date" name="date" required value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <input type="submit" value="Submit" name="Submit" className="btn-submit" />
      </form>
    </div>
  );
};

export default FormTodo;
