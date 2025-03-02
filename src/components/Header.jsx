import { useLanguage } from "./LanguageContext";

const Header = () => {
  const { language } = useLanguage();

  const texts = {
    uz: { title: "Katta Burger", span: "mol go'shti", description: "Yangi pishirilgan bulochka, salat bargi, piyoz bilan tuzlangan bodring va mayonez va ketchup bilan ta'mlangan kichik kotlet - bu gamburgerning klassik portreti, Qo'shma Shtatlardagi eng keng tarqalgan tezkor taom, uning zaharlanishi har kuni o'n minglab amerikaliklarni kasalxonaga yotqizadi.", price: "14 500 so‘m" },
    ru: { title: "Большой Гамбургер", span: "говядина", description: "Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом, - таков классический портрет гамбургера, наиболее распространенной «быстрой» еды в США, от отравления которой ежедневно на больничных койках оказываются десятки тысяч американцев", price: "14 500 сум" },
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>{texts[language].title}</h1>
        <span>{texts[language].span}</span>
        <p>{texts[language].description}</p>
        <button className="order-btn">{texts[language].price}</button>
      </div>
    </header>
  );
};

export default Header;
