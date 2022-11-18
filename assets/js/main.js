// 1 задание
// function js_style(){
//   text.style = 'color: red; font-size: 3rem; background-color: blue; border-radius: 4px;';
//   jsstyle.style = 'color: red; font-size: 3rem; background-color: blue; border-radius: 4px;';
// }

// 2 задание
// function resul_name(event){
//   event.preventDefault();
//   var name1=document.getElementById('name1').value;
//   var name2=document.getElementById('name2').value;
//   var result=name1+name2;
//   document.getElementById("result").innerHTML = result;
// }

// 3 задание
// function getAttributes(){
//   var type=w3r.getAttribute("type")
//   var hreflang=w3r.getAttribute("hreflang")
//   var herf=w3r.getAttribute("href")
//   var rel=w3r.getAttribute("rel")
//   var target=w3r.getAttribute("target")
//   document.getElementById("type").innerHTML = type;
//   document.getElementById("hreflang").innerHTML = hreflang;
//   document.getElementById("rel").innerHTML = rel;
//   document.getElementById("target").innerHTML = target;
//   document.getElementById("herf").innerHTML = herf;
// }

// 4 задание
// function insert_Row(){
//   var table=document.getElementById('sampleTable')
//   var child=table.children[0]
//   var i=child.children.length
//   child.insertAdjacentHTML('afterbegin','<tr><td>Row cell1</td><td>Row cell2</td></tr>')
// }

// 5 задание
// function changeContent(){
//   var table=document.getElementById('myTable')
//   var child=table.children[0]
//   var i1= prompt('ведите номер ячейки',1);
//   var i2= prompt('ведите номер столбца',1);
//   var i3= prompt('ведите текст');
//   var tablei1=child.children[i1-1];
//   var elem=tablei1.children[i2-1];
//   elem.innerText=i3
// }

// задание 7
// function removecolor(){
//   var remcol=document.getElementById('colorSelect')
//   var del= remcol.value
//   remcol.children[remcol.selectedIndex]
//   remcol.remove(remcol.selectedIndex)
//   document.getElementById("sas").innerHTML =`Элемент ${del} был удален`
// }

// задание 8
// function getOptions(){
//   var ror=document.getElementById('mySelect');
//   var del= ror.value
//   var num=ror.selectedIndex
//   var res=del+num
//   alert(res)
// }