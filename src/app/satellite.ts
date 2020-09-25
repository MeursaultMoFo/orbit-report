export class Satellite {

  name: string;
  orbitType: string;
  type: string;
  operational: boolean;
  launchDate: string;

  constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
    this.name = name;
    this.type = type;
    this.launchDate = launchDate;
    this.orbitType = orbitType;
    this.operational = operational;

  }

  // //part 6
  // shouldShowWarning {
  //   let phrase = `${this.type}`;
  //   if (phrase.toUpperCase === "SPACE DEBRIS") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

}


