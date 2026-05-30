import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import TextExpander from "./TextExpander";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TextExpander btnStyle="btn">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus,
      debitis dolor ex dolorem tenetur esse culpa vero officiis pariatur ducimus
      illum eos exercitationem expedita enim excepturi illo. Eum explicabo
      molestias at sint perferendis omnis dicta laboriosam aut reiciendis modi
      iure suscipit eius quibusdam rerum molestiae, voluptatibus deleniti fuga
      non.
    </TextExpander>
    <TextExpander
      btnStyle="bt"
      btnTextCollapse="Collapse Text"
      btnTextExpand="Expand Text"
      nbWordsShown={15}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus,
      debitis dolor ex dolorem tenetur esse culpa vero officiis pariatur ducimus
      illum eos exercitationem expedita enim excepturi illo. Eum explicabo
      molestias at sint perferendis omnis dicta laboriosam aut reiciendis modi
      iure suscipit eius quibusdam rerum molestiae, voluptatibus deleniti fuga
      non.
    </TextExpander>
    <TextExpander className="bg" btnStyle="bn" nbWordsShown={15}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia delectus,
      debitis dolor ex dolorem tenetur esse culpa vero officiis pariatur ducimus
      illum eos exercitationem expedita enim excepturi illo. Eum explicabo
      molestias at sint perferendis omnis dicta laboriosam aut reiciendis modi
      iure suscipit eius quibusdam rerum molestiae, voluptatibus deleniti fuga
      non.
    </TextExpander>
  </React.StrictMode>,
);
