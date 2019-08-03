import './demo.scss'

import fetch from 'cross-fetch'
var container = document.createElement('div')
container.className = 'container'
var ul = document.createElement('ul')
for(var i = 0; i < 5; i++){
    var li = document.createElement('li')
    ul.appendChild(li)
}
container.appendChild(ul)
document.body.appendChild(container)

let arr1 = [1,2,3,4]
let arr2 = [5,6,7,9]
console.log(...arr1,...arr2,'展开运算符')

fetch('/api/user')
    .then(res=>{
        if(res.status >=400){
            throw new Error ("Bad response from server")
        }
        return res.json()
    })
    .then(user=>{
        console.log(user)
    })
    .catch(err=>{
        console.log(err)
    })