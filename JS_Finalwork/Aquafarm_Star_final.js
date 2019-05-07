"use strict";

	function Aquafarm() {
		this._onOff = false; 					
		this._lightOnOff = false; 				
		this._connectedObjects = {
			aquarium: null,    
			plants: null,
		};
		this._mode = [
		"none",
		"aquarium",
		"plants",
		"aquarium_Plants",
		];									
		this._currentMode = 0;
	}
	
	Aquafarm.prototype.switchOnOff = function () { 
		this._onOff = !this._onOff;
	};
	
	Aquafarm.prototype.getOnOff = function () {
		return this._onOff;
	};
	
	Aquafarm.prototype.switchLightOnOff = function () { 
		this._lightOnOff = !this._lightOnOff;
	};
	
	Aquafarm.prototype.getLightOnOff = function () {
		return this._lightOnOff;
	};
	
	Aquafarm.prototype.connectAquarium = function (aquaruim) {
		if (aquaruim instanceof Aquarium == true) {
			this._connectedObjects.aquarium = aquaruim;
		};
	};
	
	Aquafarm.prototype.disconnectAquarium = function () {
		var tmp = this._connectedObjects.aquarium;
		this._connectedObjects.aquarium = null;
		return tmp;
	};
	
	Aquafarm.prototype.getAquarium = function () {
		return this._connectedObjects.aquarium;
	};

	Aquafarm.prototype.plantAPlant = function (plant) {
		if (plant instanceof Plants == true) {
			this._connectedObjects.plants = plant;
		};
	};
	
	Aquafarm.prototype.digAPlant = function () {
		var tmp1 = this._connectedObjects.plants;
		this._connectedObjects.plants = null;
		return tmp1;
	};
	
	Aquafarm.prototype.getPlants = function () {
		return this._connectedObjects.plants;
	};
	
	Aquafarm.prototype.setMode = function(value) {
		if (this._mode.indexOf(value) != -1) {
			switch (value) {
					case "none": 
						this._currentMode = 0;
						break;
					case "aquarium":
						if (this._connectedObjects.aquarium !== null) {
							this._currentMode = 1;
						};
						break;
					case "plants":
						if (this._connectedObjects.plants !== null) {
							this._currentMode = 2;
						};
						break;
					case "aquarium_Plants":
						if (this._connectedObjects.plants !== null && this._connectedObjects.aquarium !== null) {
							this._currentMode = 3;
						};
			};
			
		};
	};
			
	Aquafarm.prototype.getCurrentMode = function () {
		return this._mode[this._currentMode];
	};
	
	Aquafarm.prototype.setTimer = function () {
		var timer = setTimeout (function check() {
			switch(this._currentMode) {
				case 1:
					if (this._connectedObjects.aquarium == null) {
						this._currentMode = 0;
					};
					break;
				case 2:
					if (this._connectedObjects.plants == null) {
					this._currentMode = 0;
					};
					break;
				case 3:
					if (this._connectedObjects.aquarium == null) {
						this._currentMode = 2;
					} else if (this._connectedObjects.plants == null) {
						this._currentMode = 1;
					} else if (this._connectedObjects.aquarium == null) {
						if (this._connectedObjects.plants == null) {
						this._currentMode = 0;
						}
					} else {
						console.log("Incorrect regime");
					};
					break;
				default: 
					this._currentMode = 0;
			};
			timer = setTimeout(check, 4000);
		}, 4000);
	};

	
	function Plants () {
	this._currentAcidityPH = 7;
	this._timesWashingPlantsPerWeek = 0;
	this._lightOnOff = false;
	};

	
	Plants.prototype.getCurrentAcidity = function () {	  
		return this._currentAcidityPH;
	};
	Plants.prototype.setCurrentAcidity = function (number) {				
		if ((number > 0) && (number < 10)) {
			if (this._currentAcidityPH > number) {
				this._currentAcidityPH += 1;
			} else if (this._currentAcidityPH < number) {
				this._currentAcidityPH -= 1;
			} else {
				this._currentAcidityPH = number;
			};
		};
	};
	Plants.prototype.getTimesWashingPlantsPerWeek = function () {	  
		return this._timesWashingPlantsPerWeek;
	};
	Plants.prototype.setTimesWashingPlantsPerWeek = function (number) {
		if ((number > 0) && (number < 5)) {
			this._timesWashingPlantsPerWeek = number;
		} else {
			console.log("Wrong data");
		};
	};	
	Plants.prototype.switchLightOn = function () { 
		this._lightOnOff = true;
	};
	Plants.prototype.switchLightOff = function () { 
		this._lightOnOff = false;
	};
	Plants.prototype.getLightOnOff = function () {
		return this._lightOnOff;
	};

	
		
	function Aquarium () {
		this._fishCount = 0;						
		this._foodInContainer = [
			"dry",							
			"wet",
			"Zhivets",
		];
		this._currentFood = 0; 					
	};
		
	Aquarium.prototype.setFishCount = function (numberFish) {
		if (Number(numberFish) > 0) {
			this._fishCount = numberFish;
		}
	};
	
	Aquarium.prototype.getFishCount = function () {
		return this._fishCount;
	};
	
	Aquarium.prototype.addNewFish = function () {
		this._fishCount += 1;
	};
	
	Aquarium.prototype.delFish = function () {
		if (this._fishCount > 0) {
			this._fishCount -= 1;
		} else {
			this._fishCount = 0;
		};
	};
	Aquarium.prototype.nextFood = function () {
		if (this._currentFood == (this._foodInContainer.length - 1)) {
			this._currentFood = 0;
		} else {
			this._currentFood += 1;
		};
	};
	Aquarium.prototype.previousFood = function () {
		if (this._currentFood == 0) {
			this._currentFood = this._foodInContainer.length - 1;
		} else {
			this._currentFood -= 1;
		};
	};
	Aquarium.prototype.getFoodInContainer = function () {
		return this._foodInContainer[this._currentFood];
	};

	


