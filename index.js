let var1=document.querySelector(".btn")

var1.addEventListener("click",check)

function check()
{
    let var2=document.querySelector(".defined")
    let c=var2.innerText-'0'

    let var3=document.querySelector("#guess")
    let d=var3.value

    if(c==d)
    {
        document.body.style.background="green"
        let var5=document.querySelector(".high")
        let score=var5.innerText
        score=(score-'0')+1
        var5.innerText=score
    }
    else
    {
        document.body.style.background="red"
        let var5=document.querySelector(".high")
        let score=var5.innerText

        let var7=document.querySelector(".chance")
        let chn=var7.innerText

        if(chn=='0')
        {
            clear_All()
        }
        else
        {
        chn=chn-'1'
        var7.innerText=chn
        }

        if(score!='0')
        {
        score=(score-'0')-1
        var5.innerText=score
        }
    }
}

let var6=document.querySelector(".rst")

var6.addEventListener("click",clear_All)

function clear_All()
{
    let var2=document.querySelector(".defined")
    let a="0123456789"
    let c1=Math.floor(Math.random()*10)
    var2.innerText=c1

    let var5=document.querySelector(".high")
    var5.innerText='0'

    document.body.style.background="white"

    let var3=document.querySelector("#guess")
    var3.value=0

    let var10=document.querySelector(".chance")
    var10.innerText='3'
}