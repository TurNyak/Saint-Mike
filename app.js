const classList = [{id: "ID",name:"NAME",lastN:"LASTNAME",pick:"PICK"}]
//To quickly clear a participant who is not participating at this moment, you can add //classList.push({name:"Filip", lastN:"Bugaj", pick: ""})
classList.push({name:"Filip", lastN:"Bugaj", pick: ""})
classList.push({name:"Jakub", lastN:"Freier", pick: ""})
classList.push({name:"Oskar", lastN:"Juzefowski", pick: ""})
classList.push({name:"Sebastian", lastN:"Latusek", pick: ""})
classList.push({name:"Oleksandr", lastN:"Koval", pick: ""})
classList.push({name:"Maksymilian", lastN:"Gdawiec", pick: ""})
classList.push({name:"Mariusz", lastN:"Mann", pick: ""})
classList.push({name:"Oliwer", lastN:"Loson", pick: ""})
classList.push({name:"Adrian", lastN:"Hadasik", pick: ""})
classList.push({name:"Jakub", lastN:"Pajak", pick: ""})
classList.push({name:"Domenik", lastN:"Kijko", pick: ""})
classList.push({name:"Evgen", lastN:"Malenko", pick: ""})
classList.push({name:"Igor", lastN:"Olszanowic", pick: ""})
classList.push({name:"Mateusz", lastN:"Szeliec", pick: ""})
classList.push({name:"Adrian", lastN:"Szmandra", pick: ""})
classList.push({name:"Maksym", lastN:"Voinerovskyj", pick: ""})


//get id for all 
for(let i = 1; i < classList.length;i++){
    classList[i].id = i
}

//creating the first informative table of participants
var firstTable = document.querySelector('#firstTable')
createTable(firstTable, classList.map((x) => x = {id: x.id,name: x.name,lastN: x.lastN}))

//ready-made table selected for each participant
var firstTablePick = document.querySelector('#firstTablePick')
let pi = resultTable(pairOrphanless(classList.map((x) => x = [x.id]).splice(1,classList.length)))
createTable(firstTablePick, pi)


function pickReady(){   
    location. reload()
}

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




//we form the correct table for the algorithm for creating tables on the page
function resultTable(te){
    const r = [{name:"NAME", lastN: "LAST NAME"}] 
    for(const key of Object.keys(te)){
        r.push({name: classList[te[key]].name,lastN: classList[te[key]].lastN})
    }
    return r
}



//console.log(pairOrphanless(classList.map((x) => x = [x.id]).splice(1,classList.length)));
//references from Sebastian 


function pairOrphanless(Els) {
    let pairs = {};
    for (const key of Els)
        pairs[key] = null;

    let current_key = Els[0];
    
    while (true) {
        // if chosen paired, we don't want to cycle - we want to start from next to pair
        if (pairs[current_key] != null) {
            for (const key of Object.keys(pairs)) {
                if (pairs[key] == null) {
                    current_key = key;
                    break;
                }
            }
        }

        let possible_for_pair = [...Els];

        // cannot pair itself
        possible_for_pair.splice(possible_for_pair.indexOf(current_key), 1);

        // delete already paired
        possible_for_pair = possible_for_pair.filter((p) => !Object.values(pairs).includes(p));

        // if have choice between two, choose unpaired to avoid orphan
        if (possible_for_pair.length == 2) {
            possible_for_pair = possible_for_pair.filter((p) => pairs[p] == null);
        }

        //console.log(current_key, possible_for_pair);
        if (possible_for_pair.length == 0) break;
    
        let to_pair = possible_for_pair[
            Math.floor(Math.random()*possible_for_pair.length)
        ];

        pairs[current_key] = to_pair;
        current_key = to_pair;
    }

    return pairs;
}