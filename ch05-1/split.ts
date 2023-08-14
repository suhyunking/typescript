//str : 나눠질 문자열
//delim(delimiter) : 구분자로 기본값은 빈 문자열('')
//split 메서드를 사용하여 주어진 구분자로 나누고 그 결과를 문자열 배열로 반환

export const split = (str: string, delim: string = ''): string[] => str.split(delim)