//from이 to보다 작지 않을 때 빈배열 반환
//그렇지 않은 경우 재귀적으로 from부터 to까지의 숫자 배열을 생성
//현재 숫자인 from을 배열에 추가하고, 재귀적으로 다음 숫자인 from + 1 부터 to 까지의 숫자 배열 생성


export const range = (from: number, to: number): number[] =>
from < to ? [from, ...range(from + 1, to)] : []
