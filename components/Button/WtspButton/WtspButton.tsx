import { FC } from "react";

type Proptypes = {
  number?: string;
  message?: string;
};

const URL = " https://wa.me";

const WtspButton: FC<Proptypes> = ({ number, message }) => {
  number = number!.replace(/[^\w\s]/gi, "").replace(/ /g, "");
  let url = `${URL}/${number}`;

  if (message) {
    url += `?text=${encodeURI(message)}`;
  }

  return (
    <div
      style={{
        position: "fixed",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "#0bd561",
        boxShadow: "0px 3px 10px rgb(0 0 0 / 25%)",
        bottom: "25px",
        right: "25px",
        cursor: "pointer",
        outline: "none",
      }}
      onClick={(e) => {
        window.open(url);
      }}
    >
      <img
        style={{
          width: "50px",
          height: "50px",
        }}
        src={"/images/wtsp.svg"}
      ></img>
    </div>
  );
};

WtspButton.defaultProps = {
  number: "51961637452",
  message: "Hola, tengo una consulta.",
};

export default WtspButton;
