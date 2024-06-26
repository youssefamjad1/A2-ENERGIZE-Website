import React from "react";
const Faq2 = () => {
  const faqItems = [
    {
      id: "faq-1",
      question: "Quels sont les avantages de l'installation de panneaux solaires ?",
      answer:
        "Les panneaux solaires permettent de réduire votre facture d'électricité, de diminuer votre empreinte carbone et de bénéficier d'une source d'énergie renouvelable et durable. De plus, ils augmentent la valeur de votre propriété et peuvent offrir des incitations fiscales ou des subventions gouvernementales.",
    },
    {
      id: "faq-2",
      question: "Comment fonctionne l'énergie solaire ?",
      answer:
        "Les panneaux solaires convertissent la lumière du soleil en électricité grâce à des cellules photovoltaïques. Cette électricité peut être utilisée directement pour alimenter vos appareils électriques ou stockée dans des batteries pour une utilisation ultérieure.",
    },
    {
      id: "faq-3",
      question: "Quelle est la durée de vie des panneaux solaires ?",
      answer:
        "Les panneaux solaires ont généralement une durée de vie de 25 à 30 ans. Au fil du temps, leur efficacité peut légèrement diminuer, mais ils continuent à produire de l'électricité bien après leur période de garantie initiale.",
    },
    {
      id: "faq-4",
      question: " Quelle est la rentabilité d'un investissement dans les panneaux solaires ?",
      answer:
        "L'investissement initial dans des panneaux solaires peut être rentabilisé en 7 à 10 ans grâce aux économies sur la facture d'électricité. Les subventions et les crédits d'impôt peuvent également réduire le coût initial, améliorant ainsi la rentabilité.",
    },
    {
      id: "faq-5",
      question: "Quelle est la maintenance nécessaire pour les panneaux solaires ?",
      answer:
        "Les panneaux solaires nécessitent très peu de maintenance. Il suffit de les garder propres et de vérifier régulièrement qu'ils ne sont pas obstrués par des débris ou de la neige. Un nettoyage annuel est généralement suffisant.",
    },
  ];

  return (
    <div className="accordion accordion-style-four" id="accordionOne">
      {faqItems.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading-${index}`}>
            <button
              className={`accordion-button ${index === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse-${index}`}
            >
              <span>{`0${index + 1}.`}</span> {item.question}
            </button>
          </div>
          <div
            id={`collapse-${index}`}
            className={`accordion-collapse collapse ${
              index === 2 ? "show" : ""
            }`}
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq2;
