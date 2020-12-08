import { Pipe, PipeTransform } from '@angular/core';

interface Unit {
    value: string;
    returnValue: string;
}
  
@Pipe({
    name: 'unitFormat'
})
export class UnitFormatPipe implements PipeTransform {
    unitList: Unit[] = [
        {value: 'килограмм', returnValue: 'кг'},
        {value: 'грамм', returnValue: 'гр'},
        {value: 'метр', returnValue: 'м'},
        {value: 'километр', returnValue: 'км'},
        {value: 'сантимерт', returnValue: 'см'},
        {value: 'милиметр', returnValue: 'мм'}
    ];
    transform(value: string): string {
        const returnUnit : any =  this.unitList.find((elem) => {
            return elem.value === value
        })
        if (returnUnit) return returnUnit.returnValue;
        return 'не найдено'
    }
}