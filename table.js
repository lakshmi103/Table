fetch('http://127.0.0.1:5500/table.json').then(
    res=>{
        res.json().then(
            data=>{
                console.log(data[0]);
                console.log(data[1]);
                console.log(data[2]);
                            

                
            }
        )
    }
)