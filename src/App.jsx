import React, { useState } from 'react';
import './App.css';
import Swal from 'sweetalert2';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  const handleAddItem = () => {
    if (inputValue && selectedCategory) {
      setItems([...items, { name: inputValue, category: selectedCategory }]);
      setInputValue('');
      setSelectedCategory('');
    } else {
      Swal.fire('Campos vacíos', 'Por favor, completa el nombre de la app y selecciona una categoría.', 'error');
    }
  }

  const handleDeleteItem = (index) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Este elemento se eliminará permanentemente',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
        Swal.fire('Eliminado', 'El elemento ha sido eliminado correctamente', 'success');
      }
    });
  }

  return (
    <>
      <header>
        <h1>Mi Lista de Aplicaciones</h1>
      </header>
      <section>
        <div className="app-container">
          <input
            className="input-field"
            type="text"
            placeholder="Escribe el nombre de la app"
            value={inputValue}
            onChange={handleInputChange}
          />
          <select className="select-category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Selecciona una categoría</option>
            <option value="Mensajería">Mensajería</option>
            <option value="Redes Sociales">Redes Sociales</option>
            <option value="Entretenimiento">Entretenimiento</option>
          </select>

          <button className="add-button" onClick={handleAddItem}>Agregar</button>

          {items.length > 0 && (
            <div className="table-container">
            <table className="item-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Objeto</th>
                  <th>Categoría</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td><span className="delete-button" onClick={() => handleDeleteItem(index)}>🗑️</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          )}
        </div>
      </section>
      <footer>
        <p>  👩‍💻 Autor: Yennyfer Jarava Perez</p>
        <p> 💻Desarrolladora Web</p>
        <p> 📩yennyfer.jarava92@gmail.com</p>
        <p>📞+57 3238165367</p>
      </footer>
    </>
  );
}

export default App;
