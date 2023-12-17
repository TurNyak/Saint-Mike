const classList = [{id: "ID",name:"NAME",lastN:"LASTNAME",pick:"PICK"}]
classList.push({name:"Filip", lastN:"Bugaj", pick:false})
classList.push({name:"Jakub", lastN:"Freier", pick:false})
classList.push({name:"Oskar", lastN:"Juzefowski", pick:false})
classList.push({name:"Sebastian", lastN:"Latusek", pick:false})
classList.push({name:"Oleksandr", lastN:"Koval", pick:false})
classList.push({name:"Maksymilian", lastN:"Gdawiec", pick:false})
classList.push({name:"Mariusz", lastN:"Mann", pick:false})
classList.push({name:"Oliwer", lastN:"Loson", pick:false})
classList.push({name:"Adrian", lastN:"Hadasik", pick:false})
classList.push({name:"Jakub", lastN:"Pajak", pick:false})
classList.push({name:"Domenik", lastN:"Kijko", pick:false})
classList.push({name:"Evgen", lastN:"Malenko", pick:false})
classList.push({name:"Igor", lastN:"Olszanowic", pick:false})
classList.push({name:"Mateusz", lastN:"Szeliec", pick:false})
classList.push({name:"Adrian", lastN:"Szmandra", pick:false})
classList.push({name:"Maksym", lastN:"Voinerovskyj", pick:false})


//get id for all 
for(let i = 1; i < classList.length;i++){
    classList[i].id = i
}

//const sort = classList.map((x) => x = {id: x.id,name: x.name,lastN: x.lastN})
//console.log(sort)

var firstTable = document.querySelector('#firstTable')
createTable(firstTable, classList.map((x) => x = {id: x.id,name: x.name,lastN: x.lastN}))

var firstTablePick = document.querySelector('#firstTablePick')
createTable(firstTablePick, classList.map((x) => x = {pick: x.pick}))
function createTable(parent, objArray){
    var table = document.createElement('table')

    for(const row of objArray){
        var tr = document.createElement('tr')

        
        for (const column of Object.values(row)) {// columns = ["id", "name" ...]
            var td = document.createElement('td')
            td.innerHTML = column
            tr.appendChild(td)
          }
        table.appendChild(tr)
    }
    parent.appendChild(table)
}

//function for random 







