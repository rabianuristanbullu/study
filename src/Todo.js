import React,{useState} from "react";

const Todo =({item,yapilacaklar,setyapilacaklar})=>{
    const [guncelleButonuAktifMi,setGuncelleButonuAktifMi]=useState(false)
    const [inputDegistir,setInputdegistir]=useState(item.text)
    const silme=()=>{
        const geçici=yapilacaklar.filter((x)=> x.id !== item.id)
        setyapilacaklar(geçici)
    }
    const yapildidegistir=()=>{
        var gecici=[]
        for (let i = 0; i < yapilacaklar.length; i++) {
            if(yapilacaklar[i].id === item.id){
                var guncellenmisTodo={
                    ...item,
                    yapildimi: !item.yapildimi
                }
                gecici.push(guncellenmisTodo)
            }
            else{
                gecici.push(yapilacaklar[i])
            }
            
        }
        setyapilacaklar(gecici)
    }
    const todoGuncelle =()=>{
        // validation
        if (inputDegistir === "") {
            alert("Kayıt Boş Kalamaz")
            return
        }
        var gecici =[]
        for (let i = 0; i < yapilacaklar.length; i++) {
            if(yapilacaklar[i].id === item.id){
                var guncellenmisTodo={
                    ...item,
                    text : inputDegistir
                }
                gecici.push(guncellenmisTodo)
            }else{
                gecici.push(yapilacaklar[i])
            } 
        }
            setyapilacaklar(gecici)
            setGuncelleButonuAktifMi(false)
    }
    return(
        <div className="alert alert-secondary d-flex justify-content-between " >
                  <div>
                    {
                        guncelleButonuAktifMi===true?(
                            <div className="input-group mb-3">
                    <input type="text"
                     className="form-control" 
                     placeholder="Yapılacak İşi Yazınız..."
                     value={inputDegistir}
                     onChange={(event)=>setInputdegistir(event.target.value)}
                    />
                    <button className="btn btn-danger " 
                    type="submit"
                    onClick={()=>{
                        setGuncelleButonuAktifMi(false)
                        setInputdegistir(item.text)
                    }} 
                    >Vazgeç</button>
                    <button className="btn btn-danger " 
                    type="submit"
                    onClick={todoGuncelle} 
                    >Onayla</button>
                </div>
                        ):(
                            <h2 style={{textDecoration: item.yapildimi === true ? "line-through" :"none"}} >{item.text}</h2>
                        )
                    }
                    <p>Tarih:{new Date(item.date).toLocaleString().replaceAll("/",".")}</p>
                  </div>
                  <div className="d-flex align-items-center">
                  <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                      <button type="button" className="btn btn-sm btn-danger" onClick={silme} >SİL</button>
                      <button type="button" className="btn btn-sm btn-warning" onClick={()=>setGuncelleButonuAktifMi(true)} >GÜNCELLE</button>
                      <button type="button" className="btn btn-sm btn-success"  onClick={yapildidegistir}>
                        {
                          item.yapildimi === true ?"Yapılmadı":"yapıldı"
                        }
                      </button>
                  </div>
                  </div>
                  
                </div>
    )
}

export default Todo