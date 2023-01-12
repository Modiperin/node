const fs=require("fs")

module.exports.WriteDataToFile=(data)=>{
    fs.appendFileSync('./FileHandling/DataFile.txt',data)
}

module.exports.readDataFromFile=()=>{
    var data=fs.readFileSync('./FileHandling/DataFile.txt','utf-8')
    console.log(data)
}
module.exports.WriteDataToFileDel=(data)=>{
    fs.writeFileSync('./FileHandling/DataFile.txt',data)
}
module.exports.DelFile=()=>{
    if(fs.existsSync('./FileHandling/DataFile.txt'))
    {
        fs.unlinkSync('./FileHandling/DataFile.txt')
    }
    else{
        console.log('file Not Found')
    }
}
module.exports.createFile=()=>{
    fs.open('./FileHandling/Data.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
      });
}
function valid(filename)
{
    fs.existsSync(filename) ? true : false

}
module.exports.CreateFolder = ()=>{

    if(valid('./FileHandling/assets')){

            fs.mkdirSync('./FileHandling/assets')
    }
    else{
        console.log("folder already exist")
    }

}
module.exports.CopyFile = () =>{


    if(fs.existsSync('./filehandling/data.txt')){
        if(fs.existsSync('./filehandling/assets')){

            fs.copyFileSync('./filehandling/data.txt','./filehandling/assets/data.txt')
        }
        else{
            console.log("folder not found")
        }

            
    }
    else{
        console.log("file not found")
    }

}
module.exports.writejson = ()=>{

    var users = [
        {
            name:"royal",
            age:23
        },
        {
            name:"raj",
            age:24
        },{
            name:"ravi",
            age:25
        }
    ]

    fs.writeFileSync('./filehandling/users.json',JSON.stringify(users))
}
module.exports.readDataFromJson = () =>{

    var strData = fs.readFileSync('./FileHandling/MOCK_DATA.json','utf-8')
    var data = JSON.parse(strData)
    // console.log(data)
    // console.log(data[0].first_name)
    var arr=[]
    var genArr=[]
    arr=data.filter(x =>x.first_name.startsWith('R'))
    genArr=data.filter(x =>x.gender=='Male')
    CreateFileAndWrite('NameArr',JSON.stringify(arr))
    console.log(genArr)
}
function CreateFileAndWrite(name,arr){
    fs.open('./FileHandling/'+name,'w', function (err, file) {
        if (err) throw err;
        fs.writeFileSync('./FileHandling/'+name,arr)
      });
}
module.exports.RenameFile=()=>{
    fs.renameSync('./FileHandling/DataFile.txt','./FileHandling/D.txt')
}













