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
//------------------------------------------------checks how many of same in hand
function numOfSame(hand: Card[]): 0 | object {
  const pairObj: any = {};
  for (let card of hand) {
    if (pairObj[card.cardValue] === undefined) {
      pairObj[card.cardValue] = 1;
    } else {
      pairObj[card.cardValue]++;
    }
  }
  if (!Object.values(pairObj.includes(2 | 3 | 4))) {
    return 0;
  } else {
    return pairObj;
  }
}
//------------------------------------------------checks four of a kind in hand
function isFourOfAKind(handObj: object): boolean {
  if (Object.keys(handObj)[Object.values(handObj).indexOf(4)] === undefined) {
    return false;
  } else {
    return true;
  }
}
//------------------------------------------------checks three of a kind in hand
function isThreeOfAKind(handObj: object): boolean {
  if (Object.keys(handObj)[Object.values(handObj).indexOf(3)] === undefined) {
    return false;
  } else {
    return true;
  }
}
//------------------------------------------------checks number of pairs in hand
function numPairs(handObj: object): number {
  let count: number = 0;
  if (Object.keys(handObj)[Object.values(handObj).indexOf(2)] === undefined) {
    return 0;
  } else {
    for (let num of Object.values(handObj)) {
      if (num === 2) count++;
    }
  }
  return count;
}
//------------------------------------------------checks if cards are a full house
function isFullHouse(hand: Card[]): boolean {
  const handObj = numOfSame(hand);
  if (handObj === 0) return false;
  if (isThreeOfAKind(handObj) && numPairs(handObj) === 1) {
    return true;
  } else {
    return false;
  }
}
//------------------------------------------------checks if cards are in a row
function isInARow(hand: Card[]): boolean {
  let handOfCards: number[] = [];
  for (let card of hand) {
    handOfCards.push(card.cardValue);
  }
  let sortedHand = handOfCards.sort();
  let previousCard = sortedHand[0];
  for (let i = 1; i < sortedHand.length; i++) {
    if (previousCard + 1 === sortedHand[i]) {
      previousCard = sortedHand[i];
    } else {
      return false;
    }
  }
  return true;
}
//------------------------------------------------checks if cards are one suite
function isOneSuite(hand: Card[]): boolean {
  let handOfCards: number = 0;
  const suiteValue = { C: 0.1, D: 1, S: 4, H: 16 };
  const trueCases: number[] = [0.4, 4, 16, 64];
  for (let card of hand) {
    handOfCards = +suiteValue[card.cardKind];
  }
  if (trueCases.includes(handOfCards)) {
    return true;
  } else {
    return false;
  }
}
//------------------------------------------------checks if cards are straight flush
function isStraightFlush(hand: Card[]): boolean {
  if (isInARow(hand) && isOneSuite(hand)) {
    return true;
  } else {
    return false;
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
