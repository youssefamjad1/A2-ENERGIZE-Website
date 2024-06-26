import React from "react";
const BlockContact = () => {
  const addressBlocks = [
    {
      icon: "/images/icon/icon_19.svg",
      title: "Adresse",
      content: "Douar jlidate, commune khat azakane Safi",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_20.svg",
      title: "Contact",
      content: "",
      link: "tel:+212 6 68 93 08 00",
      delay: "200",
    },
    {
      icon: "/images/icon/icon_21.svg",
      title: "Email",
      content: "",
      link: "a2energizemaroc@gmail.com",
      delay: "300",
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div
          className="col-md-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
              <img src={block.icon} alt="icon" />
            </div>
            <h5 className="title">{block.title}</h5>
            <p>
              {block.content} <br />
              {block.link && (
                <a
                  href={block.link}
                  className={
                    block.link.includes("tel:") ? "call" : "webaddress"
                  }
                >
                  {block.link.replace("tel:", "")}
                </a>
              )}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact;
