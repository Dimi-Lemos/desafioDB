class Forca{
  constructor(p)
  {
    this.p = p
    this.vidas = 6
    this.tamanho = p.length - 1
    this.cadaLetra = p.split('')
    this.palavra = [this.tamanho * "_"]
    this.letrasChutadas = []
    this.acertos = 0

  }

  chutar(letra) { 
    for (l=0;l< this.p.length; l++){
      if(letra == this.cadaLetra[l]){
        this.palavra[l].push(this.letra)
        this.acertos+=1
      }
      else{
        this.vidas -= 1
      }
      this.letrasChutadas.getAttribute(letra)
    }
  }

  buscarEstado() { 
    if (this.vidas == 0){
      return "perdeu"
    }
    else if(this.acertos == this.tamanho){
      return "ganhou"
    }
    else{
    return "aguardando chute"
    } 
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return `Letras chutadas: ${this.letrasChutadas}, vidas: ${this.vidas}, palavra ${this.palavra}`
  }
}

module.exports = Forca;
