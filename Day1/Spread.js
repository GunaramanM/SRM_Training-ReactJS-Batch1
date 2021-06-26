/*class staticclass{

    static demo(){
        let name="java is programming language";
        let name1="java";
        name1.split();
        console.log(name.includes(name1));
    
    }
    
    }
    staticclass.demo(); */


    function add(val,...z){

        let res=0;
        for(let i=0;i<z.length;i++){
            res=res+z[i];
        }
        res=res+val;
        return res;
    }
    
    console.log(add(10,20,20,10,40));