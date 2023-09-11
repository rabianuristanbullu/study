import React,{useState} from "react";


const AddTodoForm = ({yapilacaklar,setyapilacaklar}) => {
    const [yapilacaktext, setyapilacaktext]= useState("")
    const formudenetle =(event)=>{
        event.preventDefault()

        // validationn
        if(yapilacaktext === ""){
            alert("BOŞ KAYIT YAPILAMAZ")  
            return        
        }
        const newTodo ={
         id:String(new Date().getTime()),
         text:yapilacaktext,
         date:new Date(),
         yapildimi:false 
        }
        setyapilacaklar([...yapilacaklar,newTodo])
        setyapilacaktext(" ")
    }

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={formudenetle} className="w-75">
                <div className="input-group mb-3">
                    <input type="text"
                     className="form-control" 
                     placeholder="Yapılacak İşi Yazınız..." 
                     value={yapilacaktext}
                     onChange={(event)=> setyapilacaktext(event.target.value)}
                    />
                    <button className="btn btn-danger " 
                    type="submit" 
                    >EKLE</button>
                </div>
            </form>
        </div>
    )
}

export default AddTodoForm