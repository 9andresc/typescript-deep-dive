// Enums

enum CardSuit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}

// Sample usage
var card = CardSuit.Clubs;

// Safety
card = 'not a member of card suit'; // Error

// Number enums and numbers

enum Color {
  Red,
  Green,
  Blue
}

var col = Color.Red;
col = 0; // Effectively same as Color.Red

// Number enums and strings

enum Tristate {
  False,
  True,
  Unknown
}

console.log(Tristate[0]); // -> False
console.log(Tristate['False']); // -> 0
console.log(Tristate[Tristate.False]); // -> False

// Changing the number associated with a Number Enum

enum Color {
  Red, // 0
  Green, // 1
  Blue // 2
}

enum Color {
  DarkRed = 3, // 3
  DarkGreen, // 4
  DarkBlue // 5
}

// Number Enums as flags

enum AnimalFlags {
  None = 0,
  HasClaws = 1 << 0,
  CanFly = 1 << 1,
  EatsFish = 1 << 2,
  Endangered = 1 << 3,
  EndangeredFlyingClawedFishEating = HasClaws | CanFly | EatsFish | Endangered
}

type Animal = {
  flags: AnimalFlags;
};

function printAnimalAbilities(animal: Animal) {
  var animalFlags = animal.flags;

  if (animalFlags & AnimalFlags.HasClaws) {
    console.log('Animal has claws');
  }
  if (animalFlags & AnimalFlags.CanFly) {
    console.log('Animal can fly');
  }
  if (animalFlags == AnimalFlags.None) {
    console.log('Nothing');
  }
}

let animal: Animal = { flags: AnimalFlags.None };
printAnimalAbilities(animal); // -> Nothing

animal.flags |= AnimalFlags.HasClaws;
printAnimalAbilities(animal); // -> Animal has claws

animal.flags &= ~AnimalFlags.HasClaws;
printAnimalAbilities(animal); // -> Nothing

animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
printAnimalAbilities(animal); // Animal has claws, Animal can fly

// String Enums

enum EvidenceTypeEnum {
  UNKNOWN = '',
  PASSPORT_VISA = 'passport_visa',
  PASSPORT = 'passport',
  SIGHTED_STUDENT_CARD = 'sighted_student_card'
}

// `someStringFromBackend` can be '' | 'passport' | 'passport_visa' | etc
const value = someStringFromBackend as EvidenceTypeEnum;

// Sample use in code
if (value == EvidenceTypeEnum.PASSPORT) {
  console.log('You provided a passport');
  console.log(value); // -> passport
}

// Const Enums

// Instead of this
enum Tristate {
  False,
  True,
  Unknown
}

// Write this (for a performace boost)
const enum Tristate {
  False,
  True,
  Unknown
}

// Enum with static functions

enum Weekday {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

namespace Weekday {
  export function isBusinessDay(day: Weekday) {
    switch (day) {
      case Weekday.Saturday:
      case Weekday.Sunday:
        return false;
      default:
        return true;
    }
  }
}

const mon = Weekday.Monday;
const sun = Weekday.Sunday;

console.log(Weekday.isBusinessDay(mon)); // -> true
console.log(Weekday.isBusinessDay(sun)); // -> false
