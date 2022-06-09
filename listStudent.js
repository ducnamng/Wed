var list = [];
var name = ["Huy", "Luan", "Hien", "a1", "a2", "a3", "a4", "a5", "a6", "a7"];

for (let i = 0; i < 10; i++) {
  var point = Math.floor(Math.random() * 10);
  var id = Math.floor(Math.random() * 1000000);
  var level;
  if (point < 5) {
    level = "trung binh";
  } else if (point >= 5 && point < 8) {
    level = "kha";
  } else {
    level = "gioi";
  }
  let persion = {
    id,
    name: name[i],
    point,
    level
  };
  list.push(persion);
}

function filterPersion(list, point) {
  const render = list.filter((item) => {
    return item.point === point;
  });
  console.log("filter", render);
}
filterPersion(list, 5);

function sortPersion(list) {
  const render = list.sort((a, b) => {
    return a.point - b.point;
  });
  console.log("sort", render);
}
// sortPersion(list);

function deletePersion(list, id) {
  var arr = [];
  const index = list.findIndex((item) => item.id === id);
  console.log(index);
  if (index === 0) {
    arr = list.slice(1);
  } else if (index === list.length - 1) {
    arr = list.slice(0, index);
  } else arr = [...list.slice(0, index), ...list.slice(index + 1)];
  console.log("delete", arr);
}
// deletePersion(list, list[0].id);

function updatePersion(list, id, point) {
  var arr = [];
  const index = list.findIndex((item) => item.id === id);

  //
  var find;
  if (point < 5) {
    find = { ...list[index], point, level: "trung binh" };
  } else if (point > -5 && point < 8) {
    find = { ...list[index], point, level: "kha" };
  } else find = { ...list[index], point, level: "gioi" };

  //
  if (index === 0) {
    arr = list.slice(1);
    arr.splice(index, 0, find);
  } else if (index === list.length - 1) {
    arr = list.slice(0, index);
    arr.splice(index, 0, find);
  } else {
    arr = [...list.slice(0, index), ...list.slice(index + 1)];
    arr.splice(index, 0, find);
  }
  console.log("update", arr);
}
updatePersion(list, list[5].id, 6);
