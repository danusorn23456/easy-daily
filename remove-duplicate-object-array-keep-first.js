let objArr = [{ name: "robot", version: 1 }, { name: "robot", version: 2 }, { name: "human", version: 1 }]
let nonDupObjArr = objArr.filter((o, index) => objArr.findIndex(co => co.name === o.name) === index)
console.log(nonDupObjArr)
