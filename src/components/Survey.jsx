import { useState } from "react";
import AnswerList from "./AnswersList";
import SurveyForm from "./SurveyForm";

export default function Survey() {
     
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState({
        username: "",
        colour: "",
        swimming: "",
        bathing: "",
        chatting: "",
        noTime: "",
        review: "",
        email: "",
        });
      const [formAnswers, setFormAnswer] = useState([]);
      const handleChange = (event) => {
        const { name, value, type } = event.target;
        console.log(name, value, type);
        console.log(formData);
    
        if (type === "checkbox") {
          setFormData({ ...formData, [event.target.name]: event.target.value });
        } else {
          setFormData({ ...formData, [event.target.name]: event.target.value });
        }
    
      };
      const handleSubmit = (event) => {
        event.preventDefault();
    
        //add to complaints state
        setFormAnswer([
          ...formAnswers,
          {
            username: formData.username,
            colour: formData.colour,
            timeSpent: [formData.swimming, formData.bathing, formData.chatting, formData.noTime],
            review: formData.review,
            email: formData.email,
          },
        ]);
        console.log(formAnswers)
        //reset form
        setFormData({
          username: "",
          colour: "",
          swimming: "",
          bathing: "",
          chatting: "",
          noTime: "",
          review: "",
          email: "",
        });
      }
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {<AnswerList answersList={formAnswers}/>
        }
      </section>
      <section className="survey__form">
        <SurveyForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData}/>
      </section>
    </main>
  );
}