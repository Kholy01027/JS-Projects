console.clear()
//------------Task 01
console.log('-'.repeat(10)+'Task',1)

{
    function camelize(string){
        string.split('-')
            .map((item, index, arr)=>{
                let camalized;
                let gonnaCam;
                let ele;
                arr = [];
                if(string.indexOf(item) > index){
                    gonnaCam = item.split("");
                    camalized = gonnaCam.shift().toUpperCase();
                    gonnaCam.unshift(camalized)
                    gonnaCam = gonnaCam.join("")
                    arr.push(gonnaCam)
                }else{
                    arr.push(item)
                }
                console.log(arr)
            })
        
    }

    camelize("background-color") // 'backgroundColor';
    // camelize("list-style-image") // 'listStyleImage';
    // camelize("-webkit-transition") // 'WebkitTransition';
}
