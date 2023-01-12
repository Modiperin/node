var name ='royal'
module.exports = name

function add(a,b)
{
    return a+b
}
// module.exports=add
module.exports={name,add}

module.exports.addUser=(user)=>{
    console.log('user Added->',user)
}
