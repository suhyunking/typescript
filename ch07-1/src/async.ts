//async 함수의 성질
//일반 함수처럼 사용할 수 있다.
//Promise 객체로 사용할 수 있다.

import { test1 } from "./await";
import { test2 } from "./await";

test1() 
    .then(() => test2())