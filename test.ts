// tests go here; this will not be compiled when this package is used as an extension.
basic.showString('test');
basic.forever(function() {
	const temp = input.temperature();
	const fValue = myBolocks.convertTemperature(temp, TempConvertType.CtoF);
	const cValue = myBolocks.convertTemperature(temp, TempConvertType.FtoC);
	basic.showString('T:');
	basic.showNumber(temp);
	basic.showString('C:');
	basic.showNumber(cValue);
	basic.showString('F:');
	basic.showNumber(fValue);
});
