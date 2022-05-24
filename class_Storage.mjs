'use strict'

export class Storage {
  constructor(xPos, yPos, name) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.name = name;
    this.trucks = []; //contains truck IDs
    this.parcels = []; //contains parcel IDs; works as a stack
  }

  addTruck(id) {
    if (!this.trucks.includes(id)) {
      this.trucks.push(id);
    } else {
      console.log('This truck is already in this depot'); //should add proper error handling
    }
  }

  remTruck(id) {
    const position = this.trucks.indexOf(id);
    if (position) {
      this.trucks.splice(position, 1);
    } else {
      console.log('This truck does not exist or is not in this depot'); //should add proper error handling
    }
  }

  unshiftParcel(id) {
    if (!this.parcels.includes(id)) {
      this.parcels.unshift(id);
    } else {
      console.log('This parcel is already in this storage'); //should add proper error handling
    }
  }

  popParcel() {
    const parcel = this.parcels.pop();
    if (parcel) {
      return parcel;
    } else {
      console.log('This storage is empty!'); //should add proper error handling
    }
  }  
}
