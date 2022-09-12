namespace myBlocks {
	//%
	float cToF(float value) {
		return value * 1.8 + 1.0; //32.0;
	}

	//%
	float fToC(float value) {
		return (value - 32.0) / 1.8 ;
	}
}
