/**
 * title: Poker hands
 * date: 17/01/2022
 * link: https://codingdojo.org/kata/PokerHands/
 * ============================================================
 * task:
 * Your job is to compare several pairs of poker hands and to
 * indicate which, if either, has a higher rank.
 * clubs, diamonds, hearts, spades = C, D, H, S
 * 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king, ace =
 * 2, 3, 4, 5, 6, 7, 8, 9,  T,   J,    Q,    K,    A
 * ============================================================
 * Checks which hand is ranked higher
 * @param cards - an object containing the cards of the two players
 * @returns who the winner is and what their hand was
 */
type CardKind = "C" | "D" | "H" | "S";
type CardValue =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "T"
  | "J"
  | "Q"
  | "K"
  | "A";
interface Card {
  cardKind: CardKind;
  cardValue: string;
}
type InputCards = {
  Black: Card[];
  White: Card[];
};
type Winner = "White wins." | "Black wins." | "Tie.";
type WinningType =
  | " - with high card: "
  | " - with pair: "
  | " - with two pairs: "
  | " - with three of a kind: "
  | " - with straight: "
  | " - with flush: "
  | " - with full house: "
  | " - with four of a kind: "
  | " - with straight flush: ";
type WinningCard = string;
interface ReturnType {
  winner: Winner;
  winningType: WinningType;
  winningCard: string;
}
const kindValue = { C: 1, D: 2, H: 3, S: 4 };
const cardSeriesValue = {
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  T: 9,
  J: 10,
  Q: 11,
  K: 12,
  A: 13,
};
interface RetCardSerVal {
  1: CardValue;
  2: CardValue;
  3: CardValue;
  4: CardValue;
  5: CardValue;
  6: CardValue;
  7: CardValue;
  8: CardValue;
  9: CardValue;
  10: CardValue;
  11: CardValue;
  12: CardValue;
  13: CardValue;
}
const returnCardSeriesValue: RetCardSerVal = {
  1: "2",
  2: "3",
  3: "4",
  4: "5",
  5: "6",
  6: "7",
  7: "8",
  8: "9",
  9: "T",
  10: "J",
  11: "Q",
  12: "K",
  13: "A",
};
const scoreObject = {
  StraightFlush: ["iX", "(i+1)X", "(i+2)X", "(i+3)X", "(i+4)X"],
  FourOfAKind: ["iC", "iD", "iH", "iS"],
  FullHouse: ["iX", "iX", "iX", "yX", "yX"],
  Flush: ["iX", "xX", "yX", "zX", "wX"],
  Straight: ["iX", "(i+1)Y", "(i+2)Z", "(i+3)W", "(i+4)B"],
  ThreeOfAKind: ["iX", "iY", "iZ"],
  TwoPairs: ["iX", "yX", "iY", "yY"],
  Pair: ["iX", "yX"],
  HighCard: ["iX"],
};
function isHighCard(inputCards: Card[]): Card {
  let handOfCards = [];
  let handOfKind: CardKind[] = [];
  for (let card of inputCards) {
    handOfCards.push(cardSeriesValue[card.cardValue]);
    handOfKind.push(card.cardKind);
  }
  let largestCard = Math.max(...handOfCards);
  let indexOfLargestCard = handOfCards.indexOf(largestCard);
  let topCardValue: string = largestCard.toString();
  let topCard: Card = {
    cardValue: returnCardSeriesValue[topCardValue],
    cardKind: handOfKind[indexOfLargestCard],
  };
  return topCard;
}

function pokerHands(inputCards: InputCards): ReturnType {
  return {
    winner: "White wins.",
    winningType: " - with four of a kind: ",
    winningCard: "ace",
  };
}

export default pokerHands;
