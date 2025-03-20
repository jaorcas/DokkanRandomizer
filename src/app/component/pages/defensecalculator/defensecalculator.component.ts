import { Component } from '@angular/core';
import Constants from '../../../../../Constants';
import { DefenseData } from '../../../Interfaces/defensedata.interface';

@Component({
  selector: 'app-defensecalculator',
  templateUrl: './defensecalculator.component.html',
  styleUrl: './defensecalculator.component.css'
})
export class DefensecalculatorComponent {

  cabecera = ['#', 'SUPER', 'EXTREME'];
  colores = ['AGL', 'TEQ', 'INT', 'STR', 'PHY'];

  attack: string = '';
  defense: string = '';
  damageReduction: string = '';
  attackerType: string = 'AGL';
  attackerClass: string = 'SUPER';
  passiveGuard: boolean = false;

  data = [
    ['0', '0'],
    ['0', '0'],
    ['0', '0'],
    ['0', '0'],
    ['0', '0'],
  ];

  onInputChange(event: Event): void {
    this.calculateDefense();
  }

  calculateDefense() {

    let contador = 0;
    //RECORREMOS TODOS LOS COLORES Y PASAMOS TAMBIEN EL COLOR DEL ATACANTE PARA HACER LOS CALCULOS
    for (let defenseColor of this.colores) {
      this.data[contador] = this.calculateRow(defenseColor, this.attackerType);
      contador++;
    }
  }

  private calculateRow(defenseColor: string, attackerType: string): string[] {
      return [this.calculateResult(defenseColor, attackerType, Constants.SUPER), this.calculateResult(defenseColor, attackerType, Constants.EXTREME)];
  }

  // ((ATAQUE * VENTA/DESVENTAJA * 1.015 * (1 - REDUCCION)) - DEFENSA) * GUARDIA(0.5)
  private calculateResult(defenseColor: string, attackerColor: string, clase: string): string {

    let resultado = 0;
    let resultadoString = '';
    let defenseData : DefenseData = this.getMultiplicadorTipo(defenseColor, attackerColor, clase);

    const attackNumber = this.attack === '' ? 0 : parseFloat(this.attack);
    const defenseNumber = this.defense === '' ? 0 :parseFloat(this.defense);
    const drNumber = this.damageReduction === '' ? 0 :parseFloat(this.damageReduction);

    resultado = ((attackNumber * defenseData.multiplicador * 1.015 * (1 - drNumber/100)) - defenseNumber) * (this.passiveGuard || defenseData.naturalGuard ? 0.5 : 1);

    //CAMBIAMOS EL FORMATO
    if(resultado <= 0){
      resultado = 0;
    }

    resultadoString = Math.ceil(resultado).toLocaleString();

    return resultadoString;
  }

  //RECOGEMOS TODOS LOS COLORES PARA SABER SI TIENE VENTAJA O DESVENTAJA
  private getMultiplicadorTipo(defenseColor: string, attackerColor: string, clase: string) : DefenseData{

    let defenseData: DefenseData = {} as DefenseData;

    switch (attackerColor) {
      case 'AGL':
        switch (defenseColor) {

          case 'AGL': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1 : 1.15); break;
          case 'TEQ': defenseData.multiplicador = this.passiveGuard ? 0.7 : (this.attackerClass === clase ? 0.8 : 0.9);
                      defenseData.naturalGuard = true;
                      break;
          case 'INT': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1 : 1.15); break;
          case 'STR': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1.25 : 1.5); break;
          case 'PHY': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1 : 1.15); break;
        }
        break;

      case 'TEQ':
        switch (defenseColor) {
          case 'AGL': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1.25 : 1.5); break;
          case 'TEQ': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1 : 1.15); break;
          case 'INT': defenseData.multiplicador = this.passiveGuard ? 0.7 : (this.attackerClass === clase ? 0.8 : 0.9);
                      defenseData.naturalGuard = true;
                      break;
          case 'STR': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1 : 1.15); break;
          case 'PHY': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1 : 1.15); break;
        }
        break;
      case 'INT':
        switch (defenseColor) {
          case 'AGL': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1 : 1.15); break;
          case 'TEQ': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1.25 : 1.5); break;
          case 'INT': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1 : 1.15); break;
          case 'STR': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1 : 1.15); break;
          case 'PHY': defenseData.multiplicador = this.passiveGuard ? 0.7 : (this.attackerClass === clase ? 0.8 : 0.9);
                      defenseData.naturalGuard = true;
                      break;
        }
        break;
      case 'STR':
        switch (defenseColor) {
          case 'AGL': defenseData.multiplicador = this.passiveGuard ? 0.7 : (this.attackerClass === clase ? 0.8 : 0.9);
                      defenseData.naturalGuard = true;
                      break;
          case 'TEQ': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1 : 1.15); break;
          case 'INT': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1 : 1.15); break;
          case 'STR': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1 : 1.15); break;
          case 'PHY': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1.25 : 1.5); break;
        }
        break;
      case 'PHY':
        switch (defenseColor) {
          case 'AGL': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1 : 1.15); break;
          case 'TEQ': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1 : 1.15); break;
          case 'INT': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1.25 : 1.5); break;
          case 'STR': defenseData.multiplicador = this.passiveGuard ? 0.7 : (this.attackerClass === clase ? 0.8 : 0.9);
                      defenseData.naturalGuard = true;
                      break;
          case 'PHY': defenseData.multiplicador = this.passiveGuard ? 0.8 : (this.attackerClass === clase ? 1 : 1.15); break;
        }
        break;
    }

    return defenseData;
  }

}
