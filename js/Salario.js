class Salario {
    /**
     *
     *@param {number} pSalarioBruto
     */
  
    constructor(pSalarioBruto) {
  
      this._salarioBruto = undefined;
  
      this._validarParametro(pSalarioBruto);
  
      this._salarioBruto = pSalarioBruto;
  
      Object.freeze(this);
  
    }
  
    _validarParametro(valor) {
  
      if (((typeof valor !== 'number') || valor < 0))
  
        throw new Error('Informe um salário válido');
  
    }
  
    get descontoINSS() {
      let porcentINSS;
      if (this._salarioBruto <= 1693.72)
       porcentINSS = 8;
      else
      if (this._salarioBruto >= 1693.73 && this._salarioBruto <= 2822.90)
        porcentINSS = 9;
      else
      if (this._salarioBruto >= 2822.91)
      porcentINSS = 11;
      
        let descontoINSS = (this._salarioBruto * porcentINSS)/100;
        if (descontoINSS > 621.04)
          return 621.04;
        else
          return Number(descontoINSS.toFixed(2));
    }
    
    get descontoIRPF(){
      let salario = this._salarioBruto - this.descontoINSS;
      let porcentagem = 0;
      let deducao = 0;
        if (salario <= 1903.98) {
         porcentagem = 0; 
         deducao = 0; 
        }else
        if (salario >= 1903.99 && salario <= 2826.65) {
          porcentagem = 7.5;
          deducao = 142.80;
        }else
        if (salario >= 2826.66 && salario <= 3751.05){
          porcentagem = 15;
          deducao = 354.80;
        }else 
        if (salario >= 3751.06 && salario <= 4664.68){
          porcentagem = 22.5;
          deducao = 636.13;
        }else
        if (salario > 4664.68){
          porcentagem = 27.5;
          deducao = 869.36;
          
        }
        return Number((((salario * porcentagem)/100)-deducao).toFixed(2));
      }
    
      get totalDescontos(){
        return Number((this.descontoINSS+this.descontoIRPF).toFixed(2));
  
    }
    
    get salarioLiquido(){
        return Number((this._salarioBruto - this.totalDescontos).toFixed(2));
    }
        
    }