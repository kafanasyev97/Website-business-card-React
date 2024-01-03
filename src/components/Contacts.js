import React from "react";

const Contacts = () => {
  return (
    <section>
      <div className="about">
        <h2 className="contacts__title">Ways to contact me:</h2>
        <div className="contacts__block first_text">
          <span className="contacts__telegram right">Telegram:</span>
          <span className="contacts__telegram-address">
            @kirill_afanasyev97
          </span>
        </div>
        <div className="contacts__block">
          <span className="contacts__mail right_two">Mail:</span>
          <span className="contacts__mail-address">kirillmas222@gmail.com</span>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
