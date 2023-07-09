let a = document.getElementById("box");
let b = document.getElementById("query");

function abc() {
  a.style.top = "calc(50% - 250px)";
}

function clo() {
  a.style.top = "-100vh";
}
6;
let ot = document.getElementById("bgc");

let nm = document.getElementById("name");
let em = document.getElementById("email");
let mob = document.getElementById("mobile");
let msg = document.getElementById("message");

function sub() {
  ot.style.transform = "scale(1)";

  let oc = document.getElementById("out_rslt");

  let get_nm = nm.value;
  let get_em = em.value;
  let get_mob = mob.value;
  let get_msg = msg.value;

  oc.innerText = get_nm + get_em + get_mob + get_msg;
}

function outclo() {
  ot.style.transform = "scale(0)";
  nm.value = "";
  em.value = "";
  mob.value = "";
  msg.value = "";
}
