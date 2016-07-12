import {Injectable, Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'currencyPipe'
})

@Injectable()
export class CurrencyPipe implements PipeTransform {
    transform(data, args) {
    		if (args[0].gigDate >= 2002) {
    			return data + " €";
    		}
    		return data + " pta.";
	}
}