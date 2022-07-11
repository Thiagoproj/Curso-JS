function contar(){
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let Passo = window.document.getElementById('txtp')
   let res = window.document.getElementById('contagem')

   if (ini.value.length == 0 || fim.value.length == 0 || Passo.value.length == 0) {
    window.alert(`[ERRO] Faltam dados!`)
   }else{
      res.innerHTML = `Contando:`
      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(Passo.value)

      for (let c = i; c <= f; c+= p) {
        res.innerHTML +=`${c} `
        
      }

   }
}