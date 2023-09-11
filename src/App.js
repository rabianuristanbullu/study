import React,{useState} from "react";
import AddTodoForm from "./components/AddTodoForm";
import Todo from "./Todo";
import fotograf from"./assets/todo.png"

function App() {
  const [yapilacaklar,setyapilacaklar]=useState([])

  console.table(yapilacaklar)
  return (
    <div className="container">
      <h1 className="text-center my-5">Todo App</h1>
      <AddTodoForm yapilacaklar={yapilacaklar} setyapilacaklar={setyapilacaklar} />
      {
        yapilacaklar.length === 0 ? (
         <div className="d-flex flex-column align-items-center">
          <img src={fotograf}></img>
          <p className="text-center"> HENÜZ YAPILACAK İŞİNİZ YOKK... </p>
         </div>
        ) : (
          <div>
            {
              yapilacaklar.map((item,index)=>(
              <Todo key={item.id} item={item} yapilacaklar={yapilacaklar} setyapilacaklar={setyapilacaklar}/>
              ))
            }

          </div>
        )
      }
    </div>
  );
}

export default App;
