document.querySelector('button').addEventListener('click', run)

function run(){
    let type = document.querySelector('input').value
    console.log(type)
    const url = `https://www.balldontlie.io/api/v1/players?search=${type}`
    fetch(url)
    .then(res => res.json()) 
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.data[0].first_name
        //Sim found the working API with Kerlin didnt wanna risk finding a different one
        let word = data.data[0].first_name
        fetch(`https://api.celebrityninjas.com/v1/search?name=${word}`,{
        method: "GET",
        headers: { "X-Api-Key": "/TLJqPOAN++jEVuHQsqKgQ==dKj7sMRI21tR34LR"},
        })
        //  console.log(word)
         .then(res => res.json()) 
         .then(data => {
             console.log(word)
             console.log(data)
             document.querySelector('h3').innerText = data[0].net_worth
                  })   
    })
    
}