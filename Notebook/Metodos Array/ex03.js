let nums = [];

function adicionarNum(lista, numero){
  lista.push(numero)
}

adicionarNum(nums, 1);
adicionarNum(nums, 2);
adicionarNum(nums, 3);
adicionarNum(nums, 4);
adicionarNum(nums, 5);
adicionarNum(nums, 6);
adicionarNum(nums, 7);
adicionarNum(nums, 8);
adicionarNum(nums, 9);
adicionarNum(nums, 10);

let pares = nums.filter(function(par){
   return par % 2 === 0
})

console.log(pares)
