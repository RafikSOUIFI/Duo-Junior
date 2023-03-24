import React, {useState} from 'react'


const Search=({data,searchTerm, cart, setCart})=>{
    const addToCard = (event)=>{
        let x = cart
        x.push(...data.filter((e)=> e.name === event.target.id))
        setCart(x)
        console.log(cart,'Search')
    }

    return(
         data.map((e,i)=>{
            if(e.category.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || e.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || e.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ){
                return(

        <div class="accessoirespage">
            <img class="accessoiresIMG" src={e.imgUrl}/>
            <h3>{e.name}<a class="Shop">
                <img id={e.name} class="Shopim" src="https://lh3.googleusercontent.com/UNKBs5nuWWoYHVr-4BXewjnuxF8RJ1uc4G0jA3_Le2NKkJzrBmrSEgyHRlSATmsiJyW8avGWigPlGPetypD2XMyi_pri_SAmFf_yk1OS" alt="Shop" onClick={addToCard}/></a>
            </h3>
            <h5> {e.price} </h5>
            <p> {e.description} </p>
            
        </div>
                )
            }  
         }) 
    )
}
export default Search

