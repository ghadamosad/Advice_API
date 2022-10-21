let result 
        fetch("https://api.adviceslip.com/advice")
        .then((re)=>{
             result = re.json();
            return result
        }).then((r)=>{
            let id=document.getElementById("id");
            let adv=document.getElementById("advice");

            id.innerHTML = r.slip["id"];
            adv.innerHTML=r.slip["advice"]
        })