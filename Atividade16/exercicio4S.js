const fs=require('fs'); //carregando modo filesystem
const data= fs.readFileSync('file.txt')
//execução é bloqueada aqui até o arquivo ser lido
console.log(data.toString());