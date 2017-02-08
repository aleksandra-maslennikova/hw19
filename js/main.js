/*
Даны строки разделенные различным образом,
верните строки разделенные / или _, в нижнем регистре
solution("ActiveModel::Errors") => active_model/errors"
solution("HelloHowAreYou") => "hello_how_are_you"
solutio("MyNAMEIsBOND-JamesBond") => my_name_is_bond_james_bond"
solution("MAINCompany::BEST-MAINUser") => "main_company/best_main_user"
*/
function solution(str) {

  function replaceMatches(string, param) {
    if (param) {
      param.forEach(elem => {
        string = string.replace(elem, '_' + elem.toLowerCase());
      });
    }
    return string
  }

  let myStr = str.replace(/::/, '/').replace('-', '_');
  let part = myStr.match(/[A-Z]{1}[a-z]/g);
  myStr = replaceMatches(myStr, part);
  part = myStr.match(/[A-Z]{2,}/g);
  myStr = replaceMatches(myStr, part);
  myStr = myStr.replace('/_', '/').replace('__', '_');
  if (myStr[0] === '_') {
    myStr = myStr.slice(1);
  }

  console.log(myStr);
}
solution("ActiveModel::Errors");//active_model/errors
solution("MAINCompany::BEST-MAINUser");//"main_company/best_main_user"
solution("HelloHowAreYou") //"hello_how_are_you"
solution("MyNAMEIsBOND-JamesBond")// => my_name_is_bond_james_bond"

/*
Сделайте таблицу 5x5
При клике на элемент, изменяйте цвет у элемента на красный.
Но цвет у элемента должен изменяться пропорционально в другой половине квадрата
Пример 3х3:
[]|[]|[]
[]|[]|[]
[]|[]|[]
кликаем сюда ->[]|[]|[]
               []|[]|[]
               []|[]|[x] <- загорается тут
               
                []|[]|[]
кликаем сюда -> []|[]|[x] <- загорается тут
                []|[]|[x]
*/

let elements = document.querySelectorAll('td');
let newArr = [...elements];
let tbody = document.querySelector('tbody');

tbody.addEventListener('click', e => {
  let cell = e.target;
  if (cell.tagName === 'TD') {
    let index = newArr.indexOf(cell);
    let activeIndex = newArr.length - 1 - index;
    newArr[activeIndex].style.backgroundColor = 'red';
  }
})