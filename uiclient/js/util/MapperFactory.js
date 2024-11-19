import { ComponetsMapper } from '../mapper/ComponetsMapper.js';
import { PanelMapper } from '../mapper/PanelMapper.js';

export class MapperFactory{
    static getMapper(type) {
        switch(type) {
            case 'Componets':
                return new ComponetsMapper();
                break;
            case 'PanelMapper':
                return new PanelMapper();
                break;
            default:
                throw new Exception('El parametro no es valido');
                break;
        }
    }
}