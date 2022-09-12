enum TempConvertType {
	//% block="°C -> °F"
	CtoF,
	//% block="°F -> °C"
	FtoC,
}

namespace myBlocks {
	//% blockId=myBlocks_convertTemperature
	//% block="convert|%value|%convertType"
	export function convertTemperature(value:number, convertType:TempConvertType):number {
		if (convertType == TempConvertType.CtoF) {
			return cToF(value);
		}
		if (convertType == TempConvertType.FtoC) {
			return fToC(value);
		}
		return value;
	}

	//% shim=myBlocks::cToF
	function cToF(value:number){
        return 32.0;
	}

	//% shim=myBlocks::fToC
	function fToC(value:number){
        return 32.0;
	}
}
