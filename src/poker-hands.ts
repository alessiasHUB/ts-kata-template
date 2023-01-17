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
 * 2, 3, 4, 5, 6, 7, 8, 9, 10,  11,   12,    13,   14
 * ============================================================
 * Checks which hand is ranked higher
 * @param cards - an object containing the cards of the two players
 * @returns who the winner is and what their hand was
 */
type CardKind = "C" | "D" | "S" | "H";
// all suites are of the same strength in poker, can remove
const kindValue = { C: 0.1, D: 0.2, S: 0.3, H: 0.4 };
type CardValue = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

interface Card {
  cardKind: CardKind;
  cardValue: CardValue;
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

//------------------------------------------------checks top card in hand
function isHighCard(hand: Card[]): Card {
  let handOfCards: number[] = [];
  for (let card of hand) {
    handOfCards.push(card.cardValue + kindValue[card.cardKind]);
  }
  let largestCard = Math.max(...handOfCards);
  let indexOfLargestCard = handOfCards.indexOf(largestCard);
  let topCard: Card = hand[indexOfLargestCard];
  return topCard;
}
//------------------------------------------------checks how many pairs in hand
function numOfPairs(hand: Card[]): 0 | 1 | 2 {
  const pairObj: any = {};
  for (let card of hand) {
    if (pairObj[card.cardValue] === undefined) {
      pairObj[card.cardValue] = 1;
    } else {
      pairObj[card.cardValue]++;
    }
  }
  if (pairObj.keys.length === 0) {
    return 0;
  } else {
    return pairObj.keys.length;
  }
}

function pokerHands(inputCards: InputCards): ReturnType {
  return {
    winner: "White wins.",
    winningType: " - with four of a kind: ",
    winningCard: "ace",
  };
}

export default pokerHands;
