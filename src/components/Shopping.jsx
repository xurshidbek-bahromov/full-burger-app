import { useState, useEffect } from "react";
import "../Shopping.css";
import { useLanguage } from "./LanguageContext";

const Shopping = () => {
  const [burgers, setBurgers] = useState([
    { name: "Cheese Burger", price: "25000", image: "https://avatars.mds.yandex.net/i?id=2f9e91666c370e12f2786749c294ad351c7e9f31-10525373-images-thumbs&n=13" },
    { name: "Double Burger", price: "35000", image: "https://avatars.mds.yandex.net/i?id=2f9e91666c370e12f2786749c294ad351c7e9f31-10525373-images-thumbs&n=13" },
    { name: "Chicken Burger", price: "28000", image: "https://avatars.mds.yandex.net/i?id=2f9e91666c370e12f2786749c294ad351c7e9f31-10525373-images-thumbs&n=13" },
    { name: "Spicy Burger", price: "30000", image: "https://avatars.mds.yandex.net/i?id=2f9e91666c370e12f2786749c294ad351c7e9f31-10525373-images-thumbs&n=13" },
    { name: "Veggie Burger", price: "22000", image: "https://avatars.mds.yandex.net/i?id=2f9e91666c370e12f2786749c294ad351c7e9f31-10525373-images-thumbs&n=13" },
    { name: "Mushroom Burger", price: "32000", image: "https://avatars.mds.yandex.net/i?id=2f9e91666c370e12f2786749c294ad351c7e9f31-10525373-images-thumbs&n=13" }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingBurger, setEditingBurger] = useState(null);
  const [newBurger, setNewBurger] = useState({ name: "", price: "", image: "" });
  const [showButton, setShowButton] = useState(false);
  const { language } = useLanguage();

  const texts = {
    uz: { title: "Burgerlarga xush kelibsiz" },
    ru: { title: "Добро пожаловать в Бургеры" },
  };
  const costs = {
    uz: "so‘m",
    ru: "сум",
  };
  const add = {
    uz: "➕ Yangi burger qo‘shish",
    ru: "➕ Добавить новый бургер",
  }
  const edit = {
    uz: { title: "Burgerni o‘zgartirish", or: "Yangi burger qo‘shish" },
    ru: { title: "Изменить бургер", or: "Добавить новый бургер" },
  };

  const save = {
    uz: { title: "Saqlash", or: "Qo‘shish", back: "Orqaga" },
    ru: { title: "Сохранить", or: "Добавить", back: "Назад" },
  }

  const openModal = (burger = null) => {
    setEditingBurger(burger);
    setNewBurger(burger || { name: "", price: "", image: "" });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingBurger(null);
  };

  const handleInputChange = (e) => {
    setNewBurger({ ...newBurger, [e.target.name]: e.target.value });
  };

  const saveBurger = () => {
    if (editingBurger) {
      setBurgers(burgers.map((b) => (b === editingBurger ? newBurger : b)));
    } else {
      setBurgers([...burgers, newBurger]);
    }
    closeModal();
  };

  const deleteBurger = (index) => {
    setBurgers(burgers.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="shopping">
        <h2>{texts[language].title}</h2>
      </div>

      <button className={`add-burger-btn ${showButton ? "visible" : ""}`} onClick={() => openModal()}>
        {add[language]}
      </button>

      <div className="burger-list">
        {burgers.map((burger, index) => (
          <div key={index} className="burger-box">
            <img src={burger.image} alt={burger.name} />
            <h3>{burger.name}</h3>
            <p>{burger.price} {costs[language]}</p>
            <button onClick={() => openModal(burger)}>✏️</button>
            <button onClick={() => deleteBurger(index)}>🗑️</button>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{editingBurger ? edit[language].title : edit[language].or}</h2>
            <input
              type="text"
              name="name"
              placeholder="Nomi"
              value={newBurger.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="price"
              placeholder="Narxi"
              value={newBurger.price}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="image"
              placeholder="Rasm URL"
              value={newBurger.image}
              onChange={handleInputChange}
            />
            <button id="modelBottom" onClick={saveBurger}>{editingBurger ? save[language].title : save[language].or}</button>
            <button id="modelBottom" onClick={closeModal}>{save[language].back}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shopping;
