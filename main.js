const btns = document.querySelectorAll('button')
const freespace = document.querySelector('#freespace')
let arr = Array.from(btns)

arr.map(btn => {
    btn.addEventListener ('click', e =>{
        let val = e.target.textContent
        switch (val){
            case "C" :
                freespace.textContent = " "
                break;
            case "DEL" :
                freespace.textContent = freespace.textContent.slice(0,-1)
                break;
                
            case "=" : 
            try{
                freespace.textContent = eval(freespace.textContent) 
            }catch (err){
                freespace.textContent = err.message
            }
                break;
                default:
                    freespace.textContent += val

        }

    })

})