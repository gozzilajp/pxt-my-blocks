// tests go here; this will not be compiled when this package is used as an extension.
basic.showString('test');
basic.forever(function() {
	const temp = input.temperature();
	const fValue = myBlocks.convertTemperature(temp, TempConvertType.CtoF);
	const cValue = myBlocks.convertTemperature(temp, TempConvertType.FtoC);
	basic.showString('T:');
	basic.showNumber(temp);
	basic.showString('C:');
	basic.showNumber(cValue);
	basic.showString('F:');
	basic.showNumber(fValue);
});
