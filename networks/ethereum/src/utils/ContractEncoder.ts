import { encodeParameters, getFunctionSelector } from './abiEncoder';

export interface AbiFunctionItem {
  type: 'function' | string;
  name: string;
  inputs: Array<{ name?: string; type: string }>;
}

export class ContractEncoder {
  [key: string]: any;
  
  private functionsMap: Map<string, AbiFunctionItem[]> = new Map();

  constructor(abi: AbiFunctionItem[]) {
    for (const item of abi) {
      if (item.type === 'function') {
        const fnName = item.name;
        if (!this.functionsMap.has(fnName)) {
          this.functionsMap.set(fnName, []);
        }
        this.functionsMap.get(fnName)!.push(item);
      }
    }

    return new Proxy(this, {
      get: (target, propertyKey, receiver) => {
        if (typeof propertyKey === 'string' && target.functionsMap.has(propertyKey)) {
          return (...args: any[]) => {
            const candidates = target.functionsMap.get(propertyKey)!;
            const matched = candidates.filter(c => c.inputs.length === args.length);
            if (matched.length === 0) {
              throw new Error(`No matching overload for function "${propertyKey}" with ${args.length} args`);
            } else if (matched.length === 1) {
              return target.encodeCall(matched[0], args);
            } else {
              throw new Error(`Multiple overloads for function "${propertyKey}" with ${args.length} args. You need more strict matching logic.`);
            }
          };
        }
        return Reflect.get(target, propertyKey, receiver);
      }
    });
  }

  private encodeCall(fnAbi: AbiFunctionItem, args: any[]): string {
    const types = fnAbi.inputs.map(i => i.type);
    const signature = fnAbi.name + '(' + types.join(',') + ')';

    const selector = getFunctionSelector(signature);

    const encodedArgs = encodeParameters(types, args);

    return '0x' + selector + encodedArgs;
  }
}