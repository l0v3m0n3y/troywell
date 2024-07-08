# troywell
JavaScript library for troywell.org
# main
```js
async function main(){
    const {troywell} = require('./troywell');
    const well= new troywell();
    let req=await well.my_ip()
    console.log(req)
}
main()
```
