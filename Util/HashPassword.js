const bcrypt = require('Bcrypt')
const saltRound=10

// const hashPass=(Password)=>{
//     bcrypt.hash(Password,saltRound,(err,hash)=>{
//         console.log(hash)
//     })
// }
// hashPass("12345")

// const comparator=(pass,hashKey)=>{
//     bcrypt.compare(pass,hashKey,(err,res)=>{
//         console.log(res)
//     })
// }
// comparator('12345','$2b$10$ALjKBkLoBiD/54WPTVaKUeWw9vS72nu7sEgoPHFDo6srVvkQAL2pW')

// const hasPass=async(password)=>{
//     const hash=bcrypt.hash(password,saltRound)
//     return hash
// }

// hasPass('12345').then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// const compare=async(pass,key)=>{
//     const res=bcrypt.compare(pass,key)
//     return res
// }

// compare('12345','$2b$10$ALjKBkLoBiD/54WPTVaKUeWw9vS72nu7sEgoPHFDo6srVvkQAL2pW').then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

module.exports.hashSync=(pass)=>{
    return bcrypt.hashSync(pass,saltRound)
}
// console.log(hashSync('12345'))

module.exports.comSync=(pass,key)=>{
    return bcrypt.compareSync(pass,key)
}
// console.log(comSync('12345','$2b$10$ALjKBkLoBiD/54WPTVaKUeWw9vS72nu7sEgoPHFDo6srVvkQAL2pW'))